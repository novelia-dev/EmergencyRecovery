import { Novel } from 'src/modules/models/novels/entities/novel.entity';
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

@Entity()
export class Quiz extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt!: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updatedAt!: Date;

  @DeleteDateColumn({ type: 'timestamp' })
  deletedAt?: Date;

  @Column()
  novelPk: number;

  @Column()
  question: string;

  @Column()
  answer: string;

  @Column()
  wrong1: string;

  @Column()
  wrong2: string;

  @ManyToOne(() => Novel, (novel) => novel.quizs)
  novel: Novel;
}
