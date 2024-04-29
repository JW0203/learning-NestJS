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
import {TransactionModule} from "./routes/transaction/transaction.module";
import { addTransactionalDataSource } from 'typeorm-transactional';
import {DataSource} from "typeorm";

@Module({
  imports: [
      TypeOrmModule.forRootAsync({
          useFactory() {
              return {
                  type: 'mysql',
                  host: 'localhost',
                  port: 3306,
                  username: 'root',
                  password: '',
                  database: 'typeorm_relations',
                  autoLoadEntities: true,
                  synchronize: true,
                  logging: true,
                  namingStrategy: new SnakeNamingStrategy()
              }
          },
          async dataSourceFactory(options) {
              if (!options) {
                  throw new Error('Invalid options passed');
              }
              return addTransactionalDataSource(new DataSource(options));
          }
      }),
      UserModule,
      PhotoModule,
      CategoryModule,
      PostModule,
      PostToCategoryModule,
      TransactionModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
