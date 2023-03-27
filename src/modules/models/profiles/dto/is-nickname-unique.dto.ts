import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class isNicknameUniqueDto {
  @ApiProperty({
    example: '노벨리어123',
    description: '닉네임',
    required: true,
  })
  @IsNotEmpty()
  @IsString()
  name: string;
}