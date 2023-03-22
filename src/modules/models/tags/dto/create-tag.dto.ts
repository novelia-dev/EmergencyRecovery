import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CreateTagDto {
  @ApiProperty({
    example: '신나는',
    description: '태그 이름',
    required: true,
  })
  @IsNotEmpty()
  @IsString()
  name: string;
}
