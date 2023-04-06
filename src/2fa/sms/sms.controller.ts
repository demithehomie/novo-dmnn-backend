import { Body, Controller, Get, Post } from "@nestjs/common";
import { SmsService } from "./sms.service";

@Controller()
export class SmsController {
    constructor(private readonly smsService: SmsService) {}

    @Post('envio')
    async sendSms(@Body() data){
        const response = await this.smsService.sendSms(data);
        console.log(response.data)
    }
}

