import {
  Controller,
  Get,
  Req,
  Res,
} from '@nestjs/common';
import { NextService } from '@nestpress/next';

@Controller('admin')
export class AdminHomeController {
  constructor(
    private readonly nextService: NextService,
  ) {}

  @Get()
  public showAdmin(@Req() req, @Res() res) {
    const query = {
      user: req.user,
    };
    return this.nextService.render('/admin', query, req, res);
  }

  @Get('login')
  public showAdminLogin(@Req() req, @Res() res) {
    return this.nextService.render('/admin/login', req, res);
  }
}
