import { Controller, Get, Post,Body } from '@nestjs/common';
import { AppService } from './app.service';
import { UserService } from './user/user.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService,private userService:UserService) {}

  @Get()
  getHello1(): string {
    return 'Hello11';
  }

  @Post('/auth/login')
  login(@Body('user') user:string,@Body('password') password:string){
      console.log(user,password)
      return this.userService.login(user,password)
  }

}
