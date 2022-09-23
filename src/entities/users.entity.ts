import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users')
export class UsersEntity {
  @PrimaryGeneratedColumn('uuid', { name: 'user_id' })
  userId: string;

  @Column('nvarchar', { name: 'f_name'})
  fName: string

  @Column('nvarchar', { name: 'l_name'})
  lName: string

  @Column('nvarchar', { name: 'email'})
  email: string

  @Column('nvarchar', { name: 'gender'})
  gender: string

  @Column('nvarchar', { name: 'user_status'})
  userStatus: string

}
