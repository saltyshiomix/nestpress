import {
  Controller,
  Get,
} from '@nestjs/common';

@Controller('api/admin/me')
export class ApiAdminMeController {
  @Get()
  public me(req, res) {
    return {
      user: req.user,
    };
  }
}
