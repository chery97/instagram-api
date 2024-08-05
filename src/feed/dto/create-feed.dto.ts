import { IsString } from 'class-validator';
import { Column } from 'typeorm';

export class CreateFeedDto {
  @Column()
  @IsString()
  memberNo: string;

  @Column()
  @IsString()
  title: string;

  @Column()
  @IsString()
  content: string;

  @Column()
  @IsString()
  thumbUrl: string;
}
