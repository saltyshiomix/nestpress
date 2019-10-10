import {
  Injectable,
  NestMiddleware,
} from '@nestjs/common';

@Injectable()
export class RedirectIfNotAuthenticatedMiddleware implements NestMiddleware {
  use(req, res, next) {
    if (!req.user) {
      return res.redirect('/admin/login');
    }
    next();
  }
}
