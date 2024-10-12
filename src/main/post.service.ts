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
      const post = this.postRepository.create(createDto);
      return await this.postRepository.save(post);
    } catch (error) {
      console.error('Error creating post:', error);
      throw new InternalServerErrorException('Error creating post');
    }
  }

  async update(id: number, isCommentDisabled: boolean): Promise<PostEntity> {
    try {
      const post = await this.postRepository.findOne({ where: { postId: id } });
      if (!post) {
        throw new NotFoundException('게시글을 찾을 수 없습니다.');
      }

      post.isCommentDisabled = isCommentDisabled; // Assuming this property exists in PostEntity
      return await this.postRepository.save(post);
    } catch (error) {
      console.error('Error updating post status:', error);
      throw new InternalServerErrorException('Error updating post status');
    }
  }

  async delete(id: number): Promise<void> {
    try {
      const result = await this.postRepository.delete(id);
      if (result.affected === 0) {
        throw new NotFoundException('게시글을 찾을 수 없습니다.');
      }
    } catch (error) {
      console.error('Error deleting post:', error);
      throw new InternalServerErrorException('Error deleting post');
    }
  }

  async getAllPosts(): Promise<PostEntity[]> {
    try {
      return await this.postRepository.find();
    } catch (error) {
      console.error('Error fetching posts:', error);
      throw new InternalServerErrorException('Error fetching posts');
    }
  }

  async getPostById(id: number): Promise<PostEntity> {
    try {
      const post = await this.postRepository.findOne({ where: { userNo: id } });
      if (!post) {
        throw new NotFoundException('게시글을 찾을 수 없습니다.');
      }
      return post;
    } catch (error) {
      console.error('Error fetching post by ID:', error);
      throw new InternalServerErrorException('Error fetching post by ID');
    }
  }
}
