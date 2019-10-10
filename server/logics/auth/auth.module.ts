import passport from 'passport';
import {
  Module,
  INestApplication,
} from '@nestjs/common';
import { EnvModule } from '../env/env.module';
import { EnvService } from '../env/env.service';
import { AuthService } from './auth.service';
import { LocalLoginStrategy } from './strategies';

@Module({
  imports: [
    EnvModule,
  ],
  providers: [
    AuthService,
    LocalLoginStrategy,
  ],
  exports: [
    AuthService,
  ],
})
export class AuthModule {
  constructor(
    private readonly env: EnvService,
    private readonly authService: AuthService,
  ) {}

  public initialize(app: INestApplication) {
    app.use(require('express-session')({
      secret: this.env.get('APP_SESSION_SECRET'),
      resave: false,
      saveUninitialized: true,
    }));
    app.use(passport.initialize());
    app.use(passport.session());

    passport.serializeUser((user: any, done: (err: any, id?: any) => void) => done(null, user));
    passport.deserializeUser((id: any, done: (err: any, user?: any) => void) => done(null, id));

    passport.use(new LocalLoginStrategy(this.authService));
  }
}
