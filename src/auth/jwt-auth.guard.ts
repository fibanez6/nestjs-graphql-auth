import { ExecutionContext, Injectable } from "@nestjs/common";
import { GqlExecutionContext } from "@nestjs/graphql";
import { AuthGuard } from "@nestjs/passport";

// AuthGuard is done for REST apps and works with only annotations:
// @UseGuards(AuthGuard('jwt')) in the controller
// However for Graphql apps we need to do an extra step around getting 
// the request objet from the context
@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
 
    getRequest(context: ExecutionContext) {
        const ctx = GqlExecutionContext.create(context);
        return ctx.getContext().req;
    }
}