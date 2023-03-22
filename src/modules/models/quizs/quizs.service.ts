import { Injectable, UnauthorizedException } from '@nestjs/common';
import { CreateQuizDto } from './dto/create-quiz.dto';
import { UpdateQuizDto } from './dto/update-quiz.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Quiz } from './entities/quiz.entity';
import { Repository } from 'typeorm';
import { NovelsService } from '../novels/novels.service';
import { Novel } from '../novels/entities/novel.entity';

@Injectable()
export class QuizsService {
  constructor(
    @InjectRepository(Quiz)
    private quizsRepository: Repository<Quiz>,
    @InjectRepository(Novel) private novelsRepository: Repository<Novel>,
    private readonly novelsService: NovelsService,
  ) {}

  async create(createQuizDto: CreateQuizDto) {
    const { novelPk } = createQuizDto;
    const novel = await this.novelsService.findOne(novelPk);
    if (!novel) {
      throw new UnauthorizedException('소설을 찾을 수 없음');
    }
    const newQuiz = await this.quizsRepository.create(createQuizDto);
    novel.quizs = [newQuiz];
    await this.quizsRepository.save(newQuiz);
    await this.novelsRepository.save(novel);
    return newQuiz;
  }

  findAll() {
    return `This action returns all quizs`;
  }

  findOne(id: number) {
    return `This action returns a #${id} quiz`;
  }

  update(id: number, updateQuizDto: UpdateQuizDto) {
    return `This action updates a #${id} quiz`;
  }

  remove(id: number) {
    return `This action removes a #${id} quiz`;
  }
}
