import { Body, Controller, Get, Param, Post, Delete } from '@nestjs/common';
import e from 'express';
import { UserService } from 'src/user/user.service';
import { OrderService } from './order.service';

@Controller('order')
export class OrderController {

    constructor(private orderService:OrderService,public userService:UserService){}

    @Get()    
    getOrder(){
        return this.orderService.getOrder()
    }

    @Get('/getOderById/:orderId')
    getOderById(@Param('orderId') id:string){
        return this.orderService.getOrderById(id)
    }

    @Post('/createOrder')
    createBill(@Body() obj:{}){     
        console.log(UserService.loginStatus)
        if(UserService.loginStatus === true){
           return this.orderService.addOrder(obj)
        }else{
            return 'Please Login'
        }
    }

    @Delete('/:orderId')
    deleteOrder(@Param('orderId') id:string){
        return this.orderService.deleteOrder(id)
    }
}
