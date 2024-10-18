import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  // private readonly users = [
  //   {
  //     userId: 1,
  //     username: 'john',
  //     password: '1q2w3e4r',
  //     email: 'hoiks@gmail.com',
  //   },
  //   {
  //     userId: 2,
  //     username: 'maria',
  //     password: '1q2w3e4r',
  //     email: 'hoiks2@gmail.com',
  //   },
  // ];

  createUser(name: string, email: string, password: string) {
    return this.prisma.user.create({
      data: {
        name,
        email,
        password,
      }
    })
  }

  
  createUserStore(name: string, userId: number) {
    return this.prisma.store.create({
      data: {
        name,
        masterUserId: userId
      }
    })
  }

  findOneByEmail(email: string) {
    return this.prisma.user.findFirst({
      where: {email}
    })
  }

  findOneByEmailOrThrow(email: string) {
    return this.prisma.user.findFirstOrThrow({
      where: {email}
    })
  }
}
