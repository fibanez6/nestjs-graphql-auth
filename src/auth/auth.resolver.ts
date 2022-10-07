import { UseGuards } from '@nestjs/common';
import { Args, Context, Mutation, Resolver } from '@nestjs/graphql';
import { User } from 'src/users/entities/user.entity';
import { AuthService } from './auth.service';
import { LoginResponse } from './dto/login-respopnse';
import { LoginUserInput } from './dto/login-user.input';
import { GqlAuthGuard } from './gql-auth.guard';

@Resolver()
export class AuthResolver {

    constructor(private autService: AuthService) {}

    // The local strategy (through Guards) add the user to the context
    @Mutation(() => LoginResponse)
    @UseGuards(GqlAuthGuard)
    login(@Args('loginUserInput') loginUserInput: LoginUserInput, @Context() context) {
        return this.autService.login(context.user);
    }

    @Mutation(() => User)
    signup(@Args('loginUserInput') loginUserInput: LoginUserInput) {
        return this.autService.signup(loginUserInput);
    }

}
