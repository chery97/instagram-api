import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';
import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('study_feed')
export class Feed {
  @PrimaryColumn()
  @ApiProperty({ description: '피드번호' })
  sno: number;

  @Column()
  @IsString()
  @IsOptional()
  @ApiProperty({ description: '작성자' })
  memberNo: string;

  @Column()
  @IsString()
  @IsOptional()
  @ApiProperty({ description: '제목' })
  title: string;

  @Column()
  @IsString()
  @ApiProperty({ description: '내용' })
  content: string;

  @Column()
  @IsString()
  @ApiProperty({ description: '썸네일Url' })
  thumbUrl: string;

  @Column()
  @ApiProperty({ description: '작성일' })
  createdAt: Date;

  @Column()
  @ApiProperty({ description: '수정일' })
  updatedAt: Date | null;
}
