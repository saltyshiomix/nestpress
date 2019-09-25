import { Module } from '@nestjs/common';
import { NextModule } from '@nestpress/next';
import { AuthModule } from '../logics/auth/auth.module';
import { ApiAuthController } from './api/auth.controller';
import { ApiMeController } from './api/me.controller';
import { AdminController } from './admin.controller';
import { HomeController } from './home.controller';

@Module({
  imports: [
    NextModule,
    AuthModule,
  ],
  controllers: [
    ApiAuthController,
    ApiMeController,
    AdminController,
    HomeController,
  ],
})
export class RouteModule {}
