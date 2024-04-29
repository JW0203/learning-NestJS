import {Injectable} from "@nestjs/common";
import {DataSource} from "typeorm";
import {User} from "../../entity/User.entity";
import {Transactional} from "typeorm-transactional";

@Injectable()
export class TransactionService {
    constructor(private dataSource: DataSource) {}

    async createUser(user: User){
        await this.dataSource.transaction(async (manager) =>{
            const {name} = user
            const newUser = new User();
            newUser.name = name;
            await manager.save(newUser);
            throw new Error("transaction test!!");
        });
    }

    async createUserLib(user: User){
        await this.dataSource.transaction(async (manager) =>{
            const {name} = user;
            const newUser = new User();
            newUser.name = name;
            await manager.save(newUser);
            throw new Error("transaction test!!");
        })
    }
}