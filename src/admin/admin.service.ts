import { Injectable } from '@nestjs/common';
import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';
import { PrismaService } from 'src/prisma.service';
import { CreateCategoryDto, CreateMenuDto, CreateOptionDto } from './dto/create.dto';

@Injectable()
export class AdminService {
  constructor(private prisma: PrismaService) {}
  create(createAdminDto: CreateAdminDto) {
    return 'This action adds a new admin';
  }

  async createCategory(createCategoryDto: CreateCategoryDto) {
    return this.prisma.category.create({ data: createCategoryDto });
  }

  async createMenu(createMenuDto: CreateMenuDto) {
    return this.prisma.menu.create({ data: createMenuDto });
  }

  async createOption(createOptionDto: CreateOptionDto) {
    return this.prisma.option.create({
      data: {
        ...createOptionDto,
        menuId: createOptionDto.menuId,
        // menu: {
        //   connect: { id: createOptionDto.menuId },
        // },
      },
    });
  }
}
