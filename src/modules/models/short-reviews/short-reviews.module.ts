import { Module } from '@nestjs/common';
import { ShortReviewsService } from './short-reviews.service';
import { ShortReviewsController } from './short-reviews.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ShortReview } from './entities/short-review.entity';
import { NovelsService } from '../novels/novels.service';
import { NovelsModule } from '../novels/novels.module';
import { Novel } from '../novels/entities/novel.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ShortReview, Novel]), NovelsModule],
  controllers: [ShortReviewsController],
  providers: [ShortReviewsService],
})
export class ShortReviewsModule {}
