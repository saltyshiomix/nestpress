import {
  Controller,
  Get,
  Req,
  Res,
} from '@nestjs/common';
import {
  Request,
  Response,
} from 'express';
import { NextService } from '@nestpress/next';

@Controller()
export class HomeController {
  constructor(
    private readonly next: NextService,
  ) {}

  @Get()
  public async showHome(@Req() req: Request, @Res() res: Response) {
    this.next.render('/index', req, res);
  }
}
