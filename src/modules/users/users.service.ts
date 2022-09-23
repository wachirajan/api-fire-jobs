import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UsersEntity } from 'src/entities/users.entity';
import { Repository } from 'typeorm';
import { updateUsersDTO, usersDTO } from './dto/users.dto';
@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UsersEntity)
    private readonly usersRepository: Repository<UsersEntity>,
  ) { }

  async createUsers(usersDTO: usersDTO) {
    const userCreate = this.usersRepository.create(usersDTO);
    const userSave = await this.usersRepository.save(usersDTO);
    return userSave
  }

  async updateUsers(updateUserDTO: updateUsersDTO) {
    const { userId } = updateUserDTO
    const userCreate = this.usersRepository.create(updateUserDTO);
    const userSave = await this.usersRepository.update(userId, userCreate);
    return userSave
  }
}
