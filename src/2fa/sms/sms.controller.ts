import { Body, Controller, Get, Post } from "@nestjs/common";
import { SmsService } from "./sms.service";
import { Sms } from "./sms";

@Controller()
export class SmsController {
  private pendingCodes = {};
 

  constructor(private readonly smsService: SmsService) {}

  @Post('send-email')
  async sendVerificationCode(@Body() data: Sms): Promise<string> {
    const phoneNumber = data.numero[0];
    const verificationCode = await this.smsService.sendSms(data);
    this.pendingCodes[phoneNumber] = verificationCode;
    return 'Código de verificação enviado com sucesso.';
  }

  @Post('validar-codigo')
async validateVerificationCode(@Body() payload: { phoneNumber: string, verificationCode: string }): Promise<{ valid: boolean }> {
  const { phoneNumber, verificationCode } = payload;
  const pendingCode = this.pendingCodes[phoneNumber];
  if (pendingCode === verificationCode) {
    // Código de verificação válido, limpar pendingCodes e retornar verdadeiro
    delete this.pendingCodes[phoneNumber];
    return { valid: true };
  } else {
    // Código de verificação inválido, retornar falso
    return { valid: false };
  }
}


}
