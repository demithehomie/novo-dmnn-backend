import { Injectable } from "@nestjs/common";
import axios from 'axios';
import { Sms } from "./sms";

@Injectable()
export class SmsService {
    async sendSms(data: Sms){
        try {
            return await axios.post('https://app.websms.com.br/sms/shortcode/routes/sms.php', data);
        } catch (error) {
            throw new Error(`Failed to send SMS: ${error.message}`);
        }
    }
    
}