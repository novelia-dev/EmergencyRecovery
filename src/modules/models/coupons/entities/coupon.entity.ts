import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Profile } from '../../profiles/entities/profile.entity';

@Entity()
export class Coupon extends BaseEntity {
  // BASIC COLUMNS
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt!: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updatedAt!: Date;

  // INPUT COLUMNS
  @Column()
  name: string;

  @Column()
  discount: number;

  @Column()
  start_date: Date;

  @Column()
  end_date: Date;

  @Column({ default: false })
  is_used: boolean;

  //RELATED COLUMNS
  @ManyToOne(() => Profile, (profile) => profile.coupons)
  profile: Profile;
}
