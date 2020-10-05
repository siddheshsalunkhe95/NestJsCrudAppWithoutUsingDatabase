import {
    Controller,
    Post,
    Body,
    Get,
    Param,
    Patch,
    Delete,
} from '@nestjs/common';

import { ProductsService } from './products.service';


/** 
*  @Controller() accepts incoming routes/request starts with products. 
*/
@Controller('products')
export class ProductsController {

    constructor(private readonly productsService: ProductsService) { }

    /************************  Post route ************************/
    @Post()
    addProduct(
        @Body('title') prodTitle: string,
        @Body('description') prodDesc: string,
        @Body('price') prodPrice: number,
    ) {
        const generatedId = this.productsService.insertProduct(
            prodTitle,
            prodDesc,
            prodPrice,
        );
        // console.log("<><><generatedId><><>", generatedId);
        return { id: generatedId };
    }

    /************************  Get route ************************/
    @Get()
    getAllProducts() {
        return this.productsService.getProducts();
    }

    @Get(':id')
    getProduct(
        @Param('id') prodId: string
    ) {
        return this.productsService.getSingleProduct(prodId);
    }

    /************************  Patch route ************************/
    @Patch(':id')
    updateProduct(
        @Param('id') prodId: string,
        @Body('title') prodTitle: string,
        @Body('description') prodDesc: string,
        @Body('price') prodPrice: number,
    ) {
        this.productsService.updateProduct(prodId, prodTitle, prodDesc, prodPrice);
        return null;
    }

    /************************  Delete route ************************/
    @Delete(':id')
    removeProduct(
        @Param('id') prodId: string
    ) {
        this.productsService.deleteProduct(prodId);
        return null;
    }

}