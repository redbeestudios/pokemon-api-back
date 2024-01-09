import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  require('dotenv').config();
  const port = 5000;
  console.log('Listening on port ', port);
  await app.listen(port);
}
bootstrap();
