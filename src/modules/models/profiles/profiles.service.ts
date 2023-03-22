import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Profile } from './entities/profile.entity';
import { Repository } from 'typeorm';
import { CreateAndJoinUserDto } from './dto/create-and-join-user.dto';
import { User } from '../users/entities/user.entity';
import { UsersService } from '../users/users.service';
import { ProfileAndServeyJoinDto } from './dto/profile-and-servey-join.dto';
import axios from 'axios';

@Injectable()
export class ProfilesService {
  constructor(
    @InjectRepository(Profile)
    private profilesRepository: Repository<Profile>,
    @InjectRepository(User)
    private usersRepository: Repository<User>,
    private usersService: UsersService,
  ) {}

  async getByEmail(email: string) {
    const profile = await this.profilesRepository.findOne({
      where: { email: email },
    });
    if (profile) {
      return profile;
    }
    throw new HttpException(
      '사용자 이메일이 존재하지 않습니다.',
      HttpStatus.NOT_FOUND,
    );
  }

  async newCreate(data: ProfileAndServeyJoinDto) {
    const dataForProfile = {
      email: data.email,
      name: data.name,
      sex: data.sex,
      ages: data.ages,
      phone: data.phone,
      main_role: data.main_role,
    };
    const dataForServey = {
      유입경로: data.route,
      다른피드백사용경험: data.other_feedback,
      전업여부: data.is_fulltime_job,
      웹소설자필기간: data.novel_writed,
      연재플랫폼: data.platform,
      유료연재경험: data.money,
      웹소설읽는빈도: data.frequency,
    };
    console.log(dataForServey);
    console.log(process.env.SPREADSHEET_URL);
    console.log('data', { ...dataForServey });
    await axios({
      method: 'get',
      url: process.env.SPREADSHEET_URL,
      params: {
        ...dataForServey,
      },
    });
    console.log('done?');
    const newProfile = await this.profilesRepository.create(dataForProfile);
    const userForThisProfile = await this.usersService.findOneByEmail(
      data.email,
    );
    userForThisProfile.profile = newProfile;
    // newProfile.account = userForThisProfile;
    await this.profilesRepository.save(newProfile);
    await this.usersRepository.save(userForThisProfile);
    return newProfile;
  }

  async create(data: CreateAndJoinUserDto) {
    const newProfile = await this.profilesRepository.create(data);
    const userForThisProfile = await this.usersService.findOneByEmail(
      data.email,
    );
    userForThisProfile.profile = newProfile;
    // newProfile.account = userForThisProfile;
    await this.profilesRepository.save(newProfile);
    await this.usersRepository.save(userForThisProfile);
    return newProfile;
  }

  async findAll() {
    return this.profilesRepository.find();
  }

  async findOne(id: number) {
    return this.profilesRepository.findOne({ where: { id: id } });
  }

  update(id: number, updateProfileDto: UpdateProfileDto) {
    return this.profilesRepository.update(id, updateProfileDto);
  }

  remove(id: number) {
    return this.profilesRepository.delete(id);
  }
}