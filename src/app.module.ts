import { Module, forwardRef } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SmsModule } from './2fa/sms/sms.module';
import { UsersModule } from './users/users.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [SmsModule, forwardRef(() => UsersModule)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
