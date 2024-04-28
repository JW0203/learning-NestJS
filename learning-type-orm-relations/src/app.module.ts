import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import {UserModule} from "./routes/user/user.module";
import {SnakeNamingStrategy} from "typeorm-naming-strategies";
import {PhotoModule} from "./routes/photo/photo.module";
import {CategoryModule} from "./routes/category/category.module";
import {PostToCategoryModule} from "./routes/post_category/postToCategory.module";
import {PostModule} from "./routes/post/post.module";

@Module({
  imports: [
      TypeOrmModule.forRoot({
          type: 'mysql',
          host: 'localhost',
          port : 3306,
          username: 'root',
          password: '',
          database: 'typeorm_relations',
          autoLoadEntities: true,
          synchronize: true,
          logging: true,
          namingStrategy: new SnakeNamingStrategy()
      }),
      UserModule,
      PhotoModule,
      CategoryModule,
      PostModule,
      PostToCategoryModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
