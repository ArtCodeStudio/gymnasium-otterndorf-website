import 'source-map-support/register';
import { NestFactory } from '@nestjs/core';
import { ManagerModule } from './manager.module';

async function bootstrap() {
  const app = await NestFactory.create(ManagerModule.forRoot(), {
    logger: ['log', 'error', 'warn', 'debug', 'verbose'],
  });
  await app.listen(3333);
}
bootstrap();
