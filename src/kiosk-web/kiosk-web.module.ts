import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { KioskWebController } from './kiosk-web.controller';

@Module({
  imports: [
    // 정적 파일 제공을 위한 ServeStaticModule
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', '..', 'kiosk-pages'), // 파일이 저장될 uploads 폴더
      // exclude: [],
      serveRoot: '/kiosk-pages'
    }),
  ],
  controllers: [KioskWebController],
})
export class KioskWebModule {}