import { Controller, Get, Req } from '@nestjs/common';
import { HttpService } from '@nestjs/common';
import * as config from 'config';

@Controller('wx')
export class WxController {
  constructor(private readonly httpService: HttpService) {}
  @Get()
  async findAll(@Req() request) {
    const jscode = request.query.js_code;
    const lrappid = config.get('appid');
    const lrsecret = config.get('secret');
    const response = await this.httpService.get('https://api.weixin.qq.com/sns/jscode2session', {
      params: {
        appid: lrappid,
        secret: lrsecret,
        js_code: jscode,
        grant_type: 'authorization_code',
      },
    }).toPromise();
    console.log(response.data);
    return 'gotta';
  }
}