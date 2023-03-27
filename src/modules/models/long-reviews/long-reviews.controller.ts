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
import { LongReviewsService } from './long-reviews.service';
import { CreateLongReviewDto } from './dto/create-long-review.dto';
import { UpdateLongReviewDto } from './dto/update-long-review.dto';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/modules/functions/auth/jwt/jwt.guard';
import { CurrentUser } from 'src/commons/common/decorators/user.decorator';
import { User } from '../users/entities/user.entity';

@ApiTags('long-reviews')
@Controller('long-reviews')
export class LongReviewsController {
  constructor(private readonly longReviewsService: LongReviewsService) {}

  @ApiOperation({
    summary: '유저가 한 리뷰 찾기',
  })
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Get('user')
  getReviews(@CurrentUser() user: User) {
    return this.longReviewsService.findUserReviews(user.id);
  }

  @ApiOperation({
    summary: '주관식 리뷰 하기',
  })
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Post()
  create(
    @CurrentUser() user: User,
    @Body() createLongReviewDto: CreateLongReviewDto,
  ) {
    const data = {
      user_id: user.id,
      ...createLongReviewDto,
    };
    return this.longReviewsService.create(data);
  }

  @ApiOperation({
    summary: '주관식 리뷰 전부 가져오기',
  })
  @Get()
  findAll() {
    return this.longReviewsService.findAll();
  }

  @ApiOperation({
    deprecated: true,
  })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.longReviewsService.findOne(+id);
  }

  @ApiOperation({
    deprecated: true,
  })
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateLongReviewDto: UpdateLongReviewDto,
  ) {
    return this.longReviewsService.update(+id, updateLongReviewDto);
  }

  @ApiOperation({
    deprecated: true,
  })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.longReviewsService.remove(+id);
  }
}