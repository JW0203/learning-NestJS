import {TypeOrmModule} from "@nestjs/typeorm";
import {Photo} from "../../entity/Photo.entity";
import {Module} from "@nestjs/common";
import {PhotoService} from "./photo.service";
import {PhotoController} from "./photo.controller";

@Module({
    imports: [TypeOrmModule.forFeature([Photo])],
    providers: [PhotoService],
    controllers: [PhotoController],

})
export class PhotoModule {}