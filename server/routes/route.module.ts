import { Module } from '@nestjs/common';
import { NextModule } from '@nestpress/next';
import { AuthModule } from '../logics/auth/auth.module';
import { ArticleModule } from '../logics/article/article.module';
import { ApiAuthController } from './api/auth.controller';
import { ApiAdminMeController } from './api/admin/me.controller';
import { AdminController } from './admin.controller';
import { HomeController } from './home.controller';

@Module({
  imports: [
    NextModule,
    AuthModule,
    ArticleModule,
  ],
  controllers: [
    ApiAuthController,
    ApiAdminMeController,
    AdminController,
    HomeController,
  ],
})
export class RouteModule {}