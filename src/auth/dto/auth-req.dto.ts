import { ApiProperty } from '@nestjs/swagger';

export class LoginReqDto {
    @ApiProperty({ example: 'hoiks@gmail.com' })
    email: string;

    @ApiProperty({ example: '1q2w3e4r' })
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
  @ApiProperty({ example: 'hoiks@gmail.com' })
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
