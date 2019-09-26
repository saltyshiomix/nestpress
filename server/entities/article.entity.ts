import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm';
import { View } from './view.entity';

@Entity()
export class Article {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar')
  title: string;

  @Column('text')
  body: string;

  @Column('timestamptz', {
    nullable: true,
  })
  publishedAt!: Date;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  // @ManyToMany(type => Tag, tag => tag.articles)
  // @JoinTable()
  // tags!: Tag[];

  @OneToMany(type => View, view => view.article)
  views!: View[];
}
