import {
  Module,
  INestApplication,
} from '@nestjs/common';
import * as passport from 'passport';

interface PassportInitializeOptions {
  serializeUserFn?<TUser, TID>(user: TUser, done: (err: any, id?: TID) => void): void;
  deserializeUserFn?<TUser, TID>(id: TID, done: (err: any, user?: TUser) => void): void;
}

@Module({})
export class PassportModule {
  public initialize(app: INestApplication, initializeOptions?: PassportInitializeOptions) {
    app.use(passport.initialize());
    app.use(passport.session());
    const options: PassportInitializeOptions = Object.assign({
      serializeUserFn: (user: any, cb: any) => cb(null, user),
      deserializeUserFn: (obj: any, cb: any) => cb(null, obj),
    }, initializeOptions || {});
    passport.serializeUser(options.serializeUserFn!);
    passport.deserializeUser(options.deserializeUserFn!); 
  }
}
