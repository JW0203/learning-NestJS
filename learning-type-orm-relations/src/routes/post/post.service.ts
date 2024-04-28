import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {Post} from "../../entity/Post.entity";
import {CreatePostRequestDto} from "./dto/createPost.request.dto";
import {Injectable} from "@nestjs/common";
import {CreatePostResponseDto} from "./dto/createPost.response.dto";

@Injectable()
export class PostService {
    constructor(
        @InjectRepository(Post)
        private postRepository: Repository<Post>,
    ){}

    async create(createPostRequestDto: CreatePostRequestDto): Promise<CreatePostResponseDto> {
        return await this.postRepository.save(createPostRequestDto)
    }

    async find(): Promise<Post[]>{
        const foundPosts = await this.postRepository.find({
            relations: {
                postToCategories:{
                    category: true,
                },
            }
        })
        const posts = foundPosts.map((post) => {
            const categories = post.postToCategories.map(
                (postToCategory) => postToCategory.category,
            );
            delete post.postToCategories;
            return {
                ...post,
                categories,
            };
        });
        return posts
        // return await this.postRepository.find({
        //     relations: {
        //         postToCategories :{
        //             category: true
        //         }
        //     }
        // });
    }

}