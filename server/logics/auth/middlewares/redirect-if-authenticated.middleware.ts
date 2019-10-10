import {
  Injectable,
  NestMiddleware,
} from '@nestjs/common';

@Injectable()
export class RedirectIfAuthenticatedMiddleware implements NestMiddleware {
  use(req, res, next) {
    if (req.user) {
      return res.redirect('/admin');
    }
    next();
  }
}
