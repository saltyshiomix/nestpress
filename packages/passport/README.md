<p align="center">😎 @nestpress/passport 😎</p>
<p align="center">The passport initializer module for NestJS</p>
<p align="center">
  <a href="https://npm.im/@nestpress/passport" alt="A version of @nestpress/passport">
    <img src="https://img.shields.io/npm/v/@nestpress/passport.svg">
  </a>
  <a href="https://npm.im/@nestpress/passport" alt="Downloads of @nestpress/passport">
    <img src="https://img.shields.io/npm/dt/@nestpress/passport.svg">
  </a>
  <img src="https://img.shields.io/npm/l/@nestpress/passport.svg" alt="Package License (MIT)">
</p>

## Installation

```bash
$ npm install --save @nestpress/passport
```

## Usage

In your application main entry point, just use it like below:

```ts
import { NestFactory } from '@nestjs/core';
import { PassportModule } from '@nestpress/passport';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.get(PassportModule).initialize(app);

  app.listen(3000, '0.0.0.0', () => {
    console.log('Ready on http://localhost:3000');
  });
}

bootstrap();
```

## Options

```ts
import { NestFactory } from '@nestjs/core';
import { PassportModule } from '@nestpress/passport';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // these are default options
  app.get(PassportModule).initialize(app, {
    serializeUserFn: (user: any, cb: any) => cb(null, user),
    deserializeUserFn: (obj: any, cb: any) => cb(null, obj),
  });

  app.listen(3000, '0.0.0.0', () => {
    console.log('Ready on http://localhost:3000');
  });
}

bootstrap();
```
