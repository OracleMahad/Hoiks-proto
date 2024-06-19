import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { KioskModule } from './kiosk/kiosk.module';
import { AdminModule } from './admin/admin.module';

@Module({
  imports: [KioskModule, AdminModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
