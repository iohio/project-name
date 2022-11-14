import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { User } from './user.enitiy';
import { UserService } from './user.service';

@Controller('user')
export class UserController {

    constructor(private userService:UserService){}

    @Get()
    getUser(){
        return this.userService.getUser()
    }

    @Get('/profile')
    getUserProfile(){
        return this.userService.getProfile()
    }

    @Get('/profile/orderHistory')
    getOderHistory(){
        return this.userService.getOrderHistory()
    }

    @Post('/register')
    createRegister(@Body() obj:any)
    {
       return this.userService.create(obj)
    }
}
