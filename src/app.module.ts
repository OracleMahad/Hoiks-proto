import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { KioskModule } from './kiosk/kiosk.module';
import { AdminModule } from './admin/admin.module';
import { FileModule } from './file/file.module';
import { AuthController } from './auth/auth.controller';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { ThrottlerModule } from '@nestjs/throttler';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [KioskModule, AdminModule, FileModule, AuthModule, UsersModule,
    ThrottlerModule.forRoot([{
      name: 'long',
      ttl: 60000,
      limit: 100,
    }]),
    ConfigModule.forRoot(),
  ],
  controllers: [AppController, AuthController],
  providers: [AppService],
})
export class AppModule {}
