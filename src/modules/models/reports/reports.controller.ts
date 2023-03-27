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
  import { ReportsService } from './reports.service';
  import { CreateReportDto } from './dto/create-report.dto';
  import { UpdateReportDto } from './dto/update-report.dto';
  import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
  import { JwtAuthGuard } from 'src/modules/functions/auth/jwt/jwt.guard';
  import { CurrentUser } from 'src/commons/common/decorators/user.decorator';
  import { User } from '../users/entities/user.entity';
  
  @ApiTags('reports')
  @Controller('reports')
  export class ReportsController {
    constructor(private readonly reportsService: ReportsService) {}
  
    @ApiOperation({
      description: '신고하기 post기능',
    })
    @ApiBearerAuth()
    @UseGuards(JwtAuthGuard)
    @Post()
    create(@CurrentUser() user: User, @Body() createReportDto: CreateReportDto) {
      const data = {
        email: user.email,
        ...createReportDto,
      };
      return this.reportsService.create(data);
    }
  
    @ApiOperation({
      deprecated: true,
    })
    @Get()
    findAll() {
      return this.reportsService.findAll();
    }
  
    @ApiOperation({
      deprecated: true,
    })
    @Get(':id')
    findOne(@Param('id') id: string) {
      return this.reportsService.findOne(+id);
    }
  
    @ApiOperation({
      deprecated: true,
    })
    @Patch(':id')
    update(@Param('id') id: string, @Body() updateReportDto: UpdateReportDto) {
      return this.reportsService.update(+id, updateReportDto);
    }
  
    @ApiOperation({
      deprecated: true,
    })
    @Delete(':id')
    remove(@Param('id') id: string) {
      return this.reportsService.remove(+id);
    }
  }