import { Injectable } from '@nestjs/common';
import { EnvService } from '../env/env.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly env: EnvService,
  ) {}

  public async validateUser(email: string, password: string): Promise<any> {
    if (email !== this.env.get('APP_ADMIN_EMAIL') || password !== this.env.get('APP_ADMIN_PASSWORD')) {
      return null;
    }
    return { email };
  }
}
