import {Body, Controller, Get, Post} from "@nestjs/common";
import {PostService} from "./post.service";
import {CreatePostRequestDto} from "./dto/createPost.request.dto";
import {CreatePostResponseDto} from "./dto/createPost.response.dto";

@Controller('post')
export class PostController {
    constructor(private readonly postService: PostService) {}

    @Post()
    createPost(@Body() createPostRequestDto: CreatePostRequestDto): Promise<CreatePostResponseDto> {
        return this.postService.create(createPostRequestDto);
    }

    @Get()
    findRelation(){
        return this.postService.find();
    }

}