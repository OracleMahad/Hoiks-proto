import {
    Body,
    Controller,
    Get,
    HttpCode,
    HttpStatus,
    Post,
    Request,
    UseGuards
  } from '@nestjs/common';
import { AuthGuard } from './auth.guard';
import { AuthService } from './auth.service';
import { ApiBearerAuth, ApiNotFoundResponse, ApiOkResponse, ApiOperation, ApiTags, ApiUnauthorizedResponse } from '@nestjs/swagger';
import { LoginReqDto, RefreshReqDto } from './dto/auth-req.dto';
import { LoginResDto, RefreshResDto } from './dto/auth-res.dto';
  
@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  @ApiOkResponse({type: LoginResDto})
  @ApiNotFoundResponse({ description: 'Not found'})
  login(@Body() loginDto: LoginReqDto) {
    return this.authService.signIn(loginDto.email, loginDto.password);
  }

  @Post('refresh')
  @ApiOkResponse({type: RefreshResDto})
  refresh(@Body() refreshDto: RefreshReqDto) {
    return this.authService.refresh(refreshDto.email, refreshDto.refreshToken);
  }

  @ApiBearerAuth()
  @UseGuards(AuthGuard)
  @ApiOperation({summary : "Api for test"})
  @ApiUnauthorizedResponse({ description: 'login or refresh'})
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }

  @Post('sign-up')
  @ApiOkResponse({type: LoginResDto})
  @ApiNotFoundResponse({ description: 'Not found'})
  signUp(@Body() loginDto: LoginReqDto) {
    return this.authService.signIn(loginDto.email, loginDto.password);
  }

  //email unique check && email number check
  // block black user : 다중 시도
}
