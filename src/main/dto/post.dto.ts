import { ApiProperty } from '@nestjs/swagger';
import {
  IsArray,
  IsBoolean,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class PostDto {
  @ApiProperty({ description: '게시글 id', example: '1' })
  @IsNumber()
  postId: number;

  @ApiProperty({ description: '사용자 번호', example: '1' })
  @IsNumber()
  userNo: number;

  @ApiProperty({ description: '사용자 이름', example: 'Joy' })
  @IsString()
  userName?: string;

  @ApiProperty({
    description: '사용자 프로필 이미지 URL',
    example: 'http://example.com/image.jpg',
  })
  @IsString()
  userProfileImage?: string;

  @ApiProperty({
    description: '게시글 내용',
    example: 'This is a test post.',
  })
  @IsOptional()
  @IsString()
  contents?: string;

  @ApiProperty({
    description: '이미지나 비디오 URL',
    example: 'http://example.com/image.jpg',
  })
  @IsArray()
  imageUrls: string[];

  @ApiProperty({
    description: '좋아요 수',
    example: '1',
  })
  @IsOptional()
  @IsNumber()
  likeCount?: number;

  @ApiProperty({
    description: '사용자가 좋아요를 눌렀는지 여부',
    example: 'true',
  })
  @IsOptional()
  @IsBoolean()
  isLiked?: boolean;

  @ApiProperty({
    description: '댓글 수',
    example: '1',
  })
  @IsOptional()
  @IsNumber()
  commentCount?: number;

  @ApiProperty({
    description: '댓글 기능 제한 여부',
    example: 'false',
  })
  @IsOptional()
  @IsBoolean()
  isCommentDisabled?: boolean;

  @ApiProperty({
    description: '댓글 목록',
    example: '[댓글1, 댓글2, ...]',
  })
  @IsOptional()
  @IsArray()
  comments?: string[];

  @ApiProperty({
    description: '게시글 생성일',
    example: '2024-01-01T00:00:00Z',
  })
  @IsOptional()
  @IsString()
  createdAt?: Date;

  @ApiProperty({
    description: '게시글 수정일',
    example: '2024-01-01T00:00:00Z',
  })
  @IsOptional()
  @IsString()
  updatedAt?: Date;

  @ApiProperty({
    description: '해시태그 리스트',
    example: '[태그1, 태그2, ...]',
  })
  @IsOptional()
  @IsArray()
  tags?: string[];

  @ApiProperty({
    description: '게시글 위치',
    example: '서울',
  })
  @IsOptional()
  @IsString()
  location?: string;

  @ApiProperty({
    description: '멘션된 사용자 리스트',
    example: '[사용자1, 사용자2, ...]',
  })
  @IsOptional()
  @IsArray()
  mentions?: string[];

  @ApiProperty({
    description: '미디어 유형(이미지, 비디오)',
    example: 'image',
  })
  @IsOptional()
  @IsString()
  mediaType?: string;
}
