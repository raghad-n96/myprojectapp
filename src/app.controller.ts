import { Controller, Get, Render, Res } from '@nestjs/common';


@Controller()
export class AppController {
  
  @Get()
  @Render('index')
  getIndex() {
    return {};
  }
}
