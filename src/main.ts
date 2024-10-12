import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { PostModule } from './main/post.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();

  const postApi = new DocumentBuilder()
    .setTitle('게시글 API')
    .setDescription('게시글 API 입니다.')
    .setVersion('1.0')
    .build();

  const postDocument = SwaggerModule.createDocument(app, postApi, {
    include: [PostModule],
  });
  SwaggerModule.setup('docs/instagram', app, postDocument);
  await app.listen(8080);
}
bootstrap();
