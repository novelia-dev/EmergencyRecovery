import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateReportDto {
  @ApiProperty({
    description: 'content',
    example: '사이트에서 여기 이부분 오류났어요',
    required: true,
  })
  @IsNotEmpty()
  @IsString()
  content: string;
}