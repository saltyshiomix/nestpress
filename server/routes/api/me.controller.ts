import {
  Controller,
  Get,
  Req,
  Res,
} from '@nestjs/common';

@Controller('api/me')
export class ApiMeController {
  @Get()
  public me(@Req() req, @Res() res) {
    res.json(req.user);
  }
}
