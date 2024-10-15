import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

export class CommentDto {
  @ApiProperty({ description: '게시글 ID', example: 1 })
  @IsNumber()
  postId: number; // 댓글이 달릴 게시글의 ID

  @ApiProperty({ description: '사용자 번호', example: 1 })
  @IsNumber()
  userNo: number; // 댓글 작성자의 사용자 번호

  @ApiProperty({ description: '댓글 내용', example: '이것은 댓글입니다.' })
  @IsString()
  content: string; // 댓글 내용
}

export class UpdateCommentDto {
  @ApiProperty({
    description: '댓글 내용',
    example: '이것은 수정된 댓글입니다.',
  })
  @IsString()
  content: string; // 수정할 댓글 내용
}
