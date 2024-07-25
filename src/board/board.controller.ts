import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Post,
} from '@nestjs/common';
import { ApiResponse } from '@nestjs/swagger';
import { BoardService } from './board.service';
import { CreateBoardDto } from './dto/create-board.dto';
import { BoardTest } from './entities/board.entity';

@Controller('api/board')
export class BoardController {
  constructor(private readonly boardService: BoardService) {}

  @Get('/list')
  @ApiResponse({
    status: 200,
    type: [BoardTest],
  })
  async getAllBoards() {
    return await this.boardService.getAllBoards();
  }

  @Post('/articles')
  create(@Body() createBoardDto: CreateBoardDto) {
    return this.boardService.createBoard(createBoardDto);
  }

  @Get('/articles/id')
  getBoardById(@Param('id') id: number) {
    return this.boardService.getBoardById(id);
  }

  // @Patch('/articles/id/status')
  // updateBoardStatus(
  //   @Param('id') id: number,

  // ) {
  //   return this.boardService.updateBoardStatus(id);
  // }

  @Delete('/articles/id')
  @HttpCode(204)
  deleteBoard(@Param('id') id: number): void {
    this.boardService.deleteBoard(id);
  }
}
