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
import { ArticleService } from '../../logics/article/article.service';
import { Article } from '../../entities/article.entity';

@Controller()
export class HomeController {
  constructor(
    private readonly nextService: NextService,
    private readonly articleService: ArticleService,
  ) {}

  @Get()
  public async showHome(@Req() req: Request, @Res() res: Response) {
    const articles: Article[] = await this.articleService.findAll();
    return this.nextService.renderWithData('/index', { articles }, req, res);
  }
}
