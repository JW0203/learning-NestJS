import {Body, Controller, Post} from "@nestjs/common";
import {PostToCategoryService} from "./postToCategory.service";
import {CreateRelationRequestDto} from "./dto/createRelation.request.dto";
import {CreateRelationResponseDto} from "./dto/createRelation.response.dto";


@Controller("post-category")
export class PostToCategoryController {
    constructor(private readonly postToCategoryService: PostToCategoryService){
    }

    @Post()
    createRelation(@Body()makeCategoryRequestDto:CreateRelationRequestDto):Promise<any>{
        return this.postToCategoryService.createRelation(makeCategoryRequestDto)
    }
}