import { ApiProperty } from '@nestjs/swagger';
import { IsEmpty, IsNumber, IsString } from 'class-validator';

export class InsertBoardDto {
  @IsNumber()
  @IsEmpty()
  @ApiProperty({
    description: '게시글 id',
    required: true,
  })
  id: number;

  @IsString()
  @IsEmpty()
  @ApiProperty({ description: '게시글 제목', required: false })
  title: string;
}
