import { Module } from '@nestjs/common';
import { OrderService } from './order.service';
import { OrderController } from './order.controller';
import { UserService } from 'src/user/user.service';

@Module({
  providers: [OrderService,UserService],
  controllers: [OrderController]
})
export class OrderModule {}
