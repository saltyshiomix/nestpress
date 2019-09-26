import {
  Controller,
  Get,
  Req,
  Res,
} from '@nestjs/common';

@Controller('api/admin/me')
export class ApiAdminMeController {
  @Get()
  public me(@Req() req, @Res() res) {
    res.json(req.user);
  }
}
