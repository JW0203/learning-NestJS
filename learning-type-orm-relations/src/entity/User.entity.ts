import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {Photo} from "./Photo.entity";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name:string

    @OneToMany(() => Photo, (photo) => photo.user, {
        cascade: ["insert", "update", "soft-remove"],
    })
    photos : Photo[];
}