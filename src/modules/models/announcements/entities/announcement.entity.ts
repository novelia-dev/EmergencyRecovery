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
  export class Announcement extends BaseEntity {
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
    title: string;
  
    @Column()
    content: string;
  
    @Column({
      default: '관리자',
    })
    author: string;
  }