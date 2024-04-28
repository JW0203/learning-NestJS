import {UserService} from "./user.service";
import {Body, Controller, Delete, Get, Param, Patch, Post} from "@nestjs/common";
import {CreateUserRequestDto} from "./dto/createUser.request.dto";
import {CreateUserResponseDto} from "./dto/createUser.response.dto";
import {ReviseUserNameRequestDto} from "./dto/reviseUserName.request.dto";
import {RevisePhotoUrlResponseDto} from "../photo/dto/revisePhotoUrl.response.dto";
import {DeleteUserEntityRequestDto} from "./dto/deleteUserEntity.request.dto";

@Controller('users')
export class UserController {
    constructor(private readonly userService: UserService) {
    }

    @Post()
    createUser(@Body() createUserRequestDto: CreateUserRequestDto): Promise<CreateUserResponseDto> {
        return this.userService.createUser(createUserRequestDto);
    }

    @Get()
    findRelation() {
        return this.userService.findRelationPhoto()
    }

    @Patch()
    changeUserName(@Body() reviseUserNameRequestDto: ReviseUserNameRequestDto): Promise<RevisePhotoUrlResponseDto> {
        return this.userService.reviseUserData(reviseUserNameRequestDto);
    }

    @Delete()
    deleteUser(@Body() deleteUserEntityRequestDto: DeleteUserEntityRequestDto) {
        return this.userService.deleteUserEntity(deleteUserEntityRequestDto);
    }

    @Delete()
    removeUser(@Param('id') id: string) {
        return this.userService.deleteUserId(parseInt(id));
    }
}
