import {
  Module,
  INestApplication,
} from '@nestjs/common';
import * as session from 'express-session';

interface PostgresExpressSessionOptions {
  secret: string;
  username: string;
  password: string;
  database: string;
  host: string;
  port: number;
  expire?: number;
}

@Module({})
export class PostgresExpressSessionModule {
  public initialize(app: INestApplication, options: PostgresExpressSessionOptions) {
    const {
      secret,
      username,
      password,
      database,
      host,
      port,
      expire,
    } = options;

    const crear_interval: number = ~~((expire || 24 * 60 * 60 * 1000) / 1000);
    const pgSession = require('connect-pg-simple')(session);
    app.use(session({
      secret,
      store: new pgSession({
        conString: `postgres://${username}:${password}@${host}:${port}/${database}`,
        crear_interval,
      }),
      resave: false,
      saveUninitialized: false,
      rolling: true,
      cookie: {
        httpOnly: false,
        maxAge: crear_interval * 1000,
      },
    }));
  }
}
