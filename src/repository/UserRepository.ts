import {User} from "../model/User";

export class UserRepository {

    private users: User[] = [];

    public getAllUsers(): User[] {
        return this.users;
    }

    public addUser(user: User): void {
        this.users.push(user);
    }
}

export const userRepository = new UserRepository();




