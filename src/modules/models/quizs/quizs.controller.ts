import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { QuizsService } from './quizs.service';
import { CreateQuizDto } from './dto/create-quiz.dto';
import { UpdateQuizDto } from './dto/update-quiz.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('quizs')
@Controller('quizs')
export class QuizsController {
  constructor(private readonly quizsService: QuizsService) {}

  @ApiOperation({
    summary: '소설 퀴즈 등록하기',
    description: '독자를 판별하기 위한 퀴즈를 등록합니다',
  })
  @Post()
  create(@Body() createQuizDto: CreateQuizDto) {
    return this.quizsService.create(createQuizDto);
  }

  @ApiOperation({
    deprecated: true,
  })
  @Get()
  findAll() {
    return this.quizsService.findAll();
  }

  @ApiOperation({
    deprecated: true,
  })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.quizsService.findOne(+id);
  }

  @ApiOperation({
    deprecated: true,
  })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateQuizDto: UpdateQuizDto) {
    return this.quizsService.update(+id, updateQuizDto);
  }

  @ApiOperation({
    deprecated: true,
  })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.quizsService.remove(+id);
  }
}
