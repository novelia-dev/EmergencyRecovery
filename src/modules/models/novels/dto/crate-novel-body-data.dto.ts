import { genreTypes } from '../../../../commons/types/genres.type';
import { ApiProperty } from '@nestjs/swagger';
import { IsDate, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateNovelBodyDataDto {
  @ApiProperty({
    description: 'title',
    example: '새로운 로맨스',
    required: true,
  })
  @IsNotEmpty()
  @IsString()
  title: string;

  @ApiProperty({
    description: '웹소설 소개',
    example: '66666년만에 깨어난 흑마법사',
    required: true,
  })
  @IsNotEmpty()
  @IsString()
  content: string;

  @ApiProperty({
    description: '장르',
    example: '로맨스',
    required: true,
  })
  @IsNotEmpty()
  @IsString()
  genre: string;

  @ApiProperty({
    description: '썸네일',
    example: 'form data로 보낸다.',
    required: false,
  })
  thumbnail;

  // @ApiProperty({
  //   description: '태그들',
  //   example: '[신남, 차가움]',
  //   required: true,
  // })
  // @IsNotEmpty()
  // tags: string[];
}