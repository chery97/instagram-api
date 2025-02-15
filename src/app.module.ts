import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { PostModule } from './main/post.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import * as process from 'process';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // 모든 모듈에서 사용 가능
      envFilePath: `.env.${process.env.NODE_ENV || 'dev'}`, // 환경에 맞는 .env 파일 로드
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'mysql',
        host: configService.get<string>('DB_DEFAULT_HOST'),
        port: configService.get<number>('DB_DEFAULT_PORT'),
        username: configService.get<string>('DB_DEFAULT_USER'),
        password: configService.get<string>('DB_DEFAULT_PASSWORD'),
        database: configService.get<string>('DB_DEFAULT_DATABASE'),
        autoLoadEntities: true,
        synchronize: false,
        charset: 'utf8mb4_unicode_ci',
      }),
    }),

    PostModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
