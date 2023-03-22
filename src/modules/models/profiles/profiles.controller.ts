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
import { ProfilesService } from './profiles.service';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { ApiTags, ApiOperation, ApiBearerAuth } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/modules/functions/auth/jwt/jwt.guard';
import { CurrentUser } from 'src/commons/common/decorators/user.decorator';
import { User } from '../users/entities/user.entity';
import { ProfileAndServeyDto } from './dto/profile-and-servey.dto';

@ApiTags('profiles')
@Controller('profiles')
export class ProfilesController {
  constructor(private readonly profilesService: ProfilesService) {}

  @ApiOperation({
    summary: '정보와 관련된 프로필 만들기&설문조사정보',
    description: '자세한 유저 정보&설문조사정보',
  })
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Post('new')
  newCreate(
    @CurrentUser() user: User,
    @Body() profileAndServeyDto: ProfileAndServeyDto,
  ) {
    console.log(profileAndServeyDto);
    const data = {
      oldEmail: user.email,
      ...profileAndServeyDto,
    };

    // return data;
    return this.profilesService.newCreate(data);
  }

  @ApiOperation({
    summary: '정보와 관련된 프로필 만들기',
    description: '자세한 유저 정보',
  })
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Post()
  create(
    @CurrentUser() user: User,
    @Body() createProfileDto: CreateProfileDto,
  ) {
    const data = {
      email: user.email,
      ...createProfileDto,
    };
    // return data;
    return this.profilesService.create(data);
  }

  @Get()
  findAll() {
    return this.profilesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.profilesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProfileDto: UpdateProfileDto) {
    return this.profilesService.update(+id, updateProfileDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.profilesService.remove(+id);
  }
}
