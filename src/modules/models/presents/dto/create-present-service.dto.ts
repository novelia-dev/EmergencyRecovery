import { IsString, IsNotEmpty, IsEmail } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreatePresentServiceDto {
  @ApiProperty({
    description: '경품 당첨 내용',
    example: '치킨 기프티콘',
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  presentName: string;

  @ApiProperty({
    description: '당첨 받는 유저 이메일',
    example: 'novelist0001@gmail.com',
    required: true,
  })
  @IsNotEmpty()
  @IsEmail()
  email: string;
}