import { NestFactory } from '@nestjs/core';
import * as express from 'express';
import * as bodyParser from 'body-parser';
import { AppModule } from './app.module';

async function bootstrap() {
  const instance = express();
  instance.use(bodyParser.json());
  instance.use(bodyParser.urlencoded({ extended: false }));
  const app = await NestFactory.create(AppModule, instance);
  await app.listen(3000);
}
bootstrap();
