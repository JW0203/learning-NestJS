import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {PostToCategory} from "./PostToCategory.entity";
import {Timestamps} from "./Timestamp.entity";

@Entity()
export class Category extends Timestamps{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @OneToMany(() => PostToCategory,(postToCategory) => postToCategory.category )
    postToCategories : PostToCategory[];
}