<p align="center">😎 @nestpress/postgres-express-session 😎</p>
<p align="center">The PosgreSQL with Express Session Module for NestJS</p>
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
$ npm install --save @nestpress/postgres-express-session
```

## Usage

In your application main entry point, just use it like below:

```ts
import { NestFactory } from '@nestjs/core';
import { PostgresExpressSessionModule } from '@nestpress/postgres-express-session';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.get(PostgresExpressSessionModule).initialize(app, {
    secret: 'secret',
    username: 'root',
    password: 'test',
    database: 'test',
    host: 'localhost',
    port: 5432,
    expire: 24 * 60 * 60 * 1000; // one day
  });

  app.listen(3000, '0.0.0.0', () => {
    console.log('Ready on http://localhost:3000');
  });
}

bootstrap();
```

Additionally, we must have `session` table.

If you use TypeORM, the session entity is like this:

```ts
import {
  Entity,
  Column,
  PrimaryColumn,
} from 'typeorm';

@Entity()
export class Session {
  @PrimaryColumn({
    type: 'varchar',
    collation: 'default'
  })
  sid!: string;

  @Column('json')
  sess!: string;

  @Column('timestamp')
  expire!: number;
}
```

Or just use the same entity `PostgresExpressSession`:

```ts
import { Entity } from 'typeorm';
import { PostgresExpressSession } from '@nestpress/postgres-express-session';

@Entity()
export class Session extends PostgresExpressSession {}
```

## Advanced Usage

If you use dotenv, we recommend the following examples:

```ts
// session/session.module.ts

import {
  Module,
  INestApplication,
} from '@nestjs/common';
import { PostgresExpressSessionModule } from '@nestpress/postgres-express-session';
import { EnvModule } from '../env/env.module';
import { EnvService } from '../env/env.service';

@Module({
  imports: [
    EnvModule,
  ],
})
export class SessionModule extends PostgresExpressSessionModule {
  constructor(
    private readonly env: EnvService,
  ) {
    super();
  }

  public initialize(app: INestApplication): void {
    super.initialize(app, {
      secret: this.env.get('SECRET'),
      username: this.env.get('DB_USERNAME'),
      password: this.env.get('DB_PASSWORD'),
      database: this.env.get('DB_DATABASE'),
      host: this.env.get('DB_HOST'),
      port: parseInt(this.env.get('DB_PORT'), 10),
      expire: parseInt(this.env.get('DB_SESSION_EXPIRE'), 10)
    });
  }
}
```

Now we can use this `SessionModule` like this:

```ts
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SessionModule } from './session/session.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.get(SessionModule).initialize(app);

  app.listen(3000, '0.0.0.0', () => {
    console.log('Ready on http://localhost:3000');
  });
}

bootstrap();
```
