import { Module, forwardRef } from '@nestjs/common';
import { PagesService } from './pages.service';
import { PagesController } from './pages.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Page } from './entities/page.entity';
import { NovelsModule } from '../novels/novels.module';
import { Novel } from '../novels/entities/novel.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Page, Novel]),
    forwardRef(() => NovelsModule),
  ],
  controllers: [PagesController],
  providers: [PagesService],
  exports: [PagesService],
})
export class PagesModule {}
