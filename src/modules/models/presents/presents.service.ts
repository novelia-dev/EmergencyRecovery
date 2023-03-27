import { Injectable } from '@nestjs/common';
import { CreatePresentDto } from './dto/create-present.dto';
import { UpdatePresentDto } from './dto/update-present.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Present } from './entities/present.entity';
import { Repository } from 'typeorm';
import { CreatePresentServiceDto } from './dto/create-present-service.dto';

@Injectable()
export class PresentsService {
  constructor(
    @InjectRepository(Present)
    private presentsRepository: Repository<Present>,
  ) {}

  async create(datas: CreatePresentServiceDto) {
    return await this.presentsRepository.save(datas);
  }

  findAll() {
    return `This action returns all presents`;
  }

  findOne(id: number) {
    return `This action returns a #${id} present`;
  }

  update(id: number, updatePresentDto: UpdatePresentDto) {
    return `This action updates a #${id} present`;
  }

  remove(id: number) {
    return `This action removes a #${id} present`;
  }
}