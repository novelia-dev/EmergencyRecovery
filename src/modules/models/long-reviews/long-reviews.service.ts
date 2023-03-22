import { Injectable } from '@nestjs/common';
import { CreateLongReviewDto } from './dto/create-long-review.dto';
import { UpdateLongReviewDto } from './dto/update-long-review.dto';
import { CreateInServiceDto } from './dto/create-in-service.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { LongReview } from './entities/long-review.entity';
import { Repository } from 'typeorm';
import { Novel } from '../novels/entities/novel.entity';
import { NovelsService } from '../novels/novels.service';

@Injectable()
export class LongReviewsService {
  constructor(
    @InjectRepository(LongReview)
    private longReviewsReposiroty: Repository<LongReview>,
    @InjectRepository(Novel)
    private novelsRepository: Repository<Novel>,
    private novelsService: NovelsService,
  ) {}

  async create(data: CreateInServiceDto) {
    const newReview = await this.longReviewsReposiroty.save(data);
    const novel = await this.novelsService.findOne(data.novel_id);
    novel.short_done += 1;
    await this.novelsRepository.save(novel);
    return newReview;
  }

  async findAll() {
    return await this.longReviewsReposiroty.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} longReview`;
  }

  update(id: number, updateLongReviewDto: UpdateLongReviewDto) {
    return `This action updates a #${id} longReview`;
  }

  remove(id: number) {
    return `This action removes a #${id} longReview`;
  }
}
