import {PhotoService} from "./photo.service";
import {Body, Controller, Post, Get, Patch, Delete} from "@nestjs/common";
import {CreatePhotoRequestDto} from "./dto/createPhoto.request.dto";
import {RevisePhotoUrlRequestDto} from "./dto/revisePhotoUrl.request.dto";
import {DeleteUserEntityRequestDto} from "../user/dto/deleteUserEntity.request.dto";
import {DeletePhotoRelatedUserRequestDto} from "./dto/deletePhoto.relatedUser.request.dto";

@Controller('photos')
export class PhotoController {
    constructor(private readonly photoService: PhotoService) {}

    @Post()
    createPhoto(@Body() createPhotoRequestDto: CreatePhotoRequestDto) {
        return this.photoService.create(createPhotoRequestDto)
    }

    @Get()
    findRelation(){
        return this.photoService.findRelationUser();
    }

    @Patch()
    changePhotoUrl(@Body() revisePhotoUrlRequestDto: RevisePhotoUrlRequestDto) {
        return this.photoService.revisePhotoUrl(revisePhotoUrlRequestDto);
    }

    @Delete()
    deletePhotoRelatedUser(@Body() deletePhotoRelatedUserRequestDto: DeletePhotoRelatedUserRequestDto){
        return this.photoService.deletePhotosByUser(deletePhotoRelatedUserRequestDto);
    }
}