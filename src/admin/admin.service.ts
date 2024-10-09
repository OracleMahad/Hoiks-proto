import { Injectable } from '@nestjs/common';
import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';
import { PrismaService } from 'src/prisma.service';
import { CreateCategoryDto, CreateMenuDto, CreateOptionDto, CreateOptionInfoDto, CreateSubCategoryDto, DeleteCategoryDto, DeleteMenuDto, DeleteOptionDto, DeleteOptionInfoDto, DeleteSubCategoryDto, UpdateCategoryDto, UpdateMenuDto, UpdateOptionDto, UpdateOptionInfoDto, UpdateSubCategoryDto } from './dto/create.dto';

@Injectable()
export class AdminService {
  constructor(private prisma: PrismaService) {}
  // create(createAdminDto: CreateAdminDto) {
  //   return 'This action adds a new admin';
  // }

  async createCategory(createCategoryDto: CreateCategoryDto) {
    return this.prisma.category.create({ data: createCategoryDto });
  }

  async updateCategory(updateCategoryDto: UpdateCategoryDto) {
    return this.prisma.category.update({ 
      where: {id: updateCategoryDto.categoryId},
      data: updateCategoryDto
    });
  }

  async deleteCategory(deleteCategoryDto: DeleteCategoryDto) {
    //delete all sub category
    return this.prisma.category.delete({ 
      where: {id: deleteCategoryDto.categoryId},
    });
  }

  async createSubCategory(createSubCategoryDto: CreateSubCategoryDto) {
    return this.prisma.subCategory.create({ data: createSubCategoryDto });
  }

  async updateSubCategory(updateSubCategoryDto: UpdateSubCategoryDto) {
    return this.prisma.subCategory.update({ 
      where: {id: updateSubCategoryDto.subCategoryId},
      data: updateSubCategoryDto
    });
  }

  async deleteSubCategory(deleteSubCategoryDto: DeleteSubCategoryDto) {
    //menu delete
    return this.prisma.subCategory.delete({ 
      where: {id: deleteSubCategoryDto.subCategoryId},
    });
  }

  async createMenu(createMenuDto: CreateMenuDto) {
    const menu =  await this.prisma.menu.create({ data: createMenuDto });
    return this.prisma.menuSearch.create({ data: {
      subCategoryId: createMenuDto.subCategoryId,
      menuId: menu.id
    } });
  }

  async updateMenu(updateMenuDto: UpdateMenuDto) {
    await this.prisma.menuSearch.updateMany({ 
      where: {menuId: updateMenuDto.menuId},
      data: {subCategoryId: updateMenuDto.subCategoryId}
    });
    return this.prisma.menu.update({ 
      where: {id: updateMenuDto.menuId},
      data: updateMenuDto
    });
  }

  async deleteMenu(deleteMenuDto: DeleteMenuDto) {
    //menu delete
    await this.prisma.menuSearch.deleteMany({ 
      where: {menuId: deleteMenuDto.menuId},
    });
    return this.prisma.menu.delete({ 
      where: {id: deleteMenuDto.menuId},
    });
  }

  async createOption(createOptionDto: CreateOptionDto) {
    return this.prisma.menuOption.create({
      data: createOptionDto,
    });
  }

  async updateOption(updateOptionDto: UpdateOptionDto) {
    return this.prisma.menuOption.update({ 
      where: {id: updateOptionDto.optionId},
      data: updateOptionDto
    });
  }

  async deleteOption(deleteOptionDto: DeleteOptionDto) {
    //Option info delete
    return this.prisma.menuOption.delete({ 
      where: {id: deleteOptionDto.optionId},
    });
  }

  async createOptionInfo(createOptionInfoDto: CreateOptionInfoDto) {
    return this.prisma.optionInfo.create({
      data: createOptionInfoDto,
    });
  }

  async updateOptionInfo(updateOptionInfoDto: UpdateOptionInfoDto) {
    return this.prisma.optionInfo.update({ 
      where: {id: updateOptionInfoDto.optionInfoId},
      data: updateOptionInfoDto
    });
  }

  async deleteOptionInfo(deleteOptionInfoDto: DeleteOptionInfoDto) {
    return this.prisma.optionInfo.delete({ 
      where: {id: deleteOptionInfoDto.optionInfoId},
    });
  }
}
