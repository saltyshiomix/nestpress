import { NestFactory } from '@nestjs/core';
import { NextModule } from '@nestpress/next';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.get(NextModule).prepare().then(() => {
    app.listen(3000, '0.0.0.0', () => {
      console.log('> Ready on http://localhost:3000');
    });
  });
}

bootstrap();
