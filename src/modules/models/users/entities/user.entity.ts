import {
  BaseEntity,
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Profile } from '../../profiles/entities/profile.entity';

@Entity()
export class User extends BaseEntity {
  // BASIC COLUMNS
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt!: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updatedAt!: Date;

  // INPUT COLUMNS
  @Column()
  email: string;

  @Column()
  password: string;

  //
  @OneToOne(() => Profile, (profile) => profile.account, {
    eager: true,
    nullable: true,
  })
  // @JoinTable({
  //   name: 'profile_id',
  //   joinColumn: {
  //     name: 'profile',
  //     referencedColumnName: 'id',
  //   },
  //   inverseJoinColumn: {
  //     name: 'user',
  //     referencedColumnName: 'id',
  //   },
  // })
  @JoinColumn()
  profile: Profile;
}