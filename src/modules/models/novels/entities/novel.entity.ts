import {
  BaseEntity,
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Quiz } from '../../quizs/entities/quiz.entity';
import { Tag } from '../../tags/entities/tag.entity';
import { Profile } from '../../profiles/entities/profile.entity';
import { Page } from '../../pages/entities/page.entity';

@Entity()
export class Novel extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  author: string;

  @Column()
  content: string;

  @Column()
  genre: string;

  @Column()
  grade: number;

  @Column()
  start_date: Date;

  @Column({ default: false })
  isBought: boolean;

  @Column({ default: 0 })
  short_done: number;

  @Column({ default: 0 })
  multiple_done: number;

  @Column({
    default:
      'https://images.unsplash.com/photo-1615928081877-3885aba162ba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
  })
  thumbnail: string;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt!: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updatedAt!: Date;

  @DeleteDateColumn({ type: 'timestamp' })
  deletedAt?: Date;

  @OneToMany(() => Quiz, (quiz) => quiz.novel, { eager: true })
  quizs: Quiz[];

  @ManyToMany(() => Tag, (tag) => tag.novel, { eager: true })
  tags: Tag[];

  @ManyToOne(() => Profile, (profile) => profile.myNovels)
  authorProfile: Profile;

  @ManyToOne(() => Profile, (profile) => profile.scraps)
  scrappedUsers: Profile[];

  @OneToMany(() => Page, (page) => page.novel, { eager: true })
  pages: Page[];
}