import { Module } from '@nestjs/common';
import { AdminService } from './admin.service';
import { AdminController } from './admin.controller';
import { KioskModule } from 'src/kiosk/kiosk.module';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [AdminController],
  providers: [AdminService],
  imports: [KioskModule, PrismaModule],
  exports: [AdminService],
})
export class AdminModule {}
