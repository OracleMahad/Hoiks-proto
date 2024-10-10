import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { SignUpReqDto } from './dto/auth-req.dto';

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
    const payload = { sub: user.id, name: user.name };
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
    const user = await this.usersService.findOneByEmailOrThrow(email);

    const payload = { sub: user.id, name: user.name };

    return {
      accessToken: await this.jwtService.signAsync(payload),
    };
  }

  async signUp(
    signUpDto: SignUpReqDto
  ){
    const exUser = await this.usersService.findOneByEmail(signUpDto.email);
    if (exUser) throw new BadRequestException("Already exist");

    const user = await this.usersService.createUser(signUpDto.name, signUpDto.email, signUpDto.password);
    
    const payload = { sub: user.id, name: user.name };
    return {
      accessToken: await this.jwtService.signAsync(payload),
      refreshToken: await this.jwtService.signAsync(payload, {expiresIn: 7776000}),//90days
    };
  }

  async sendEmail(
    email: string,
  ){
    const user = await this.usersService.findOneByEmail(email);
    if (user) throw new BadRequestException("Already exist");

    return {
      result: true,
      message: '이메일 전송되었다 치고'
    };
  }
}