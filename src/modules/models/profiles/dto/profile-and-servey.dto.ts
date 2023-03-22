import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class ProfileAndServeyDto {
  @ApiProperty({
    example: '노벨리어',
    description: '이름',
    required: true,
  })
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty({
    example: '남자',
    description: '성별',
    required: true,
  })
  sex: string;

  @ApiProperty({
    example: '20대',
    description: '나이대',
    required: true,
  })
  ages: string;

  @ApiProperty({
    example: 'novelist0001@gmail.com',
    description: '이메일',
    required: true,
  })
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @ApiProperty({
    example: '01012344321',
    description: '핸드폰 번호',
    required: true,
  })
  @IsNotEmpty()
  @IsString()
  phone: string;

  @ApiProperty({
    example: '작가',
    description: '기본적인 역할',
    required: true,
  })
  @IsNotEmpty()
  @IsString()
  main_role: string;

  @ApiProperty({
    example: '인스타그램',
    description: '유입경로',
    required: true,
  })
  @IsNotEmpty()
  @IsString()
  route: string;

  @ApiProperty({
    example: '??',
    description: '다른 피드백 사용 경험',
    required: true,
  })
  @IsNotEmpty()
  @IsString()
  other_feedback: string;

  @ApiProperty({
    example: 'O',
    description: '전업여부',
    required: true,
  })
  @IsNotEmpty()
  @IsString()
  is_fulltime_job: string;

  @ApiProperty({
    example: '1년',
    description: '웹소설 지필기간',
    required: true,
  })
  @IsNotEmpty()
  @IsString()
  time_for_writer: string;

  @ApiProperty({
    example: '1',
    description: '연재작품 수',
    required: true,
  })
  @IsNotEmpty()
  @IsString()
  novel_writed: string;

  @ApiProperty({
    example: '네이버',
    description: '연재 플랫폼',
    required: false,
  })
  @IsNotEmpty()
  @IsString()
  platform: string;

  @ApiProperty({
    example: 'O',
    description: '유료연재 경험',
    required: true,
  })
  @IsNotEmpty()
  @IsString()
  money: string;
}
