import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";
import {Timestamps} from "./Timestamps.entity";


@Entity()
export class Board extends Timestamps{
    @PrimaryGeneratedColumn()
    id :number;

    @Column()
    title: string;

    @Column()
    content: string;

}