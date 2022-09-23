import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersEntity as Users } from 'src/entities/users.entity';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

const db = TypeOrmModule.forFeature([Users]);
@Module({
  imports: [db],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
