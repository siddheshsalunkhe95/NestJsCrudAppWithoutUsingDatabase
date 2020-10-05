import { Injectable } from '@nestjs/common';

/*
  all logical part includes here 
*/
@Injectable()
export class AppService {

  getHello(): any {
    // getHello(): string {
    return { name: "Siddhesh-Salunkhe" };
    // return 'Hello World!'; 
  }

}
