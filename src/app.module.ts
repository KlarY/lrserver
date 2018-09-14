import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { WxController } from './controllers/wx.controller';
import { UserModule } from './user/modules/user.module';
import { ReminderModule } from './reminder/modules/reminder.module';
import { AppService } from './app.service';
import { HttpModule } from '@nestjs/common';

@Module({
  imports: [HttpModule, UserModule, ReminderModule],
  controllers: [AppController, WxController],
  providers: [AppService],
})
export class AppModule {}
