import {
  Controller,
  Get,
  Req,
  Res,
} from '@nestjs/common';
import { NextService } from '@nestpress/next';
import { ApiAdminMeController } from '../api/admin/me.controller';

@Controller('admin')
export class AdminHomeController {
  constructor(
    private readonly next: NextService,
    private readonly api: ApiAdminMeController,
  ) {}

  @Get()
  public async showAdminPage(@Req() req, @Res() res) {
    const data = await this.api.me(req, res);
    await this.next.render('/admin', data, req, res);
  }

  @Get('login')
  public showAdminLoginPage(@Req() req, @Res() res) {
    return this.next.render('/admin/login', req, res);
  }
}
