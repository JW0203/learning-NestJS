import {InjectRepository} from "@nestjs/typeorm";
import {User} from "../../entity/User.entity";
import {Injectable} from "@nestjs/common";
import {Repository} from "typeorm";
import {CreateUserRequestDto} from "./dto/createUser.request.dto";
import {CreateUserResponseDto} from "./dto/createUser.response.dto";
import {ReviseUserNameRequestDto} from "./dto/reviseUserName.request.dto";
import {RevisePhotoUrlResponseDto} from "../photo/dto/revisePhotoUrl.response.dto";
import {ReviseUserNameResponseDto} from "./dto/reviseUserName.response.dto";
import {DeleteUserEntityRequestDto} from "./dto/deleteUserEntity.request.dto";

@Injectable()
export class UserService{
    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>
    ){}

    async createUser(createUserRequest : CreateUserRequestDto): Promise<CreateUserResponseDto>{
        const newUser = await this.userRepository.save(createUserRequest);
        return new CreateUserResponseDto(
            newUser.id,
            newUser.name
        )
    }

    async findRelationPhoto(){
        return await this.userRepository.find({
            relations: {
                photos: true,
            }
        })
    }

    async reviseUserData(userNameReviseRequestDto:ReviseUserNameRequestDto):Promise<RevisePhotoUrlResponseDto>{
        const {name, newName} = userNameReviseRequestDto
        const result = []
        const user = await this.userRepository.findOne({where:{name}});
        result.push({...user})
        user.name = newName
        await this.userRepository.save(user);
        const changedUser = await this.userRepository.findOne({where:{name:newName}});
        result.push({...changedUser})
        return new RevisePhotoUrlResponseDto(
            result[0], result[1]
        )
    }

    async deleteUserEntity(deleteUserEntityRequestDto:DeleteUserEntityRequestDto){
        const {id} = deleteUserEntityRequestDto;
        const user = await this.userRepository.findOne({where:{id}});
        await this.userRepository.remove(user) // entity
    }

    async deleteUserId(id:number){
        const user = await this.userRepository.findOne({where:{id}});
        await this.userRepository.remove(user) // entity
    }
}

