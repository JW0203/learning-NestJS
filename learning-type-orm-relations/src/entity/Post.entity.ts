import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {PostToCategory} from "./PostToCategory.entity";
import {Timestamps} from "./Timestamp.entity";

@Entity()
export class Post extends Timestamps{
    @PrimaryGeneratedColumn()
    id : number;

    @Column()
    title: string;

    @Column()
    content: string;

    @OneToMany(() => PostToCategory, (postToCategory) => postToCategory.post)
    postToCategories: PostToCategory[];
}