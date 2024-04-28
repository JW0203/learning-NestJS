import {Photo} from "../../../entity/Photo.entity";

export class RevisePhotoUrlResponseDto {
    oldPhotoData : Photo;
    newPhotoData: Photo;
    constructor(oldphotoData : Photo, newPhotoData : Photo) {
        this.oldPhotoData = oldphotoData;
        this.newPhotoData  = newPhotoData ;
    }
}