<p align="center">😎 @nestpress/next 😎</p>
<p align="center">The Next.js integration module for NestJS</p>
<p align="center">
  <a href="https://npm.im/@nestpress/next" alt="A version of @nestpress/next">
    <img src="https://img.shields.io/npm/v/@nestpress/next.svg">
  </a>
  <a href="https://npm.im/@nestpress/next" alt="Downloads of @nestpress/next">
    <img src="https://img.shields.io/npm/dt/@nestpress/next.svg">
  </a>
  <img src="https://img.shields.io/npm/l/@nestpress/next.svg" alt="Package License (MIT)">
</p>

## Installation

```bash
$ npm install --save @nestpress/next next react react-dom
```

## Usage

First, register it in the application module so that Nest can handle dependencies:

```ts
// app.module.ts

import {
  Module,
  NestModule,
  MiddlewareConsumer,
  RequestMethod,
} from '@nestjs/common';
import {
  NextModule,
  NextMiddleware,
} from '@nestpress/next';

@Module({
  imports: [
    // register NextModule
    NextModule,
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    // handle scripts
    consumer
      .apply(NextMiddleware)
      .forRoutes({
        path: '_next*',
        method: RequestMethod.GET,
      });

    // handle static assets
    consumer
      .apply(NextMiddleware)
      .forRoutes({
        path: 'static*',
        method: RequestMethod.GET,
      });
  }
}
```

Next, prepare the Next.js service in the main entry point:

```ts
// main.ts

import { NestFactory } from '@nestjs/core';
import { NextModule } from '@nestpress/next';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.get(NextModule).prepare().then(() => {
    app.listen(3000, '0.0.0.0', () => {
      console.log('> Ready on http://localhost:3000 with Next.js!');
    });
  });
}

bootstrap();
```

Finally, use `NextService` in your controllers like this:

**home.module.ts**

```ts
// home.module.ts

import { Module } from '@nestjs/common';
import { NextModule } from '@nestpress/next';
import { HomeController } from './home.controller';

@Module({
  imports: [
    NextModule,
  ],
  controllers: [
    HomeController,
  ],
})
export class HomeModule {}
```

```ts
// home.controller.ts

import {
  IncomingMessage,
  ServerResponse,
} from 'http';
import {
  Controller,
  Get,
  Req,
  Res,
} from '@nestjs/common';
import { NextService } from '@nestpress/next';

@Controller()
export class HomeController {
  constructor(
    private readonly next: NextService,
  ) {}

  @Get()
  public async showHome(@Req() req: IncomingMessage, @Res() res: ServerResponse) {
    // this will render `pages/index.tsx`!
    this.next.render('/index', req, res);
  }
}
```

```tsx
// pages/index.tsx

export default () => (
  <p>Next.js on top of NestJS!</p>
);
```

Go to `http://localhost:3000` and you'll see `Next.js on top of NestJS!`.
