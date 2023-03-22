import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateInServiceDto {
  @ApiProperty({
    description: '유저 id 값',
    example: 5,
    required: true,
  })
  @IsNotEmpty()
  @IsNumber()
  user_id: number;

  @ApiProperty({
    description: '소설 id 값',
    example: 5,
    required: true,
  })
  @IsNotEmpty()
  @IsNumber()
  novel_id: number;

  @ApiProperty({
    description: '별점',
    example: 4,
    required: true,
  })
  @IsNotEmpty()
  @IsNumber()
  star: number;

  @ApiProperty({
    description: '응답1',
    example: '캐릭터가 매력적',
    required: true,
  })
  @IsNotEmpty()
  @IsString()
  ans1: string;

  @ApiProperty({
    description: '응답2',
    example: '스토리가 매력적',
    required: true,
  })
  @IsNotEmpty()
  @IsString()
  ans2: string;

  @ApiProperty({
    description: '응답3',
    example: '매력적',
    required: true,
  })
  @IsNotEmpty()
  @IsString()
  ans3: string;

  @ApiProperty({
    description: '응답4',
    example: '흡입력이 좋다',
    required: true,
  })
  @IsNotEmpty()
  @IsString()
  ans4: string;
}
