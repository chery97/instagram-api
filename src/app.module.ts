import { Module } from '@nestjs/common';
import { BoardModule } from './board/board.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BoardTest } from './board/entities/board.entity';

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
      entities: [BoardTest],
      synchronize: false,
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
