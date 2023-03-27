import {
    Controller,
    Get,
    Post,
    Body,
    Patch,
    Param,
    Delete,
  } from '@nestjs/common';
  import { AlarmsService } from './alarms.service';
  import { CreateAlarmDto } from './dto/create-alarm.dto';
  import { UpdateAlarmDto } from './dto/update-alarm.dto';
  import { ApiOperation, ApiTags } from '@nestjs/swagger';
  
  @ApiTags('alarms')
  @Controller('alarms')
  export class AlarmsController {
    constructor(private readonly alarmsService: AlarmsService) {}
  
    @ApiOperation({
      deprecated: true,
    })
    @Post()
    create(@Body() createAlarmDto: CreateAlarmDto) {
      return this.alarmsService.create(createAlarmDto);
    }
  
    @ApiOperation({
      deprecated: true,
    })
    @Get()
    findAll() {
      return this.alarmsService.findAll();
    }
  
    @ApiOperation({
      deprecated: true,
    })
    @Get(':id')
    findOne(@Param('id') id: string) {
      return this.alarmsService.findOne(+id);
    }
  
    @ApiOperation({
      deprecated: true,
    })
    @Patch(':id')
    update(@Param('id') id: string, @Body() updateAlarmDto: UpdateAlarmDto) {
      return this.alarmsService.update(+id, updateAlarmDto);
    }
  
    @ApiOperation({
      deprecated: true,
    })
    @Delete(':id')
    remove(@Param('id') id: string) {
      return this.alarmsService.remove(+id);
    }
  }