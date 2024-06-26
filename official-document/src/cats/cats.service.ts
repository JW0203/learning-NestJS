import { Injectable } from '@nestjs/common';
import {Cat} from "./interfaces/cst.interface";

@Injectable()
export class CatsService {
    private readonly cats : Cat[]=[];

    create(cat:Cat){
        this.cats.push(cat);
    }

    findAll(): Cat[]{
        return this.cats
    }
}
