import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  private readonly users = [
    {
      userId: 1,
      username: 'john',
      password: '1q2w3e4r',
      email: 'hoiks@gmail.com',
    },
    {
      userId: 2,
      username: 'maria',
      password: '1q2w3e4r',
      email: 'hoiks2@gmail.com',
    },
  ];

  create(createUserDto: CreateUserDto) {
    return 'This action adds a new user';
  }

  findAll() {
    return `This action returns all users`;
  }

  findOne(id: number) {
    return this.users.find(user => user.userId === id);
  }

  findOneByEmail(email: string) {
    return this.users.find(user => user.email === email);
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
