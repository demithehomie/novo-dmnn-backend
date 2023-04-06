import { Injectable } from "@nestjs/common";
import axios from 'axios';
import { Sms } from "./sms";

@Injectable()
export class SmsService {

    private pendingCodes: { [phoneNumber: string]: string } = {};

  private generateVerificationCode(): string {
    const randomNumber = Math.floor(Math.random() * 100000);
    return randomNumber.toString().padStart(5, '0');
  }

  async sendSms(data: Sms): Promise<string> {
    const verificationCode = this.generateVerificationCode();
    const mensagem = `Seu código de verificação é ${verificationCode}. Não compartilhe com ninguém.`;
    const response = await axios.post('https://app.websms.com.br/sms/shortcode/routes/sms.php', {
      mensagem,
      acao: data.acao, //'enviar',
      numero: data.numero, //'22992248416',
      hash: data.hash// 'e32256a02b211708fdcb5b588437a6e3',
    });
    if (response.data === '{ status: "Enviado" }') {
      return verificationCode;
    } else {
      throw new Error(`Failed to send SMS: ${response}`);
    }
  }

  async validateVerificationCode(phoneNumber: string, verificationCode: string): Promise<boolean> {
    const pendingCode = this.pendingCodes[phoneNumber];
    if (pendingCode === verificationCode) {
      // Código de verificação válido, limpar pendingCodes e retornar verdadeiro
      delete this.pendingCodes[phoneNumber];
      return true;
    } else {
      // Código de verificação inválido, retornar falso
      return false;
    }
  }

}

//