<p align="center">😎 @nestpress/postgres-express-session 😎</p>
<p align="center">The passport initializer module for NestJS</p>
<p align="center">
  <a href="https://npm.im/@nestpress/postgres-express-session" alt="A version of @nestpress/postgres-express-session">
    <img src="https://img.shields.io/npm/v/@nestpress/postgres-express-session.svg">
  </a>
  <a href="https://npm.im/@nestpress/postgres-express-session" alt="Downloads of @nestpress/postgres-express-session">
    <img src="https://img.shields.io/npm/dt/@nestpress/postgres-express-session.svg">
  </a>
  <img src="https://img.shields.io/npm/l/@nestpress/postgres-express-session.svg" alt="Package License (MIT)">
</p>

## Installation

```bash
$ npm install --save @nestpress/postgres-express-session pg
```

## Usage

In your application main entry point, just use it like below:

```ts
import { NestFactory } from '@nestjs/core';
import { PassportModule } from '@nestpress/postgres-express-session';
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
import { PassportModule } from '@nestpress/postgres-express-session';
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
