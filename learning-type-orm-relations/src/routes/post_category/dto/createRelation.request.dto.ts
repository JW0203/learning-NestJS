import {Category} from "../../../entity/Category.entity";
import {Post} from "../../../entity/Post.entity";

export class CreateRelationRequestDto {
    post:Post;
    categories:Category[];
}