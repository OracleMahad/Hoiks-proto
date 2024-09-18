import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { KioskModule } from './kiosk/kiosk.module';
import { AdminModule } from './admin/admin.module';
import { FileModule } from './file/file.module';

@Module({
  imports: [KioskModule, AdminModule, FileModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
