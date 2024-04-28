import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {User} from "./User.entity";

@Entity()
export class Photo{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    url: string;

    @ManyToOne(() => User, (user) => user.photos, {
        cascade: ["insert", "update", "soft-remove"],
    })
    user : User;


}