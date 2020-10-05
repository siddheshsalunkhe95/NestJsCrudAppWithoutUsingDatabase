import { Module } from '@nestjs/common';

import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';

// #Module method to include controllers and providers.
@Module({
    controllers: [ProductsController],
    providers: [ProductsService],
})
export class ProductsModule { }