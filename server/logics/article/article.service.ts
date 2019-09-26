import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {
  Repository,
  DeleteResult,
  SelectQueryBuilder,
  Brackets,
  ObjectLiteral,
} from 'typeorm';
import { Article } from '../../entities/article.entity';
import { CreateArticleDto } from './dto/create-article.dto';

@Injectable()
export class ArticleService {
  private readonly perPage: number = 16;

  constructor(
    @InjectRepository(Article)
    private readonly repository: Repository<Article>,
  ) {}

  private async getQueryBuilder(): Promise<SelectQueryBuilder<Article>> {
    return this.repository
              .createQueryBuilder('article')
              // .leftJoinAndSelect('article.tags', 'tag')
              .leftJoinAndSelect('article.views', 'view')
              .where('article.publishedAt IS NOT NULL')
              .andWhere('article.publishedAt < NOW()')
              .orderBy('article.publishedAt', 'DESC');
  }

  public async find(skip?: number, take?: number): Promise<Article[]> {
    const builder = await this.getQueryBuilder();
    return builder.skip(skip).take(take).getMany();
  }

  public async findAll(): Promise<Article[]> {
    return this.find();
  }

  public async findByPage(page: number): Promise<Article[]> {
    // const config: RootConfig = this.config.getConfig();
    // const skip: number = config.page.perPage * (page - 1);
    // const take: number = config.page.perPage;
    const skip: number = this.perPage * (page - 1);
    const take: number = this.perPage;
    return this.find(skip, take);
  }

  public async findAndCount(): Promise<number> {
    const builder = await this.getQueryBuilder();
    return builder.getCount();
  }

  public async findByIdsAndPage(ids: number[], page: number): Promise<Article[]> {
    if (ids.length === 0) {
      return [];
    }
    // const config: RootConfig = this.config.getConfig();
    // const skip: number = config.page.perPage * (page - 1);
    // const take: number = config.page.perPage;
    const skip: number = this.perPage * (page - 1);
    const take: number = this.perPage;
    const builder = await this.getQueryBuilder();
    return builder.andWhereInIds(ids).skip(skip).take(take).getMany();
  }

  public async findByIdsAndCount(ids: number[]): Promise<number> {
    if (ids.length === 0) {
      return 0;
    }
    const builder = await this.getQueryBuilder();
    return builder.andWhereInIds(ids).getCount();
  }

  public async findHotArticles(): Promise<Article[]> {
    // const config: RootConfig = this.config.getConfig();
    // const skip: number = 0;
    // const take: number = config.page.perPage;
    const skip: number = 0;
    const take: number = this.perPage;
    const articles: Article[] = await this.find(skip, take);
    articles.sort((a, b) => b.views.length - a.views.length);
    return articles;
  }

  public async search(values: string[], page: number): Promise<Article[]> {
    const where: Brackets = new Brackets(qb => {
      const SQL: string = 'article.title ILIKE :title';
      const getParameters = (value: string): ObjectLiteral => ({
        title: `%${value}%`,
      });
      for (let i = 0; i < values.length; i++) {
        const value: string = values[i];
        if (i === 0) {
          qb.where(SQL, getParameters(value))
        } else {
          qb.orWhere(SQL, getParameters(value))
        }
      }
    });
    // const config: RootConfig = this.config.getConfig();
    // const skip: number = config.page.perPage * (page - 1);
    // const take: number = config.page.perPage;
    const skip: number = this.perPage * (page - 1);
    const take: number = this.perPage;
    let builder = await this.getQueryBuilder();
    return builder.andWhere(where).skip(skip).take(take).getMany();
  }

  public async searchAndCount(values: string[]): Promise<number> {
    const where: Brackets = new Brackets(qb => {
      const SQL: string = 'article.title ILIKE :title';
      const getParameters = (value: string): ObjectLiteral => ({
        title: `%${value}%`,
      });
      for (let i = 0; i < values.length; i++) {
        const value: string = values[i];
        if (i === 0) {
          qb.where(SQL, getParameters(value))
        } else {
          qb.orWhere(SQL, getParameters(value))
        }
      }
    });
    let builder = await this.getQueryBuilder();
    return builder.andWhere(where).getCount();
  }

  public async findOne(id: number): Promise<Article | undefined> {
    const builder = await this.getQueryBuilder();
    return builder.andWhere('article.id = :id', { id }).getOne();
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
