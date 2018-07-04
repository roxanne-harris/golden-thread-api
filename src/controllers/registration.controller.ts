import { repository } from "@loopback/repository";
import { UserRepository } from "../repositories/user.repository";
import { post, requestBody, HttpErrors } from "@loopback/rest";
import { User } from "../models/user.model";

export class RegistrationController {
    constructor(
        @repository(UserRepository) protected userRepo: UserRepository,
    ) {}

    @post('/registration')
    async registerUser(
        @requestBody() user: User
    ) : Promise<User> 
    {
        if(!user.email || !user.password) {
            throw new HttpErrors.BadRequest('missing data');
        }

        let userExists: boolean = !!(await this.userRepo.count({email: user.email}));

        if (userExists) {
            throw new HttpErrors.BadRequest('user already exists');
        }

        return await this.userRepo.create(user);
    }
}