import { ApiProperty } from '@nestjs/swagger';

export class LoginResDto {
    @ApiProperty({ example: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsInVzZXJuYW1lIjoiam9obiIsImlhdCI6MTcyNzk4OTU3NSwiZXhwIjoxNzI3OTg5OTM1fQ.o3mcpl-rscvRV2D316IjdFGwF9M9rGc5yjhweLTby7k' })
    accessToken: string;

    @ApiProperty({ example: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsInVzZXJuYW1lIjoiam9obiIsImlhdCI6MTcyNzk4OTU3NSwiZXhwIjoxNzM1NzY1NTc1fQ.ELsb6OlMJWbBxNGA-C5X8eqlcTBBxi_T-oYQTJeAw9w' })
    refreshToken: string;
  
    constructor(
      accessToken: string,
      refreshToken: string,
    ) {
      this.accessToken = accessToken;
      this.refreshToken = refreshToken;
    }
}

export class RefreshResDto {
    @ApiProperty({ example: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsInVzZXJuYW1lIjoiam9obiIsImlhdCI6MTcyNzk4OTU3NSwiZXhwIjoxNzI3OTg5OTM1fQ.o3mcpl-rscvRV2D316IjdFGwF9M9rGc5yjhweLTby7k' })
    accessToken: string;
  
    constructor(
      accessToken: string,
    ) {
      this.accessToken = accessToken;
    }
}