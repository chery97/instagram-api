import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BoardTest } from './entities/board.entity';

@Injectable()
export class BoardService {
  private boards = [
    {
      articleNo: 1,
      title: 'list01',
      content: 'list01 - test',
      registerNo: 123456789,
      registerName: 'joy1',
      modifierName: 'joy1',
      memberId: 'joy1',
      // status: BoardStatus.PUBLIC,
    },
  ];
  constructor(
    @InjectRepository(BoardTest)
    private boardRepository: Repository<BoardTest>,
  ) {}
  async getAllBoards() {
    return await this.boardRepository.find();
  }
  createBoard(boardEntity: BoardTest) {
    const newBoard = this.boardRepository.create(boardEntity);
    return this.boardRepository.save(newBoard);
  }
  getBoardById(id: number) {
    return this.boards.find((board) => board.articleNo === id);
  }

  updateBoardStatus(id: number) {
    const board = this.getBoardById(id);
    // board.status = status;
    return board;
  }
  deleteBoard(id: number): void {
    this.boards = this.boards.filter((board) => board.articleNo !== id);
  }
}
