import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateCategoryDto, CreateMenuDto, CreateOptionDto, CreateOptionInfoDto, CreateSubCategoryDto, DeleteCategoryDto, DeleteMenuDto, DeleteOptionDto, DeleteOptionInfoDto, DeleteSubCategoryDto, GetCategoriesQueryDto, GetMenusQueryDto, GetSubCategoriesQueryDto, UpdateCategoryDto, UpdateMenuDto, UpdateOptionDto, UpdateOptionInfoDto, UpdateSubCategoryDto } from './dto/admin-req.dto';
import { Menu, MenuOption } from 'src/kiosk/dto/get-all-items-res.dto';

@Injectable()
export class AdminService {
  constructor(private prisma: PrismaService) {}
  // create(createAdminDto: CreateAdminDto) {
  //   return 'This action adds a new admin';
  // }

  async getCategoris(query: GetCategoriesQueryDto) {
    return this.prisma.category.findMany({ where: {...(query.storeId ? {storeId: parseInt(query.storeId, 10)} : {})} });
  }

  async createCategory(createCategoryDto: CreateCategoryDto) {
    return this.prisma.category.create({ data: createCategoryDto });
  }

  async updateCategory(updateCategoryDto: UpdateCategoryDto) {
    return this.prisma.category.update({ 
      where: {id: updateCategoryDto.categoryId},
      data: {
        name: updateCategoryDto.name,
        className: updateCategoryDto.className,
      }
    });
  }

  async deleteCategory(deleteCategoryDto: DeleteCategoryDto) {
    //delete all sub category
    return this.prisma.category.delete({ 
      where: {id: deleteCategoryDto.categoryId},
    });
  }

  async getSubCategoris(query: GetSubCategoriesQueryDto) {
    return this.prisma.subCategory.findMany({ where: { categoryId: parseInt(query.categoryId, 10) }});
  }

  async createSubCategory(createSubCategoryDto: CreateSubCategoryDto) {
    return this.prisma.subCategory.create({ data: createSubCategoryDto });
  }

  async updateSubCategory(updateSubCategoryDto: UpdateSubCategoryDto) {
    return this.prisma.subCategory.update({ 
      where: {id: updateSubCategoryDto.subCategoryId},
      data: {
        name: updateSubCategoryDto.name,
        className: updateSubCategoryDto.className,
        categoryId: updateSubCategoryDto.categoryId,
      }
    });
  }

  async deleteSubCategory(deleteSubCategoryDto: DeleteSubCategoryDto) {
    //menu delete
    return this.prisma.subCategory.delete({ 
      where: {id: deleteSubCategoryDto.subCategoryId},
    });
  }

  async getMenus(query: GetMenusQueryDto) {
    const allMenus = await this.prisma.menuSearch.findMany({
      where: { subCategoryId: parseInt(query.subCategoryId, 10) },
      include: {
        Menu: {
          include: {
            MenuOption: {
              include: {
                OptionInfo: true
              }
            }
          },

        }
      }
    });

    return allMenus.map( 
      ms => new Menu(
        ms.Menu.id,
        ms.Menu.name,
        ms.Menu.price,
        ms.Menu.MenuOption.map(
          (mo) => new MenuOption(
            mo.id,
            mo.name,
            mo.OptionInfo
          )
        ),
        ms.Menu.info,
        ms.Menu.photoURL,
      )
    )
  }

  async createMenu(createMenuDto: CreateMenuDto) {
    const menu =  await this.prisma.menu.create({ data: {
      name: createMenuDto.name,
      info: createMenuDto.info,
      price: createMenuDto.price,
      photoURL: createMenuDto.photoURL,
    } });
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
      data: {
        name: updateMenuDto.name,
        info: updateMenuDto.info,
        price: updateMenuDto.price,
        photoURL: updateMenuDto.photoURL,
      }
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
      data: {
        name: updateOptionDto.name
      }
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
      data: {
        name: updateOptionInfoDto.name,
        price: updateOptionInfoDto.price,
        photoURL: updateOptionInfoDto.photoURL,
      }
    });
  }

  async deleteOptionInfo(deleteOptionInfoDto: DeleteOptionInfoDto) {
    return this.prisma.optionInfo.delete({ 
      where: {id: deleteOptionInfoDto.optionInfoId},
    });
  }
}
