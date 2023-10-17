import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthService } from './auth/auth.service';
import { AuthController } from './auth/auth.controller';
import { ConfigModule } from '@nestjs/config';
import { SmsService } from './sms/sms.service';
import { JwtService } from '@nestjs/jwt';

@Module({
  imports: [
    ConfigModule.forRoot(),
  ],
  controllers: [AppController, AuthController],
  providers: [AppService, AuthService, SmsService, JwtService],
})
export class AppModule {}
