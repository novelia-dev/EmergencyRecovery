import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreateQuizDto {
  @ApiProperty({
    description: '소설의 id 값',
    example: 3,
    required: true,
  })
  @IsNotEmpty()
  @IsNumber()
  novelPk: number;

  @ApiProperty({
    description: '확인 질문',
    example: '주인공의 이름은?',
    required: true,
  })
  @IsNotEmpty()
  @IsNumber()
  question: string;

  @ApiProperty({
    description: '정답',
    example: '김독자',
    required: true,
  })
  @IsNotEmpty()
  @IsNumber()
  answer: string;

  @ApiProperty({
    description: '오답1',
    example: '유상혁',
    required: true,
  })
  @IsNotEmpty()
  @IsNumber()
  wrong1: string;

  @ApiProperty({
    description: '오답2',
    example: '유정아',
    required: true,
  })
  @IsNotEmpty()
  @IsNumber()
  wrong2: string;
}
