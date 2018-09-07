import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as fs from 'fs';
import * as path from 'path';

async function bootstrap() {
  const httpsOptions = {
    key: fs.readFileSync(path.join(__dirname, '../ssl_cert/214979365060370.key')),
    cert: fs.readFileSync(path.join(__dirname, '../ssl_cert/214979365060370.crt')),
  };
  const app = await NestFactory.create(AppModule, httpsOptions);
  await app.listen(3000);
}
bootstrap();
