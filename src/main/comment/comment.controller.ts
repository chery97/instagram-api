import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CommentService } from './comment.service';
import { CommentDto, UpdateCommentDto } from './dto/comment.dto';

@ApiTags('댓글 API')
@Controller('comments')
export class CommentController {
  constructor(private readonly commentService: CommentService) {}

  @Get()
  @ApiOperation({ summary: '특정 게시글의 댓글 목록 조회' })
  @ApiResponse({ status: 200, description: '댓글 목록' })
  getComments(@Param('postId') postId: number) {
    return this.commentService.getCommentsByPostId(postId);
  }

  @Post()
  @ApiOperation({ summary: '댓글 추가' })
  @ApiResponse({ status: 201, description: '댓글이 추가되었습니다.' })
  create(@Body() commentDto: CommentDto) {
    return this.commentService.create(commentDto);
  }

  @Patch(':commentId')
  @ApiOperation({ summary: '댓글 수정' })
  @ApiResponse({ status: 200, description: '댓글이 수정되었습니다.' })
  update(
    @Param('commentId') commentId: number,
    @Body() updateCommentDto: UpdateCommentDto,
  ) {
    return this.commentService.update(commentId, updateCommentDto);
  }

  @Delete(':commentId')
  @ApiOperation({ summary: '댓글 삭제' })
  @ApiResponse({ status: 204, description: '댓글이 삭제되었습니다.' })
  delete(@Param('commentId') commentId: number) {
    return this.commentService.delete(commentId);
  }
}
