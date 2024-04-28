import {User} from "../../../entity/User.entity";

export class ReviseUserNameResponseDto {
    oldData: User;
    changedData:User;
    constructor(oldData: User, changedData:User) {
        this.oldData = oldData;
        this.changedData = changedData;
    }
}