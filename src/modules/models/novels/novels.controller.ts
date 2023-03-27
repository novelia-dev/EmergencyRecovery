import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Req,
  Query,
} from '@nestjs/common';
import { NovelsService } from './novels.service';
import { CreateNovelDto } from './dto/create-novel.dto';
import { UpdateNovelDto } from './dto/update-novel.dto';
import {
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/modules/functions/auth/jwt/jwt.guard';

import { CurrentUser } from 'src/commons/common/decorators/user.decorator';
import { TitleContentDto } from './dto/title-content.dto';
import { User } from '../users/entities/user.entity';
import { CreateNovelBodyDataDto } from './dto/crate-novel-body-data.dto';

@ApiTags('novels')
@Controller('novels')
export class NovelsController {
  constructor(private readonly novelsService: NovelsService) {}

  @ApiOperation({
    summary: 'novel 생성(최신)',
    description: 'novel 생성하기 api',
  })
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Post('new')
  createNewNovel(
    @CurrentUser() user: User,
    @Body() createNovelBodyData: CreateNovelBodyDataDto,
  ) {
    const data = {
      ...createNovelBodyData,
      author: user.profile.name,
    };
    return this.novelsService.newCreate(data, user.email);
  }

  @ApiOperation({
    summary: 'novel 생성',
    description: 'novel 생성하기 api',
    deprecated: true,
  })
  @ApiCreatedResponse({
    description: 'novel 생성하기',
    type: CreateNovelDto,
  })
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Post()
  create(@CurrentUser() user: User, @Body() titleContentDto: TitleContentDto) {
    console.log('here is user', user);
    const data = {
      ...titleContentDto,
      author: user.profile.name,
    };
    return this.novelsService.create(data, user.email);
  }

  @ApiOperation({
    summary: 'novel 가져오기',
    description: 'novel 가져오기 api',
  })
  @ApiCreatedResponse({
    description: 'novel 가져오기',
  })
  @Get('all')
  findAll() {
    return this.novelsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.novelsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateNovelDto: UpdateNovelDto) {
    return this.novelsService.update(+id, updateNovelDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.novelsService.remove(+id);
  }
}