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
import { LogicModule } from './logics/logic.module';
import { RouteModule } from './routes/route.module';
import {
  ApiAuthMiddleware,
  RedirectIfAuthenticatedMiddleware,
  RedirectIfNotAuthenticatedMiddleware,
} from './logics/auth/middlewares';

@Module({
  imports: [
    NextModule,
    LogicModule,
    RouteModule,
  ],
})
export class AppModule implements NestModule {
  public configure(consumer: MiddlewareConsumer) {
    this.handleApiRoutes(consumer);
    this.handleRoutes(consumer);
    this.handleAssets(consumer);
  }

  private handleApiRoutes(consumer: MiddlewareConsumer): void {
    consumer
      .apply(ApiAuthMiddleware)
      .forRoutes('api/admin*');
  }

  private handleRoutes(consumer: MiddlewareConsumer): void {
    consumer
      .apply(RedirectIfAuthenticatedMiddleware)
      .forRoutes({
        path: 'admin/login',
        method: RequestMethod.GET,
      });

    consumer
      .apply(RedirectIfNotAuthenticatedMiddleware)
      .forRoutes({
        path: 'admin',
        method: RequestMethod.GET,
      });
  }

  private handleAssets(consumer: MiddlewareConsumer): void {
    consumer
      .apply(NextMiddleware)
      .forRoutes({
        path: '_next*',
        method: RequestMethod.GET,
      });

    consumer
      .apply(NextMiddleware)
      .forRoutes({
        path: '*',
        method: RequestMethod.GET,
      });
  }
}
