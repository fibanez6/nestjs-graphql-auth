import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor() {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: 'hide-me',  // Put it out as env i.e. process.env.JWT_SECRET
        });
    }

    // the return object is added to the context
    async validate(payload: any) { // payload = decoded JWT
        return {
            userId: payload.sub,
            username: payload.username
        };
    }
}