import { JwtAuthGuard } from './../../functions/auth/jwt/jwt.guard';
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
import { PresentsService } from './presents.service';
import { CreatePresentDto } from './dto/create-present.dto';
import { UpdatePresentDto } from './dto/update-present.dto';
import { ApiOperation, ApiTags, ApiBearerAuth } from '@nestjs/swagger';
import { CurrentUser } from 'src/commons/common/decorators/user.decorator';
import { User } from '../users/entities/user.entity';

@ApiTags('presents')
@Controller('presents')
export class PresentsController {
  constructor(private readonly presentsService: PresentsService) {}

  @ApiOperation({
    description: '경품 등록',
  })
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Post()
  create(
    @CurrentUser() user: User,
    @Body() createPresentDto: CreatePresentDto,
  ) {
    const data = {
      email: user.email,
      ...createPresentDto,
    };
    return this.presentsService.create(data);
  }

  @ApiOperation({
    deprecated: true,
  })
  @Get()
  findAll() {
    return this.presentsService.findAll();
  }

  @ApiOperation({
    deprecated: true,
  })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.presentsService.findOne(+id);
  }

  @ApiOperation({
    deprecated: true,
  })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePresentDto: UpdatePresentDto) {
    return this.presentsService.update(+id, updatePresentDto);
  }

  @ApiOperation({
    deprecated: true,
  })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.presentsService.remove(+id);
  }
}