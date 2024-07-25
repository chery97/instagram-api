import { IsNumber, IsOptional, IsString } from 'class-validator';
import { Column, PrimaryColumn } from 'typeorm';

export class CreateBoardDto {
  @Column()
  registerNo: number;

  @Column()
  @IsString()
  @IsOptional()
  registerName: string;

  @Column()
  @IsString()
  @IsOptional()
  modifierName: string;

  @Column()
  @IsString()
  @IsOptional()
  memberId: string;

  @Column()
  @IsNumber()
  @PrimaryColumn()
  articleNo: number;

  @Column()
  @IsString()
  title: string;

  @Column()
  @IsString()
  content: string;
}
