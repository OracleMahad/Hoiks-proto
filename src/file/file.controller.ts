import { Controller, Post, UseInterceptors, UploadedFile, Res, Get, Param, NotFoundException } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiTags } from '@nestjs/swagger';
import { Response } from 'express';
import { extname, join } from 'path';

@ApiTags('file')
@Controller('file')
export class FileController {

  private readonly allowedExtensions = ['.jpg', '.jpeg', '.png', '.gif'];
  
  // 파일 업로드 API
  @Post('uploads')
  @UseInterceptors(FileInterceptor('file'))
  uploadFile(@UploadedFile() file) {
    return {
      message: 'File uploaded successfully',
      url: `/file/uploads/${file.filename}`, // 업로드된 파일 경로
    };
  }

  // 파일 제공 API
  @Get('uploads/:filename')
  getFile(@Param('filename') filename: string, @Res() res: Response) {
    // 파일 확장자 검증
    const fileExtension = extname(filename).toLowerCase();
    if (!this.allowedExtensions.includes(fileExtension)) {
      throw new NotFoundException('File type not allowed');
    }
    
    const filePath = join(__dirname, '..', '..', 'uploads', filename);
    return res.sendFile(filePath);
  }

  // 파일 제공 API
  @Get('static/:filename')
  getStatic(@Param('filename') filename: string, @Res() res: Response) {
    // 파일 확장자 검증
    const fileExtension = extname(filename).toLowerCase();
    if (!this.allowedExtensions.includes(fileExtension)) {
      throw new NotFoundException('File type not allowed');
    }
    
    const filePath = join(__dirname, '..', '..', 'static', filename);
    return res.sendFile(filePath);
  }
}
