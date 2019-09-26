import {
  Controller,
  Get,
  Req,
  Res,
} from '@nestjs/common';
import { ArticleService } from '../../../logics/article/article.service';
import { Article } from '../../../entities/article.entity';

@Controller('api/articles')
export class ApiArticleController {
  constructor(
    private readonly articleService: ArticleService,
  ) {}

  @Get()
  public async get(@Req() req, @Res() res) {
    // const articles: Article[] = await this.articleService.findAll();
    const articles = [
      { id: 1, title: 'Title 1', body: '# Hello World' },
      { id: 2, title: 'Title 2', body: '`some code`' },
    ];
    res.json(articles);
  }
}
