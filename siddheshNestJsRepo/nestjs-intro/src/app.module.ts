import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';

// add extra module
import { ProductsModule } from './products/products.module';

/* 
  imports all module : - link multiple modules accordingly. 
  controllers
  providers
*/
@Module({
  imports: [ProductsModule],
  controllers: [AppController],
  providers: [AppService],
})

// export app.module.ts file. 
export class AppModule { }
