
import { Body, Controller, Post, Put } from '@nestjs/common';
import { updateUsersDTO, usersDTO } from './dto/users.dto';
import { UsersService } from './users.service';

@Controller('/v1/users')
export class UsersController {
  constructor(private readonly usersService: UsersService) { }

  @Post()
  async createUsers(@Body() body: usersDTO) {
    try {
      const user = await this.usersService.createUsers(body);
      return user;
    } catch (error) {
      return error;
    }
  }

  @Put()
  async updateUsers(@Body() body: updateUsersDTO) {
    try {
      const user = await this.usersService.updateUsers(body)
      return user
    } catch (error) {
      return error
    }
  }
}
