import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
} from 'typeorm';
import { Article } from './article.entity';

@Entity()
export class View {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column('varchar')
  url!: string;

  @Column('boolean', {
    default: false,
  })
  cache!: boolean;

  @Column('varchar')
  browser!: string;

  @Column('varchar')
  engine!: string;

  @Column('varchar')
  os!: string;

  @Column('varchar')
  cpu!: string;

  @Column('varchar')
  device!: string;

  @Column('varchar')
  ua!: string;

  @Column('timestamptz')
  viewedAt!: Date;

  @ManyToOne(type => Article, article => article.views)
  article!: Article;

  // @ManyToOne(type => Tag, tag => tag.views)
  // tag!: Tag;
}
