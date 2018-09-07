import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { WxController } from './controllers/wx.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController, WxController],
  providers: [AppService],
})
export class AppModule {}
