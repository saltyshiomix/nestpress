import {
  Controller,
  Post,
  Req,
  Res,
  UseGuards,
} from '@nestjs/common';
import { LoginGuard } from '../../logics/auth/guards';

@Controller('api/auth')
export class ApiAuthController {
  @Post('login')
  @UseGuards(LoginGuard)
  public login(@Req() req, @Res() res) {
    res.json(req.user);
  }

  @Post('logout')
  public logout(@Req() req, @Res() res) {
    req.session.destroy(() => {
      res.json(true);
    });
  }
}
