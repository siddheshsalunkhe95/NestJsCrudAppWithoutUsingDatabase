import { Injectable, NotFoundException } from '@nestjs/common';

import { Product } from './product.model';

@Injectable()
export class ProductsService {

    // create empty array named products from class imported above Product
    private products: Product[] = [];

    /************************  add operation ************************/

    insertProduct(title: string, desc: string, price: number) {
        // prodId : - random id created by using JS Math object.
        const prodId = Math.random().toString();

        // newProduct is a object come from reqBody and pass through constructor method named :- new Product which is array of object
        const newProduct = new Product(prodId, title, desc, price);

        // add new object to products array
        this.products.push(newProduct);

        return prodId;
        // return this.products;
    }

    /************************  read operation ************************/

    getProducts() {
        // uses spread operator for getting all values from [this.products] array. 
        // [this.products] is accessible in ProductsService class.
        return [...this.products];
    }

    getSingleProduct(productId: string) {
        const product = this.findProduct(productId)[0];
        return { ...product };
    }

    /************************  update operation ************************/

    updateProduct(productId: string, title: string, desc: string, price: number) {
        // array destruction for fetching array from findProduct() method
        const [product, index] = this.findProduct(productId);

        // actual object
        const updatedProduct = { ...product };

        // check all key-values and assign new objet updatedProduct.    
        if (title) {
            updatedProduct.title = title;
        }
        if (desc) {
            updatedProduct.description = desc;
        }
        if (price) {
            updatedProduct.price = price;
        }
        this.products[index] = updatedProduct;
    }

    /************************  delete operation ************************/

    deleteProduct(prodId: string) {
        const index = this.findProduct(prodId)[1];
        this.products.splice(index, 1);
    }

    /************************  common function ************************/
    // main funtion to return product and its index value

    private findProduct(id: string): [Product, number] {
        const productIndex = this.products.findIndex(prod => prod.id === id);
        const product = this.products[productIndex];

        if (!product) {
            throw new NotFoundException('Could not find product.');
        } else {
            return [product, productIndex];
        }
    }

}