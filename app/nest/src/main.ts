import type {} from './@types';
import { NestFactory } from '@nestjs/core';
import { Logger } from '@nestjs/common';
import { fetch } from './dependencies/fetch';
import Express from 'express';
import {
  NestExpressApplication,
  ExpressAdapter,
} from '@nestjs/platform-express';
import cookieParser from 'cookie-parser';
import expressSession from 'express-session';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

import { AppModule } from './app.module';
import { session as configSession, app as configApp } from './config/config';

async function bootstrap() {
  const console = new Logger('bootstrap');
  const express = Express();
  const expressAdapter = new ExpressAdapter(express);
  const app = await NestFactory.create<NestExpressApplication>(
    AppModule.register(expressAdapter),
    expressAdapter,
    {
      logger: ['error', 'warn', 'debug', 'log'],
    },
  );

  app.enableCors({
    origin: '*', // TODO get all allowed domains from database and change this on runtime if a new shop is installed if possible?
  });

  app.use(cookieParser());

  /**
   * Needed if this app is behind a proxy with secure cookies
   * @see https://github.com/expressjs/session#cookiesecure
   */
  app.set('trust proxy', 1); // trust first proxy

  /**
   * Init express session
   */
  const session = expressSession(configSession);

  /**
   * Set express session
   */
  app.use(session);

  const swaggerConfig = new DocumentBuilder()
    .setTitle('Gymnasium Otterndorf API')
    .setDescription('Documentation for our own API Endpoints')
    .setVersion('1.0')
    .setContact(
      'Art+Code Studio Team',
      'https://artandcode.studio/',
      'hi@artandcode.studio',
    )
    .setTermsOfService('https://gym.artandcode.de/credits')
    .addTag('calendar')
    .addTag('search')
    .addTag('suggestions')
    .build();
  const document = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('api', app, document);

  await app.listen(configApp.port);

  console.log(`Start app on localhost:${configApp.port}`);
}

const waitForStrapi = async () => {
  return new Promise<void>((resolve) => {
    const url = process.env.STRAPI_REMOTE_URL + '/_health';
    const interval = setInterval(async () => {
      try {
        const res = await fetch(url);
        if (res.ok) {
          clearInterval(interval);
          return resolve();
        }
        console.debug(`Wait for ${url} to be ready..`);
      } catch (_) {}
    }, 3000);
  });
};

const start = async () => {
  await waitForStrapi();
  await bootstrap();
};

start();
