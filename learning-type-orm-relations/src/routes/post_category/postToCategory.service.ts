import {InjectRepository} from "@nestjs/typeorm";
import {PostToCategory} from "../../entity/PostToCategory.entity";
import {Repository} from "typeorm";
import {Injectable} from "@nestjs/common";
import {CreateRelationRequestDto} from "./dto/createRelation.request.dto";
import {CreateRelationResponseDto} from "./dto/createRelation.response.dto";

@Injectable()
export class PostToCategoryService {
    constructor(
        @InjectRepository(PostToCategory)
        public readonly postCateogryRepository: Repository<PostToCategory>,
    ){}

    async createRelation(createRelationRequestDto:CreateRelationRequestDto): Promise<any> {
        const {post, categories} = createRelationRequestDto;
        let allRelations = []
        for ( const category of categories){
           let relation =  await this.postCateogryRepository.save({category, post})
            allRelations.push(relation)
        }
        return allRelations
    }
}