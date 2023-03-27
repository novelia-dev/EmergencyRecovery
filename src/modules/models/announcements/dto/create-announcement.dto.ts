import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateAnnouncementDto {
  @ApiProperty({
    name: 'title',
    example: '새로운 로맨스',
    required: true,
  })
  @IsNotEmpty()
  @IsString()
  title: string;

  @ApiProperty({
    name: 'author',
    example: '모이',
    required: true,
  })
  @IsNotEmpty()
  @IsString()
  author: string;

  @ApiProperty({
    name: 'content',
    example: '우리의 사랑은 그때부터 시작이였다..',
    required: true,
  })
  @IsNotEmpty()
  @IsString()
  content: string;
}