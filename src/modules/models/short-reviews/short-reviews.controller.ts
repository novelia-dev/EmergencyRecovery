import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { ShortReviewsService } from './short-reviews.service';
import { CreateShortReviewDto } from './dto/create-short-review.dto';
import { UpdateShortReviewDto } from './dto/update-short-review.dto';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/modules/functions/auth/jwt/jwt.guard';
import { User } from '../users/entities/user.entity';
import { CurrentUser } from 'src/commons/common/decorators/user.decorator';

@ApiTags('short-reviews')
@Controller('short-reviews')
export class ShortReviewsController {
  constructor(private readonly shortReviewsService: ShortReviewsService) {}

  @ApiOperation({
    summary: '객관식 리뷰 등록하기',
  })
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Post('new')
  create(
    @CurrentUser() user: User,
    @Body() createShortReviewDto: CreateShortReviewDto,
  ) {
    const data = {
      user_id: user.id,
      ...createShortReviewDto,
    };
    return this.shortReviewsService.create(data);
  }

  @ApiOperation({
    summary: '객관식 리뷰 가져오기',
  })
  @Get()
  findAll() {
    return this.shortReviewsService.findAll();
  }

  @ApiOperation({
    deprecated: true,
  })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.shortReviewsService.findOne(+id);
  }

  @ApiOperation({
    deprecated: true,
  })
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateShortReviewDto: UpdateShortReviewDto,
  ) {
    return this.shortReviewsService.update(+id, updateShortReviewDto);
  }

  @ApiOperation({
    deprecated: true,
  })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.shortReviewsService.remove(+id);
  }
}
