import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreatePresentDto {
  @ApiProperty({
    description: '경품 당첨 내용',
    example: '치킨 기프티콘',
    required: true,
  })
  @IsNotEmpty()
  @IsString()
  presentName: string;
}