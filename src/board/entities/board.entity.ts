import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsOptional, IsString } from 'class-validator';
import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('study_board')
export class BoardTest {
  @Column()
  @ApiProperty({ description: '작성자번호' })
  registerNo: number;

  @Column()
  @IsString()
  @IsOptional()
  @ApiProperty({ description: '작성자' })
  registerName: string;

  @Column()
  @IsString()
  @IsOptional()
  @ApiProperty({ description: '수정자' })
  modifierName: string;

  @Column()
  @IsString()
  @IsOptional()
  @ApiProperty({ description: '회원아이디' })
  memberId: string;

  @Column()
  @IsNumber()
  @PrimaryColumn()
  @ApiProperty({ description: '게시글번호', required: true })
  articleNo: number;

  @Column()
  @IsString()
  @ApiProperty({ description: '제목', required: true })
  title: string;

  @Column()
  @IsString()
  @ApiProperty({ description: '내용' })
  content: string;
}
