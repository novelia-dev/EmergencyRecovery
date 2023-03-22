import {
  BaseEntity,
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Novel } from '../../novels/entities/novel.entity';

@Entity()
export class Page extends BaseEntity {
  //BASIC COLUMNS
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt!: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updatedAt!: Date;

  @DeleteDateColumn({ type: 'timestamp' })
  deletedAt?: Date;

  //INPUT COLUMNS
  @Column()
  page_number: number;

  @Column()
  page_title: string;

  @Column()
  page_content: string;

  //RELATED COLUMNS
  @ManyToOne(() => Novel, (novel) => novel.pages)
  novel: Novel;
}
