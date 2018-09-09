import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { WxController } from './controllers/wx.controller';
import { AppService } from './app.service';
import { HttpModule } from '@nestjs/common';

@Module({
  imports: [HttpModule],
  controllers: [AppController, WxController],
  providers: [AppService],
})
export class AppModule {}
