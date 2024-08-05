import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Feed } from './entities/feed.entity';
import { CreateFeedDto } from './dto/create-feed.dto';

@Injectable()
export class FeedService {
  constructor(
    @InjectRepository(Feed)
    private feedRepository: Repository<Feed>,
  ) {}

  async saveFeed(dto: CreateFeedDto): Promise<Feed> {
    const newEntity = this.feedRepository.create({
      memberNo: '1',
      title: '제목',
      content: '컨텐츠',
      thumbUrl: 'aaa',
    });
    return await this.feedRepository.save(newEntity);
  }

  async getAllFeed(): Promise<Feed[]> {
    return await this.feedRepository.find();
  }
}
