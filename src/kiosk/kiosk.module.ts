import { Module } from '@nestjs/common';
import { KioskService } from './kiosk.service';
import { KioskController } from './kiosk.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [KioskController],
  providers: [KioskService],
  imports: [PrismaModule],
  exports: [KioskService],
})
export class KioskModule {}
