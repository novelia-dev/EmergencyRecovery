import {
    Controller,
    Get,
    Post,
    Body,
    Patch,
    Param,
    Delete,
  } from '@nestjs/common';
  import { AnnouncementsService } from './announcements.services';
  import { CreateAnnouncementDto } from './dto/create-announcement.dto';
  import { UpdateAnnouncementDto } from './dto/update-announcement.dto';
  import { ApiOperation, ApiTags } from '@nestjs/swagger';
  
  @ApiTags('announcements')
  @Controller('announcements')
  export class AnnouncementsController {
    constructor(private readonly announcementsService: AnnouncementsService) {}
    @ApiOperation({
      summary: '공지사항 가져오기',
    })
    @Get()
    findAll() {
      return this.announcementsService.findAll();
    }
  
    @ApiOperation({
      summary: '공지사항 1개 가져오기',
    })
    @Get(':id')
    findOne(@Param('id') id: string) {
      return this.announcementsService.findOne(+id);
    }
  
    @ApiOperation({
      deprecated: true,
    })
    @Post()
    create(@Body() createAnnouncementDto: CreateAnnouncementDto) {
      return this.announcementsService.create(createAnnouncementDto);
    }
  
    @ApiOperation({
      deprecated: true,
    })
    @Patch(':id')
    update(
      @Param('id') id: string,
      @Body() updateAnnouncementDto: UpdateAnnouncementDto,
    ) {
      return this.announcementsService.update(+id, updateAnnouncementDto);
    }
  
    @ApiOperation({
      deprecated: true,
    })
    @Delete(':id')
    remove(@Param('id') id: string) {
      return this.announcementsService.remove(+id);
    }
  }