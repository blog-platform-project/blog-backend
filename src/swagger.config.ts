import { DocumentBuilder } from '@nestjs/swagger';

export const configSwagger = new DocumentBuilder()
  .setTitle('Blog Platform App')
  .setDescription('The Blog app API description')
  .setVersion('1.0')
  .addTag('auth')
  .addTag('comments')
  .addTag('connections')
  .addTag('feed')
  .addTag('likes')
  .addTag('posts')
  .addTag('replies')
  .addTag('search')
  .addTag('users')
  .build();
