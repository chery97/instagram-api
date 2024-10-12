import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { PostModule } from './main/post.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '13.124.183.154',
      port: 3306,
      username: 'geekstudio_dev',
      password: 'Geek@2020',
      database: 'geek_custom_dev',
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
