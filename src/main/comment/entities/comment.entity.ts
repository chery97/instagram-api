import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

import { PostEntity } from '../../entities/post.entity';

@Entity('study_comment')
export class CommentEntity {
  @PrimaryGeneratedColumn()
  id: number; // 댓글 ID (Primary Key)

  @Column()
  postId: number; // 댓글이 달릴 게시글 ID

  @ManyToOne(() => PostEntity, (post) => post.comments, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'postId' })
  post: PostEntity; // 댓글이 속한 게시글

  @Column()
  userNo: number; // 댓글 작성자의 사용자 번호

  @Column({ type: 'text' })
  content: string; // 댓글 내용

  @CreateDateColumn()
  createdAt: Date; // 댓글 생성일

  @UpdateDateColumn()
  updatedAt: Date; // 댓글 수정일
}
