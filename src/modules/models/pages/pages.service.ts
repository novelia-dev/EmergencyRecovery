import { NovelsService } from './../novels/novels.service';
import { Injectable } from '@nestjs/common';
import { CreatePageDto } from './dto/create-page.dto';
import { UpdatePageDto } from './dto/update-page.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Page } from './entities/page.entity';
import { Repository } from 'typeorm';
import { Novel } from '../novels/entities/novel.entity';

@Injectable()
export class PagesService {
  constructor(
    @InjectRepository(Page)
    private pagesRepository: Repository<Page>,
    @InjectRepository(Novel)
    private novelsRepository: Repository<Novel>,
    private novelsService: NovelsService,
  ) {}

  async create(createPageDto: CreatePageDto) {
    const { page_number, page_title, page_content, novel_id } = createPageDto;
    const data = {
      page_number: page_number,
      page_title: page_title,
      page_content: page_content,
    };
    const newPage = await this.pagesRepository.create(data);
    const novel = await this.novelsService.findOne(novel_id);
    novel.pages = [...novel.pages, newPage];
    await this.novelsRepository.save(novel);
    await this.pagesRepository.save(newPage);
    return newPage;
  }

  findAll() {
    return `This action returns all pages`;
  }

  async findOne(id: number) {
    return await this.pagesRepository.findOne({ where: { id: id } });
  }

  update(id: number, updatePageDto: UpdatePageDto) {
    return `This action updates a #${id} page`;
  }

  remove(id: number) {
    return `This action removes a #${id} page`;
  }
}
