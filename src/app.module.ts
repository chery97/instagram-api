import { Module } from '@nestjs/common';
import { BoardModule } from './board/board.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FeedModule } from './feed/feed.module';

@Module({
  imports: [
    BoardModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '13.124.183.154',
      port: 3306,
      username: 'geekstudio_dev',
      password: 'Geek@2020',
      database: 'geek_custom_dev',
      autoLoadEntities: true,
      synchronize: false,
    }),
    FeedModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
