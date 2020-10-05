import { Controller, Get, Header } from '@nestjs/common';
import { AppService } from './app.service';

/*
  @Controller()  method describes routing mechanism
*/
@Controller()
export class AppController {

  constructor(private readonly appService: AppService) { }

  // @Get()
  // getHello(): string {
  //   return this.appService.getHello();
  // }

  @Get()
  @Header('Content-Type', 'text/html')
  getHello(): any {
    // getHello(): { name: string } {
    // return { name: "Siddhesh" };
    return this.appService.getHello(); // calls actual method from appService file.
  }

}
