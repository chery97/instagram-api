import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CommentDto, UpdateCommentDto } from './dto/comment.dto';
import { CommentEntity } from './entities/comment.entity';

@Injectable()
export class CommentService {
  constructor(
    @InjectRepository(CommentEntity)
    private readonly commentRepository: Repository<CommentEntity>,
  ) {}

  private mapCommentToResponse(comment: CommentEntity): any {
    return {
      id: comment.id, // 댓글 ID
      postId: comment.postId, // 댓글이 달린 게시글 ID
      userNo: comment.userNo, // 사용자 번호
      content: comment.content, // 댓글 내용
      createdAt: comment.createdAt, // 생성일
      updatedAt: comment.updatedAt, // 수정일
    };
  }

  async getCommentsByPostId(postId: number): Promise<CommentEntity[]> {
    const comments = await this.commentRepository.find({ where: { postId } });

    return comments.map((comment) => this.mapCommentToResponse(comment));
  }

  // 댓글 생성
  async create(commentDto: CommentDto): Promise<CommentEntity[]> {
    try {
      const comment = this.commentRepository.create(commentDto); // 댓글 엔티티 생성
      await this.commentRepository.save(comment); // 댓글 저장

      return [this.mapCommentToResponse(comment)];
    } catch (error) {
      console.error('Error creating comment:', error);
      throw new InternalServerErrorException('Error creating comment');
    }
  }

  // 댓글 수정
  async update(
    commentId: number,
    updateCommentDto: UpdateCommentDto,
  ): Promise<CommentEntity> {
    const comment = await this.commentRepository.findOne({
      where: { id: commentId },
    });
    if (!comment) {
      throw new NotFoundException('댓글을 찾을 수 없습니다.');
    }

    this.commentRepository.merge(comment, updateCommentDto);
    return await this.commentRepository.save(comment);
  }

  // 댓글 삭제
  async delete(commentId: number): Promise<void> {
    const result = await this.commentRepository.delete(commentId);
    if (result.affected === 0) {
      throw new NotFoundException('댓글을 찾을 수 없습니다.');
    }
  }
}
