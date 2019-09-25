import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {
  Repository,
  DeleteResult,
} from 'typeorm';
import { Article } from '../../entities/article.entity';
import { CreateArticleDto } from './dto/create-article.dto';

@Injectable()
export class ArticleService {
  constructor(
    @InjectRepository(Article)
    private readonly repository: Repository<Article>,
  ) {}

  public async findAll(): Promise<Article[]> {
    return this.repository.find();
  }

  public async findOne(id: number): Promise<Article | undefined> {
    return this.repository.findOne(id);
  }

  public async create(createArticleDto: CreateArticleDto): Promise<Article> {
    return this.repository.create(createArticleDto);
  }

  public async save(article: Article): Promise<Article> {
    return this.repository.save(article);
  }

  public async delete(id: number): Promise<DeleteResult> {
    return this.repository.delete(id);
  }
}
