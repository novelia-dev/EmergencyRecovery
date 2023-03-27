import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateReportServiceDto {
  @ApiProperty({
    description: 'content',
    example: '사이트에서 여기 이부분 오류났어요',
    required: true,
  })
  @IsNotEmpty()
  @IsString()
  content: string;

  @ApiProperty({
    description: 'novelist0001@gmail.com',
    example: '사용자 이메일',
    required: true,
  })
  email: string;
}