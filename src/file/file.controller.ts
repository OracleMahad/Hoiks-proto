import { Controller, Post, UseInterceptors, UploadedFile, Res, Get, Param, NotFoundException, UseGuards } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiBearerAuth, ApiBody, ApiConsumes, ApiOperation, ApiTags, ApiUnauthorizedResponse } from '@nestjs/swagger';
import { Response } from 'express';
import { extname, join } from 'path';
import { AuthGuard } from 'src/auth/auth.guard';
import { promises as fs } from 'fs';

@ApiTags('file')
@Controller('file')
export class FileController {

  private readonly allowedExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.pdf'];
  
  // 파일 업로드 API
  @Post('uploads')
  @ApiOperation({ summary: 'Upload a file' })
  @ApiBearerAuth()
  @UseGuards(AuthGuard)
  @ApiUnauthorizedResponse({ description: 'login or refresh'})
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    description: 'File upload',
    schema: {
      type: 'object',
      properties: {
        file: {
          type: 'string',
          format: 'binary',
        },
      },
    },
  })
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
  async getStatic(@Param('filename') filename: string, @Res() res: Response) {
    // 파일 확장자 검증
    const fileExtension = extname(filename).toLowerCase();
    if (!this.allowedExtensions.includes(fileExtension)) {
      throw new NotFoundException('File type not allowed');
    }
    
    const filePath = join(__dirname, '..', '..', 'static', filename);

    try {
      // 파일 존재 여부 비동기 확인
      await fs.access(filePath);
    } catch (err) {
      const uploadPath = join(__dirname, '..', '..', 'uploads', filename);
      return res.sendFile(uploadPath);
    }

    return res.sendFile(filePath);
  }
}
