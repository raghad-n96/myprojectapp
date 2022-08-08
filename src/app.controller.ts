import { Controller, Get, Render, Res } from '@nestjs/common';
import { Response } from 'express';


@Controller()
export class AppController {
  
//  @Get()
//  @Render('index')
//   getIndex() {
//     return {};
//   }
  
  @Get()
  get(@Res() res: Response) {
    res.sendFile('index.html', {
      root: '../views/build',
    });
  }

}
