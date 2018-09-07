import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as fs from 'fs';
import * as path from 'path';
import * as express from 'express';
import * as http from 'http';
import * as https from 'https';

async function bootstrap() {
  const httpsOptions = {
    key: fs.readFileSync(path.join(__dirname, '../ssl_cert/214979365060370.key')),
    cert: fs.readFileSync(path.join(__dirname, '../ssl_cert/214979365060370.pem')),
  };
  const server = express();
  const app = await NestFactory.create(AppModule, server);
  await app.init();

  http.createServer(server).listen(3000);
  https.createServer(httpsOptions, server).listen(3001);
  // await app.listen(3000);
}
bootstrap();
