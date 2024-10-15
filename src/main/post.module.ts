import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { CommentController } from './comment/comment.controller';
import { CommentService } from './comment/comment.service';
import { CommentEntity } from './comment/entities/comment.entity';
import { PostEntity } from './entities/post.entity';
import { PostController } from './post.controller';
import { PostService } from './post.service';

@Module({
  imports: [TypeOrmModule.forFeature([PostEntity, CommentEntity])],
  controllers: [PostController, CommentController],
  providers: [PostService, CommentService],
})
export class PostModule {}
