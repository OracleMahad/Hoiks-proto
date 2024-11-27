import { Controller, Post, UseInterceptors, UploadedFile, Res, Get, Param, NotFoundException, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiBody, ApiConsumes, ApiExcludeController, ApiOperation, ApiTags, ApiUnauthorizedResponse } from '@nestjs/swagger';
import { Response } from 'express';
import { extname, join } from 'path';
import { promises as fs } from 'fs';

@ApiExcludeController()
@Controller('kiosk-pages')
export class KioskWebController {

  // @Get('*') // 모든 경로를 처리
  // handleWildcard(@Res() res: Response) {
  //   const indexPath = join(__dirname, '..', '..', 'kiosk-pages', 'index.html'); // index.html 경로
  //   res.sendFile(indexPath);
  // }

  @Get('/') // 모든 경로를 처리
  handle(@Res() res: Response) {
    const indexPath = join(__dirname, '..', '..', 'kiosk-pages', 'index.html'); // index.html 경로
    res.sendFile(indexPath);
  }
}
