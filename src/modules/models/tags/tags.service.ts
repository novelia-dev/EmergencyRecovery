import { NovelsService } from './../novels/novels.service';
import { Injectable } from '@nestjs/common';
import { CreateTagDto } from './dto/create-tag.dto';
import { UpdateTagDto } from './dto/update-tag.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Tag } from './entities/tag.entity';
import { Repository } from 'typeorm';
import { Novel } from '../novels/entities/novel.entity';

@Injectable()
export class TagsService {
  constructor(
    @InjectRepository(Tag)
    private tagsRepository: Repository<Tag>,
    private readonly novelsService: NovelsService,
  ) {}

  async getNovelsByTag(tag: string) {
    const allTag = await this.tagsRepository.findOne({ where: { name: tag } });
    const datas = allTag.novel;
    let i = 0;
    let arr = [];
    arr = [];
    for (i = 0; i < datas.length; i++) {
      const newNovel = await this.novelsService.findOne(datas[i].id);
      arr.push(newNovel);
    }
    return arr;
  }

  async create(createTagDto: CreateTagDto) {
    return await this.tagsRepository.save(createTagDto);
  }

  async findAll() {
    return await this.tagsRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} tag`;
  }

  update(id: number, updateTagDto: UpdateTagDto) {
    return `This action updates a #${id} tag`;
  }

  remove(id: number) {
    return `This action removes a #${id} tag`;
  }
}