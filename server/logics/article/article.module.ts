import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Article } from '../../entities/article.entity';
import { ArticleService } from './article.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Article]),
  ],
  providers: [
    ArticleService,
  ],
  exports: [
    ArticleService,
  ],
})
export class ArticleModule {}
