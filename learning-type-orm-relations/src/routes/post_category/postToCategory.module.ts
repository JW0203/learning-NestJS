import {TypeOrmModule} from "@nestjs/typeorm";
import {PostToCategory} from "../../entity/PostToCategory.entity";
import {Module} from "@nestjs/common";
import {PostToCategoryController} from "./postToCategory.controller";
import {PostToCategoryService} from "./postToCategory.service";

@Module({
    imports: [TypeOrmModule.forFeature([PostToCategory])],
    controllers: [PostToCategoryController],
    providers: [PostToCategoryService],
})
export class PostToCategoryModule {}