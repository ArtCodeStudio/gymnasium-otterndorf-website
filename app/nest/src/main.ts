import './@types';
import { NestFactory } from '@nestjs/core';
import { Logger } from '@nestjs/common';
import * as Express from 'express';
import {
  NestExpressApplication,
  ExpressAdapter,
} from '@nestjs/platform-express';
import * as cookieParser from 'cookie-parser';
import * as expressSession from 'express-session';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

import { AppModule } from './app.module';
import * as config from './config/config';

async function bootstrap() {
  const console = new Logger('bootstrap');
  const express = Express();
  const app = await NestFactory.create<NestExpressApplication>(
    AppModule,
    new ExpressAdapter(express),
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
  const session = expressSession(config.session);

  /**
   * Set express session
   */
  app.use(session);

  const swaggerConfig = new DocumentBuilder()
    .setTitle('Gymnasium Otterndorf API')
    .setDescription('Documentation for our own API Endpoints')
    .setVersion('1.0')
    .setContact("Art+Code Studio Team", "https://artandcode.studio/", "hi@artandcode.studio")
    .setTermsOfService("https://gym.artandcode.de/credits")
    .addTag('calendar')
    .addTag('search')
    .addTag('suggestions')
    .build();
  const document = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('api', app, document);


  await app.listen(config.app.port);

  console.log(`Start app on localhost:${config.app.port}`);
}
bootstrap();
