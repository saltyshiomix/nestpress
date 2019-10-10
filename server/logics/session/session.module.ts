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

  public initialize(app: INestApplication) {
    super.initialize(app, {
      secret: this.env.get('APP_SESSION_SECRET'),
      username: this.env.get('DB_USERNAME'),
      password: this.env.get('DB_PASSWORD'),
      database: this.env.get('DB_DATABASE'),
      host: 'localhost',
      port: 5432,
      expire: 7 * 24 * 60 * 60 * 1000,
    });
  }
}
