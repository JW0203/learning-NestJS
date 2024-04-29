import {Body, Controller, Post} from "@nestjs/common";
import {TransactionService} from "./transaction.service";
import {User} from "../../entity/User.entity";


@Controller('transaction')
export class TransactionController {
    constructor(private readonly transactionService: TransactionService) {}

    @Post()
    createUser(@Body()user:User){
        return this.transactionService.createUser(user);
    }

    @Post('lib')
    createUserlib(@Body()user:User){
        return this.transactionService.createUserLib(user)
    }
}