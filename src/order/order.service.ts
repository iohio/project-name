import { Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class OrderService {
    static orderList:any[] = []

    getOrder(){
        return OrderService.orderList
    }

    getOrderById(id:string){
        const orderDetail = OrderService.orderList.find(x=> x.id === id)
        return orderDetail
    }

    deleteOrder(id:string){
      const orderDetail =  this.getOrderById(id)
      if(orderDetail.user !== UserService.userProfile.firstName){
        return 'cant delete you are not owner order'
      }else{
        const index = OrderService.orderList.findIndex(x => x.id === id)
        OrderService.orderList.splice(index, 1);
        return 'cancel order success'
      }
    }

    async addOrder(obj:any){
        var total = 0
        for (const result of obj){
            total += result.price
        }

        const order:any = {}
        order.id = uuidv4()
        order.user = UserService.userProfile.firstName
        order.item = obj
        order.total = total
        order.createAt = new Date()
        OrderService.orderList.push(order)
        return order

    }

}
