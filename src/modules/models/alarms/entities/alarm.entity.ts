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
  export class Alarm extends BaseEntity {
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
    content: string;
  
    @Column()
    author_email: string;
  }