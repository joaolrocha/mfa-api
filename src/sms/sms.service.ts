import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Twilio } from 'twilio';

@Injectable()
export class SmsService {
  constructor(private configService: ConfigService) {}

  async sendVerificationCode(phoneNumber: string, code: string) {
    const client = new Twilio(
      this.configService.get('TWILIO_ACCOUNT_SID'),
      this.configService.get('TWILIO_AUTH_TOKEN'),
    );


    const twilioPhoneNumber = this.configService.get('TWILIO_PHONE_NUMBER');

    await client.messages.create({
      body: `Seu código de verificação é: ${code}`,
      from: twilioPhoneNumber,
      to: phoneNumber,
    })
  }
}
