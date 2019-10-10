import {
  Injectable,
  NestMiddleware,
  UnauthorizedException,
} from '@nestjs/common';

@Injectable()
export class ApiAuthMiddleware implements NestMiddleware {
  use(req, res, next) {
    if (!req.user) {
      throw new UnauthorizedException();
    }
    next();
  }
}
