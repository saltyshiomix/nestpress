import {
  Module,
  INestApplication,
} from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeOrmService } from './database/typeorm.service';
import { EnvModule } from './env/env.module';
import { SessionModule } from './session/session.module';
import { AuthModule } from './auth/auth.module';
import { ArticleModule } from './article/article.module';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [EnvModule],
      useClass: TypeOrmService,
    }),
    EnvModule,
    SessionModule,
    AuthModule,
    ArticleModule,
  ],
})
export class LogicModule {
  public initialize(app: INestApplication) {
    app.get(SessionModule).initialize(app);
    app.get(AuthModule).initialize(app);
  }
}
