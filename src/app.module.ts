import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { PostsModule } from './posts/posts.module';
import { CommentsModule } from './comments/comments.module';
import { RepliesModule } from './replies/replies.module';
import { ConnectionsModule } from './connections/connections.module';
import { LikesModule } from './likes/likes.module';
import { FeedModule } from './feed/feed.module';
import { SearchModule } from './search/search.module';

@Module({
  imports: [
    AuthModule,
    UsersModule,
    PostsModule,
    CommentsModule,
    RepliesModule,
    ConnectionsModule,
    LikesModule,
    FeedModule,
    SearchModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
