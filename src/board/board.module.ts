import { Module } from '@nestjs/common';
import { BoardService } from './board.service';
import { BoardController } from './board.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BoardTest } from './entities/board.entity';

@Module({
  imports: [TypeOrmModule.forFeature([BoardTest])],
  controllers: [BoardController],
  providers: [BoardService],
})
export class BoardModule {}
