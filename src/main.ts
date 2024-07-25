import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { BoardModule } from './board/board.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();

  const boardApi = new DocumentBuilder()
    .setTitle('Board API')
    .setDescription('Board API 입니다.')
    .setVersion('1.0')
    .build();

  const boardDocument = SwaggerModule.createDocument(app, boardApi, {
    include: [BoardModule],
  });
  SwaggerModule.setup('docs/instagram', app, boardDocument);
  await app.listen(8080);
}
bootstrap();
