import { Injectable } from '@nestjs/common';
import { User } from './user.enitiy';
import { v4 as uuidv4 } from 'uuid';
import * as bcrypt from 'bcrypt'
import { json } from 'body-parser';
import { throws } from 'assert';
import { OrderService } from 'src/order/order.service';


@Injectable()
export class UserService {
    userArray:User[] = []
    static userProfile:any = {}
    static loginStatus:boolean = false

    async create(obj: User){
        const salt = await bcrypt.genSalt()
        const password = await bcrypt.hash(obj.password, salt)
        const user = new User()
        user.id = uuidv4()
        user.loginuser = obj.loginuser
        user.password = password
        user.salt = salt
        user.firstName = obj.firstName
        user.lastName = obj.lastName
        user.createDate = new Date()
        console.log(user)
        this.userArray.push(user)
        return user
    }

    getUser(){
        return this.userArray
    }

   
    async login(user:string, password:string){
        const userDetail = this.userArray.find(x=> x.loginuser === user)
        if(userDetail){
            const match = await bcrypt.compare(password,userDetail.password)
            if(match){
                UserService.userProfile.user = userDetail.loginuser
                UserService.userProfile.firstName = userDetail.firstName
                UserService.userProfile.lastName = userDetail.lastName
                UserService.loginStatus = true
                return `login! Welcome ${userDetail.firstName}`
            }else{
                return 'password dont match'
            }
        }else{
            return 'user dont match'
        }
    }

    getProfile(){
        if(UserService.loginStatus === true){
            console.log('Profile')
            console.log(UserService.userProfile)
            return UserService.userProfile
        }else{
            return 'Please login!'
        }
    }

    getOrderHistory(){
        if(UserService.loginStatus === true){
            const orderHis = OrderService.orderList.find(x=> x.user === UserService.userProfile.user)
            if(!orderHis){
                return 'Not have Order'
            }
            return orderHis
        }else{
            return 'Please login!'
        }
    }

}

