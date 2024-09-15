import { Module } from '@nestjs/common';
import { AdminService } from './admin.service';
import { AdminController } from './admin.controller';
import { PrismaService } from 'src/prisma.service';
import { KioskModule } from 'src/kiosk/kiosk.module';

@Module({
  controllers: [AdminController],
  providers: [AdminService, PrismaService],
  imports: [KioskModule],
  exports: [AdminService],
})
export class AdminModule {}
