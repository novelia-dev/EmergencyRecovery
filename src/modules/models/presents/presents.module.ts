import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { PresentsService } from './presents.service';
import { PresentsController } from './presents.controller';
import { Present } from './entities/present.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Present])],
  controllers: [PresentsController],
  providers: [PresentsService],
})
export class PresentsModule {}