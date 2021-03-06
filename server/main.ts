import { join } from 'path';
import { config } from 'dotenv';
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { NextModule } from '@nestpress/next';
import { AppModule } from './app.module';
import { LogicModule } from './logics/logic.module';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.use(require('helmet')());
  app.use(require('compression')());

  app.get(LogicModule).initialize(app);

  app.get(NextModule).prepare().then(() => {
    app.listen(process.env.APP_PORT, process.env.APP_HOST, async () => {
      console.log(`[ NESTPRESS ] Ready on ${process.env.APP_PROTOCOL}://${process.env.APP_HOST}:${process.env.APP_PORT}`);
    });
  });
}

config({
  path: join(process.cwd(), '.env'),
});

bootstrap();
