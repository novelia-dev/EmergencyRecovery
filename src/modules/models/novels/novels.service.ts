import { FileService } from './../../functions/file/file.service';
import { IsEmail } from 'class-validator';
import { Injectable } from '@nestjs/common';
import { CreateNovelDto } from './dto/create-novel.dto';
import { UpdateNovelDto } from './dto/update-novel.dto';
import { Novel } from './entities/novel.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Profile } from '../profiles/entities/profile.entity';
import { ProfilesService } from '../profiles/profiles.service';
import { CreateNovelFullDataDto } from './dto/create-novel-full-data.dto';

@Injectable()
export class NovelsService {
  constructor(
    @InjectRepository(Novel) private novelsRepository: Repository<Novel>,
    @InjectRepository(Profile) private profilesRepository: Repository<Profile>,
    private readonly profilesService: ProfilesService,
    private readonly fileService: FileService,
  ) {}

  async create(createNovelDto: CreateNovelDto, email: string): Promise<any> {
    const newNovel = await this.novelsRepository.create(createNovelDto);
    const authorProfile = await this.profilesService.getByEmail(email);
    newNovel.authorProfile = authorProfile;
    await this.novelsRepository.save(newNovel);
    await this.profilesRepository.save(authorProfile);
    return newNovel;
  }

  async newCreate(data: CreateNovelFullDataDto, email: string) {
    if (data.thumbnail) {
      const imgUrl = await this.fileService.uploadFile(data.thumbnail);
      data.thumbnail = imgUrl.filePath;
    }
    const newNovel = await this.novelsRepository.create(data);
    const authorProfile = await this.profilesService.getByEmail(email);
    newNovel.authorProfile = authorProfile;
    await this.novelsRepository.save(newNovel);
    await this.profilesRepository.save(authorProfile);
    return newNovel;
  }

  async findAll(): Promise<Novel[]> {
    return this.novelsRepository.find();
  }

  async findOne(id: number) {
    return await this.novelsRepository.findOne({ where: { id: id } });
  }

  update(id: number, updateNovelDto: UpdateNovelDto) {
    return `This action updates a #${id} novel`;
  }

  remove(id: number) {
    return this.novelsRepository.delete(id);
  }
}
