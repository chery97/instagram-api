import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { PostModule } from './main/post.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'geek-custom-db-dev.c6nwyvdix4ge.ap-northeast-2.rds.amazonaws.com',
      port: 3306,
      username: 'geekstudio',
      password: 'Geek2020!!',
      database: 'geek-custom-db-dev',
      autoLoadEntities: true,
      synchronize: false,
      charset: 'utf8mb4_unicode_ci',
    }),
    PostModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
