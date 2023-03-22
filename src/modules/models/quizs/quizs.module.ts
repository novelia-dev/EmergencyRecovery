import { Module } from '@nestjs/common';
import { QuizsService } from './quizs.service';
import { QuizsController } from './quizs.controller';
import { Quiz } from './entities/quiz.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Novel } from 'src/modules/models/novels/entities/novel.entity';
import { NovelsModule } from '../novels/novels.module';

@Module({
  imports: [TypeOrmModule.forFeature([Quiz, Novel]), NovelsModule],
  controllers: [QuizsController],
  providers: [QuizsService],
})
export class QuizsModule {}
