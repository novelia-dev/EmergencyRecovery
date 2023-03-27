import { Novel } from 'src/modules/models/novels/entities/novel.entity';
import {
  BaseEntity,
  Column,
  Entity,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Profile } from '../../profiles/entities/profile.entity';

@Entity()
export class Tag extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToMany(() => Novel, (novel) => novel.tags)
  novel: Novel[];

  @ManyToOne(() => Profile, (profile) => profile.preferTags)
  preferUsers: Profile[];

  @ManyToOne(() => Profile, (profile) => profile.hateTags)
  hateUsers: Profile[];
}