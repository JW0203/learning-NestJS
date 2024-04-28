import {Category} from "../../../entity/Category.entity";
import {Post} from "../../../entity/Post.entity";

export class CreateRelationResponseDto {
    id: number;
    post:Post;
    categories:Category[];

    constructor(id: number, post:Post, categories:Category[]) {
        this.id = id;
        this.post = post;
        this.categories = categories;
    }
}