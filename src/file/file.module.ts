import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { FileController } from './file.controller';
import { MulterModule } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
// import { v4 as uuidv4 } from 'uuid';
import { extname } from 'path';

@Module({
  imports: [
    // 정적 파일 제공을 위한 ServeStaticModule
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'uploads'), // 파일이 저장될 uploads 폴더
    }),
    // 파일 업로드를 위한 MulterModule
    MulterModule.register({
      storage: diskStorage({
        destination: './uploads', // 파일이 저장될 경로
        filename: (req, file, callback) => {
        //   const uniqueSuffix = uuidv4() + extname(file.originalname);
        //   callback(null, uniqueSuffix);
          callback(null, '');
        },
      }),
    }),
  ],
  controllers: [FileController],
})
export class FileModule {}
