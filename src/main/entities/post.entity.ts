import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

import { CommentEntity } from '../comment/entities/comment.entity';

@Entity('study_post')
export class PostEntity {
  @PrimaryGeneratedColumn()
  postId: number; // 게시글 ID (Primary Key)

  @Column()
  userNo: number; // 사용자 번호

  @Column()
  userName: string; // 사용자 이름

  @Column({ type: 'text', nullable: true })
  contents?: string; // 게시글 내용

  @Column({ nullable: true })
  userProfileImage?: string; // 사용자 프로필 이미지 URL

  @Column({ type: 'json', nullable: true })
  imageUrls: { type: string; url: string }[]; // 이미지나 비디오 URL 목록

  @Column({ default: 0 })
  likeCount: number; // 좋아요 수

  @Column({ default: false })
  isLiked: boolean; // 사용자가 좋아요를 눌렀는지 여부

  @Column({ default: 0 })
  commentCount: number; // 댓글 수

  @Column({ default: false })
  isCommentDisabled: boolean; // 댓글 기능 제한 여부 (기본값 false)

  @OneToMany(() => CommentEntity, (comment) => comment.post)
  comments: CommentEntity[]; // 댓글 리스트

  @CreateDateColumn()
  createdAt: Date; // 게시글 생성일

  @UpdateDateColumn()
  updatedAt: Date; // 게시글 수정일

  @Column('simple-array', { nullable: true })
  tags?: string[]; // 해시태그 리스트

  @Column({ nullable: true })
  location?: string; // 게시글 위치

  @Column('simple-array', { nullable: true })
  mentions?: string[]; // 멘션된 사용자 리스트

  @Column({ nullable: true })
  mediaType?: string; // 미디어 유형 (이미지, 비디오)
}
