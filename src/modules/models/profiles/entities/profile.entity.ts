import { Novel } from 'src/modules/models/novels/entities/novel.entity';

import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  ManyToMany,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { User } from '../../users/entities/user.entity';
import { Tag } from '../../tags/entities/tag.entity';
import { Genre } from '../../genres/entities/genre.entity';
import { Coupon } from '../../coupons/entities/coupon.entity';

@Entity()
export class Profile extends BaseEntity {
  // BASIC COLUMNS
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt!: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updatedAt!: Date;

  // INPUT COLUMNS
  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column()
  name: string;

  @Column()
  sex: string;

  @Column()
  ages: string;

  @Column({ default: 0 })
  points: number;

  @Column()
  phone: string;

  @Column()
  main_role: string;

  @Column({ default: 'normal' })
  state: string;

  //   RELATION COLUMNS
  @OneToOne(() => User, (user) => user.profile)
  account: User;

  @OneToMany(() => Novel, (novel) => novel.authorProfile, { eager: true })
  myNovels: Novel[];

  @OneToMany(() => Tag, (tag) => tag.preferUsers, { eager: true })
  preferTags: Tag[];

  @OneToMany(() => Tag, (tag) => tag.hateUsers, { eager: true })
  hateTags: Tag[];

  @OneToMany(() => Novel, (novel) => novel.scrappedUsers, { eager: true })
  scraps: Novel[];

  @OneToMany(() => Genre, (genre) => genre.user, { eager: true })
  genres: Genre[];

  @OneToMany(() => Coupon, (coupon) => coupon.profile, { eager: true })
  coupons: Coupon[];
}
