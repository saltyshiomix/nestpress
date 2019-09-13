import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { NextModule } from '@nestpress/next';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.get(NextModule).prepare().then(() => {
    app.listen(4000, '0.0.0.0', () => {
      console.log('> Ready on http://localhost:4000');
    });
  });
}

bootstrap();
