import { TypeOrmModule } from '@nestjs/typeorm';
import { Module, forwardRef } from '@nestjs/common';
import { NovelsService } from './novels.service';
import { NovelsController } from './novels.controller';
import { Novel } from './entities/novel.entity';
import { Quiz } from '../quizs/entities/quiz.entity';
import { Profile } from '../profiles/entities/profile.entity';
import { ProfilesModule } from '../profiles/profiles.module';
import { PagesModule } from '../pages/pages.module';
import { FileModule } from 'src/modules/functions/file/file.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Novel, Quiz, Profile]),
    ProfilesModule,
    forwardRef(() => PagesModule),
    FileModule,
  ],
  controllers: [NovelsController],
  providers: [NovelsService],
  exports: [NovelsService],
})
export class NovelsModule {}
