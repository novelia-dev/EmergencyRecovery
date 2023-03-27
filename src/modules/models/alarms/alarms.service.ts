import { Injectable } from '@nestjs/common';
import { CreateAlarmDto } from './dto/create-alarm.dto';
import { UpdateAlarmDto } from './dto/update-alarm.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Alarm } from './entities/alarm.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AlarmsService {
  constructor(
    @InjectRepository(Alarm)
    private alarmsRepository: Repository<Alarm>,
  ) {}

  create(createAlarmDto: CreateAlarmDto) {
    return 'This action adds a new alarm';
  }

  findAll() {
    return `This action returns all alarms`;
  }

  findOne(id: number) {
    return `This action returns a #${id} alarm`;
  }

  update(id: number, updateAlarmDto: UpdateAlarmDto) {
    return `This action updates a #${id} alarm`;
  }

  remove(id: number) {
    return `This action removes a #${id} alarm`;
  }
}