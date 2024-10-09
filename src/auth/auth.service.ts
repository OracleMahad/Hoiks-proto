import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService
  ) {}

  async signIn(
    email: string,
    password: string,
  ){
    const user = await this.usersService.findOneByEmail(email);
    if (user?.password !== password) {
      throw new UnauthorizedException();
    }
    const payload = { sub: user.userId, username: user.username };
    return {
      accessToken: await this.jwtService.signAsync(payload),
      refreshToken: await this.jwtService.signAsync(payload, {expiresIn: 7776000}),//90days
    };
  }

  async refresh(
    email: string,
    refreshToken: string,
  ){
    //refreshToken 유효성 검사 및 유저 검색(이메일도 같이 사용)
    const user = await this.usersService.findOneByEmail(email);

    const payload = { sub: user.userId, username: user.username };

    return {
      accessToken: await this.jwtService.signAsync(payload),
    };
  }
}