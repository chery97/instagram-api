import { Body, Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { FeedService } from './feed.service';
import { ApiResponse } from '@nestjs/swagger';
import { Feed } from './entities/feed.entity';
import { CreateFeedDto } from './dto/create-feed.dto';

@Controller('feed')
export class FeedController {
  constructor(private readonly feedService: FeedService) {}

  @Post('/list')
  async create(@Body() dto: CreateFeedDto) {
    return await this.feedService.saveFeed(dto);
  }

  @Get('/list')
  @ApiResponse({
    status: 200,
    type: [Feed],
  })
  async read() {
    console.log('111');
    return await this.feedService.getAllFeed();
  }

  @Put('/list')
  async update() {
    return await this.feedService.getAllFeed();
  }

  @Delete('/list')
  async delete() {
    return await this.feedService.getAllFeed();
  }
}
