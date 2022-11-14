import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { json } from 'body-parser';
import { get } from 'http';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {

    constructor(private productService:ProductService){}

    @Get()
    getProduct(){
        return this.productService.getProduct()
    }

    @Get('/getProductByName/:name')
    getProductByName(@Param('name') name:string){
        return this.productService.getProductByName(name)
    }

    // @Post()
    // addProduct(@Body("name") name:string,@Body("price") price:number,@Body("description") description:string)
    // {
    //     this.productService.addProduct()
    // }
}
