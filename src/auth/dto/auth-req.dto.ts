import { ApiProperty } from '@nestjs/swagger';

export class LoginReqDto {
    @ApiProperty({ example: 'admin@example.com' })
    email: string;

    @ApiProperty({ example: 'hashed_password_1' })
    password: string;
  
    constructor(
      email: string,
      password: string,
    ) {
      this.email = email;
      this.password = password;
    }
}

export class RefreshReqDto {
  @ApiProperty({ example: 'admin@example.com' })
  email: string;

  @ApiProperty({ example: '' })
  refreshToken: string;

  constructor(
    email: string,
    refreshToken: string,
  ) {
    this.email = email;
    this.refreshToken = refreshToken;
  }
}

export class SignUpReqDto {
  @ApiProperty({ example: '홍길동' })
  name: string;

  @ApiProperty({ example: 'hoiks@gmail.com' })
  email: string;

  @ApiProperty({ example: '1q2w3e4r' })
  password: string;

  @ApiProperty({ example: '000000', description: '지금은 문자 안가니까 000000 보내세유' })
  code: string;
}

export class SendEmailDto {
  @ApiProperty({ example: 'hoiks@gmail.com' })
  email: string;
}
