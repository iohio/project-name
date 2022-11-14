import { Injectable } from '@nestjs/common';
import { Product } from './product.enitiy';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class ProductService {
    productArray:any[] = []

    private readonly productList = [
        {
            id: '1',
            name: 'Apple',
            price: 130,
            description: 'Apple is a good'
        },
        {
            id: '2',
            name: 'Mango',
            price: 130,
            description: 'Mango is a good'
        },
        {
            id: '3',
            name: 'Malon',
            price: 130,
            description: 'Malon is a good'
        },
        {
            id: '4',
            name: 'Banana',
            price: 130,
            description: 'Banana is a good'
        },
        {
            id: '5',
            name: 'Pineapple',
            price: 130,
            description: 'Pineapple is a good'
        },
      ];

    // addProduct(){
    //     // const product = new Product()
    //     // product.id = uuidv4()
    //     // product.name = name
    //     // product.price = price
    //     // product.description = description
    //     //console.log(product)
    //     this.productArray.push(this.productList)
    // }

    getProduct(){
        return this.productList
    }

    getProductByName(name:string){
        const productDetaill = this.productList.find(x=> x.name === name)
        return productDetaill
    }
}
