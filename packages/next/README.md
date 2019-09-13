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
$ npm install --save @nestpress/next
```

## Usage

### Set Up

First, populate `package.json`, `tsconfig.json` and `tsconfig.server.json`:

#### package.json

```json
{
  "name": "sample-app",
  "scripts": {
    "dev": "ts-node --project tsconfig.server.json server/main.ts",
    "build": "next build && tsc --project tsconfig.server.json",
    "start": "cross-env NODE_ENV=production node .next/production-server/main.js"
  },
  "dependencies": {
    "@nestjs/common": "^6.6.7",
    "@nestjs/core": "^6.6.7",
    "@nestpress/next": "latest",
    "next": "^9.0.5",
    "react": "^16.9.0",
    "react-dom": "^16.9.0",
    "reflect-metadata": "^0.1.13",
    "rxjs": "^6.5.3"
  },
  "devDependencies": {
    "@types/node": "^12.7.5",
    "@types/react": "^16.9.2",
    "@types/react-dom": "^16.9.0",
    "cross-env": "^5.2.1",
    "ts-node": "^8.3.0",
    "typescript": "^3.6.3"
  }
}
```

#### tsconfig.json

```json
{
  "compilerOptions": {
    "target": "esnext",
    "module": "esnext",
    "moduleResolution": "node",
    "jsx": "preserve",
    "lib": [
      "dom",
      "dom.iterable",
      "esnext"
    ],
    "strict": true,
    "noEmit": true,
    "allowJs": true,
    "skipLibCheck": true,
    "esModuleInterop": true,
    "isolatedModules": true,
    "resolveJsonModule": true,
    "forceConsistentCasingInFileNames": true,
    "emitDecoratorMetadata": true,
    "experimentalDecorators": true,
    "incremental": true
  },
  "include": [
    "next-env.d.ts",
    "**/*.ts",
    "**/*.tsx"
  ],
  "exclude": [
    "node_modules"
  ]
}
```

#### tsconfig.server.json

```json
{
  "extends": "./tsconfig.json",
  "compilerOptions": {
    "module": "commonjs",
    "noEmit": false,
    "outDir": ".next/production-server"
  },
  "include": [
    "server"
  ]
}
```

### Implementation

#### server/main.ts

Register `NextModule` in your application module so that the Nest can handle dependencies:

```ts
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
import { AppController } from './app.controller';

@Module({
  imports: [
    // register NextModule
    NextModule,
  ],
  controllers: [
    AppController,
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

#### server/app.module.ts

Prepare the Next.js service in the main entry point:

```ts
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

#### server/app.controller.ts

Use `NextService` in your controllers like this:

```ts
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

#### pages/index.tsx

In the `pages` directory, we can do the same as the Next.js way:

```tsx
export default () => (
  <p>Next.js on top of NestJS!</p>
);
```

### Development Mode

```bash
$ yarn dev (or `npm run dev`)
```

Go to `http://localhost:3000` and you'll see `Next.js on top of NestJS!`.

### Production Mode

```bash
$ yarn build (or `npm run build`)
$ yarn start (or `npm start`)
```
