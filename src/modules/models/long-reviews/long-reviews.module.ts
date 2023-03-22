import { Module } from '@nestjs/common';
import { LongReviewsService } from './long-reviews.service';
import { LongReviewsController } from './long-reviews.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LongReview } from './entities/long-review.entity';
import { Novel } from '../novels/entities/novel.entity';
import { NovelsModule } from '../novels/novels.module';

@Module({
  imports: [TypeOrmModule.forFeature([LongReview, Novel]), NovelsModule],
  controllers: [LongReviewsController],
  providers: [LongReviewsService],
})
export class LongReviewsModule {}
