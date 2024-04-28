import {Injectable} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {Photo} from "../../entity/Photo.entity";
import {CreatePhotoRequestDto} from "./dto/createPhoto.request.dto";
import {CreatePhotoResponseDto} from "./dto/createPhoto.response.dto";
import {RevisePhotoUrlRequestDto} from "./dto/revisePhotoUrl.request.dto";
import {RevisePhotoUrlResponseDto} from "./dto/revisePhotoUrl.response.dto";
import {DeleteUserEntityRequestDto} from "../user/dto/deleteUserEntity.request.dto";
import {DeletePhotoRelatedUserRequestDto} from "./dto/deletePhoto.relatedUser.request.dto";

@Injectable()
export class PhotoService {
    constructor(
        @InjectRepository(Photo)
        private readonly photoRepository: Repository<Photo>,
    ){}

    async create(createPhotoRequestDto: CreatePhotoRequestDto): Promise<CreatePhotoResponseDto> {
        const {url, user} = createPhotoRequestDto;
        const photo1 = new Photo()
        photo1.url = url;
        photo1.user = user;
        return await this.photoRepository.save(photo1);
    }

    async findRelationUser():Promise<Photo[]>{
        return await this.photoRepository.find({
            relations: {
                user : true,
            }
        });
    }

    async revisePhotoUrl(revisePhotoUrlRequestDto:RevisePhotoUrlRequestDto):Promise<RevisePhotoUrlResponseDto>{
        const {currentUrl, newUrl} = revisePhotoUrlRequestDto
        const changeLog = [];
        const photo = await this.photoRepository.findOne({where:{url:currentUrl}});
        changeLog.push({...photo});
        photo.url = newUrl;
        await this.photoRepository.save(photo);
        const changePhoto:Photo =  await this.photoRepository.findOne({where:{url:newUrl}});
        changeLog.push(changePhoto);
        return new RevisePhotoUrlResponseDto(
            changeLog[0],changeLog[1]
        )
    }

    async deletePhotosByUser(deletePhotoRelatedUserRequestDto:DeletePhotoRelatedUserRequestDto){
        // const {name, id} = deletePhotoRelatedUserRequestDto;
        const photoData = await this.photoRepository.find({
            where:{
                user : deletePhotoRelatedUserRequestDto
            },
                relations : {
                    user : true,
                }
            });
        return await this.photoRepository.remove(photoData);
    }
}