import {
  Controller,
  Get,
  Req,
  Res,
} from '@nestjs/common';
import { NextService } from '@nestpress/next';

@Controller('admin')
export class AdminController {
  constructor(
    private readonly nextService: NextService,
  ) {}

  @Get('login')
  public showLogin(@Req() req, @Res() res) {
    return this.nextService.render('/admin/login', req, res);
  }
}
