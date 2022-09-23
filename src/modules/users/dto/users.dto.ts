import { IsNotEmpty } from "class-validator";

export class usersDTO {
  @IsNotEmpty({ message: 'Required.' })
  fName: string
  @IsNotEmpty({ message: 'Required.' })
  lName: string
  @IsNotEmpty({ message: 'Required.' })
  email: string
  @IsNotEmpty({ message: 'Required.' })
  gender: string

}

export class updateUsersDTO {
  @IsNotEmpty({ message: 'Required.' })
  userId: string
  fName: string
  lName: string
  email: string
  gender: string
  userStatus: string
}