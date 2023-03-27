import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { TagsService } from './tags.service';
import { TagsController } from './tags.controller';
import { Tag } from './entities/tag.entity';
import { NovelsModule } from '../novels/novels.module';

@Module({
  imports: [TypeOrmModule.forFeature([Tag]), NovelsModule],
  controllers: [TagsController],
  providers: [TagsService],
})
export class TagsModule {}