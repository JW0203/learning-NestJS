import {Entity, PrimaryGeneratedColumn,Column} from "typeorm";
import {Timestamps} from "./Timestamp.entity";

@Entity()
export class Board extends Timestamps {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    title: string;
    @Column()
    content: string;
}