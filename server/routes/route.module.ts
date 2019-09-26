import { Module } from '@nestjs/common';
import { NextModule } from '@nestpress/next';
import { AuthModule } from '../logics/auth/auth.module';
import { ArticleModule } from '../logics/article/article.module';
import { ApiAuthController } from './api/auth.controller';
import { ApiAdminMeController } from './api/admin/me.controller';
import { ApiArticleController } from './api/general/article.controller';
import { AdminHomeController } from './admin/admin.controller';
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
    ApiArticleController,
    AdminHomeController,
    HomeController,
  ],
})
export class RouteModule {}
