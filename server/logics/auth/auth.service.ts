import { Injectable } from '@nestjs/common';
import { EnvService } from '../env/env.service';
import { UserService } from '../user/user.service';
import { User } from '../../entities/user.entity';

@Injectable()
export class AuthService {
  constructor(
    private readonly env: EnvService,
    private readonly userService: UserService,
  ) {}

  public async validateUser(email: string, password: string): Promise<any> {
    if (email !== this.env.get('APP_ADMIN_EMAIL') || password !== this.env.get('APP_ADMIN_PASSWORD')) {
      return null;
    }

    const user: User | undefined = await this.userService.findOneByEmail(email);

    if (user) {
      const { password, ...result } = user;
      return result;
    }

    return null;
  }
}
