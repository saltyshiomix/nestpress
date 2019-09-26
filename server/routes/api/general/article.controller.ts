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
      {
        id: 1,
        title: 'The Production Ready Personal Blogging System',
        description: 'On Top of NestJS, NEXT.js and Material UI',
      },
      {
        id: 2,
        title: 'Sophisticated Dark Theme',
        description: 'Soft Paper Style Articles that is Easy on the Eyes',
      },
      {
        id: 3,
        title: 'The Production Ready Personal Blogging System',
        description: 'On Top of NestJS, NEXT.js and Material UI',
      },
      {
        id: 4,
        title: 'Sophisticated Dark Theme',
        description: 'Soft Paper Style Articles that is Easy on the Eyes',
      },
      {
        id: 5,
        title: 'The Production Ready Personal Blogging System',
        description: 'On Top of NestJS, NEXT.js and Material UI',
      },
      {
        id: 6,
        title: 'Sophisticated Dark Theme',
        description: 'Soft Paper Style Articles that is Easy on the Eyes',
      },
    ];

    res.json(articles);
  }
}
