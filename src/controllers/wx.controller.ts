import { Controller, Get } from '@nestjs/common';

@Controller('wx')
export class WxController {
  @Get()
  findAll() {
    return 'Gotta!';
  }
}