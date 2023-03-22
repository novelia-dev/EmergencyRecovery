import {
  BaseEntity,
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class ShortReview extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt!: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updatedAt!: Date;

  @DeleteDateColumn({ type: 'timestamp' })
  deletedAt?: Date;

  @Column()
  user_id: number;

  @Column()
  novel_id: number;

  @Column()
  star: number;

  @Column()
  ans1: string;

  @Column()
  ans2: string;

  @Column()
  ans3: string;

  @Column()
  ans4: string;

  @Column({ default: 'normal' })
  state: string;
}
