import {
  Entity,
  Column,
  PrimaryColumn
} from 'typeorm';

@Entity()
export class PostgresExpressSession {
  @PrimaryColumn({
    type: 'varchar',
    collation: 'default'
  })
  sid!: string;

  @Column('json')
  sess!: string;

  @Column('timestamp')
  expire!: number;
}
