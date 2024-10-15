import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { PostDto } from './dto/post.dto';
import { PostEntity } from './entities/post.entity';

@Injectable()
export class PostService {
  constructor(
    @InjectRepository(PostEntity)
    private postRepository: Repository<PostEntity>,
  ) {}

  async create(createDto: PostDto): Promise<PostEntity> {
    try {
      const postEntity = this.postRepository.create(createDto);

      return await this.postRepository.save(postEntity);
    } catch (error) {
      throw new InternalServerErrorException('게시글 생성에 실패했습니다.');
    }
  }

  async update(id: number, isCommentDisabled: boolean): Promise<PostEntity> {
    try {
      const post = await this.postRepository.findOne({ where: { postId: id } });
      if (!post) {
        throw new NotFoundException('게시글을 찾을 수 없습니다.');
      }

      post.isCommentDisabled = isCommentDisabled;
      return await this.postRepository.save(post);
    } catch (error) {
      throw new InternalServerErrorException('게시글 수정에 실패했습니다.');
    }
  }

  async delete(id: number): Promise<void> {
    try {
      const result = await this.postRepository.delete(id);
      if (result.affected === 0) {
        throw new NotFoundException('게시글을 찾을 수 없습니다.');
      }
    } catch (error) {
      throw new InternalServerErrorException('게시글 삭제에 실패했습니다.');
    }
  }

  async getAllPosts(): Promise<PostEntity[]> {
    const posts = await this.postRepository.find({
      relations: ['comments'],
    });

    return posts;
  }

  async getPostById(id: number): Promise<PostEntity> {
    const post = await this.postRepository.findOne({
      where: { postId: id },
      relations: ['comments'],
    });

    if (!post) {
      throw new NotFoundException('게시글을 찾을 수 없습니다.');
    }

    return post;
  }
}
