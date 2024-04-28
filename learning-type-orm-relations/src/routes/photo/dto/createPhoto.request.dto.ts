import {User} from "../../../entity/User.entity";

export class CreatePhotoRequestDto {
    url:string;
    user: User;
}