import { Injectable } from '@nestjs/common';
import { CreateShortReviewDto } from './dto/create-short-review.dto';
import { UpdateShortReviewDto } from './dto/update-short-review.dto';
import { CreateInServiceDto } from './dto/create-in-service.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { ShortReview } from './entities/short-review.entity';
import { Repository } from 'typeorm';
import { NovelsService } from '../novels/novels.service';
import { Novel } from '../novels/entities/novel.entity';

@Injectable()
export class ShortReviewsService {
  constructor(
    @InjectRepository(ShortReview)
    private shortReviewsReposiroty: Repository<ShortReview>,
    private novelsService: NovelsService,
    @InjectRepository(Novel)
    private novelsRepository: Repository<Novel>,
  ) {}
  async create(data: CreateInServiceDto) {
    const newReview = await this.shortReviewsReposiroty.save(data);
    const novel = await this.novelsService.findOne(data.novel_id);
    novel.short_done += 1;
    await this.novelsRepository.save(novel);
    return newReview;
  }

  async findUserReviews(id: number) {
    return await this.shortReviewsReposiroty.find({ where: { user_id: id } });
  }

  async findAll() {
    return await this.shortReviewsReposiroty.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} shortReview`;
  }

  update(id: number, updateShortReviewDto: UpdateShortReviewDto) {
    return `This action updates a #${id} shortReview`;
  }

  remove(id: number) {
    return `This action removes a #${id} shortReview`;
  }
}