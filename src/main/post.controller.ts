import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

import { PostDto } from './dto/post.dto';
import { PostEntity } from './entities/post.entity';
import { PostService } from './post.service';

@Controller('api/post')
@ApiTags('게시글 API')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Post('/')
  @ApiResponse({
    status: 201,
    description: '게시글이 등록되었습니다.',
    type: PostEntity,
  })
  async create(@Body() postDto: PostDto): Promise<PostEntity> {
    return await this.postService.create(postDto);
  }

  @Put('/:id')
  @ApiResponse({
    status: 200,
    description: '게시글이 수정되었습니다.',
    type: PostEntity,
  })
  @ApiResponse({
    status: 404,
    description: '게시글을 찾을 수 없습니다.',
  })
  async update(
    @Param('id') id: number,
    @Body('isCommentDisabled') isCommentDisabled: boolean,
  ): Promise<PostEntity> {
    return await this.postService.update(id, isCommentDisabled);
  }

  // 게시글 삭제
  @Delete('/:id')
  @HttpCode(204)
  @ApiResponse({
    status: 204,
    description: '게시글이 성공적으로 삭제되었습니다.',
  })
  @ApiResponse({
    status: 404,
    description: '게시글을 찾을 수 없습니다.',
  })
  async delete(@Param('id') id: number): Promise<void> {
    await this.postService.delete(id);
  }

  // 모든 게시글 조회
  @Get('/')
  @ApiResponse({
    status: 200,
    description: '모든 게시글 조회',
    type: [PostEntity],
  })
  async getAllPosts(): Promise<PostEntity[]> {
    return await this.postService.getAllPosts();
  }

  // 특정 게시글 조회
  @Get('/:id')
  @ApiResponse({
    status: 200,
    description: '게시글을 찾았습니다.',
    type: PostEntity,
  })
  @ApiResponse({
    status: 404,
    description: '게시글을 찾을 수 없습니다.',
  })
  async getPostById(@Param('id') id: number): Promise<PostEntity> {
    return await this.postService.getPostById(id);
  }
}
