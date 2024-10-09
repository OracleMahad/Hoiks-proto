import { Controller, Get, Post, Body, Patch, Param, Delete, Put, HttpCode } from '@nestjs/common';
import { AdminService } from './admin.service';
import { CreateAdminDto } from './dto/create-admin.dto';
import { CreateCategoryDto, CreateMenuDto, CreateOptionDto, CreateOptionInfoDto, CreateSubCategoryDto, DeleteCategoryDto, DeleteMenuDto, DeleteOptionDto, DeleteOptionInfoDto, DeleteSubCategoryDto, UpdateCategoryDto, UpdateMenuDto, UpdateOptionDto, UpdateOptionInfoDto, UpdateSubCategoryDto } from './dto/create.dto';
import { deprecate } from 'util';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { GetAllItemsResDto } from 'src/kiosk/dto/get-all-items-res.dto';
import { KioskService } from 'src/kiosk/kiosk.service';

@ApiTags('admin')
@Controller('admin')
export class AdminController {
  constructor(private readonly adminService: AdminService, private readonly kioskService: KioskService) {}

  @ApiOperation({ summary: 'for test' })
  @ApiResponse({ status: 200, description: 'Object', type: GetAllItemsResDto })
  @Get('items')
  async findAllItems() {
    return await this.kioskService.findAllItems(); 
  }

  @Post('categories')
  createCategory(@Body() createCategoryDto: CreateCategoryDto) {
    return this.adminService.createCategory(createCategoryDto);
  }

  @Put('categories')
  updateCategory(@Body() updateCategoryDto: UpdateCategoryDto) {
    return this.adminService.updateCategory(updateCategoryDto);
  }

  @Delete('categories')
  deleteCategory(@Body() deleteCategoryDto: DeleteCategoryDto) {
    return this.adminService.deleteCategory(deleteCategoryDto);
  }

  @Post('sub-categories')
  createSubCategory(@Body() createSubCategoryDto: CreateSubCategoryDto) {
    return this.adminService.createSubCategory(createSubCategoryDto);
  }

  @Put('sub-categories')
  updateSubCategory(@Body() updateSubCategoryDto: UpdateSubCategoryDto) {
    return this.adminService.updateSubCategory(updateSubCategoryDto);
  }

  @Delete('sub-categories')
  deleteSubCategory(@Body() deleteSubCategoryDto: DeleteSubCategoryDto) {
    return this.adminService.deleteSubCategory(deleteSubCategoryDto);
  }

  @Get('menus')
  async findAllItemss() {
    return await this.kioskService.findAllItems(); 
  }
  
  @Post('menus')
  createMenu(@Body() createMenuDto: CreateMenuDto) {
    return this.adminService.createMenu(createMenuDto);
  }

  @Put('menus')
  updateMenu(@Body() updateMenuDto: UpdateMenuDto) {
    return this.adminService.updateMenu(updateMenuDto);
  }

  @Delete('menus')
  deleteMenu(@Body() deleteMenuDto: DeleteMenuDto) {
    return this.adminService.deleteMenu(deleteMenuDto);
  }

  @Post('options')
  createOption(@Body() createOptionDto: CreateOptionDto) {
    return this.adminService.createOption(createOptionDto);
  }

  @Put('options')
  updateOption(@Body() updateOptionDto: UpdateOptionDto) {
    return this.adminService.updateOption(updateOptionDto);
  }

  @Delete('options')
  deleteOption(@Body() deleteOptionDto: DeleteOptionDto) {
    return this.adminService.deleteOption(deleteOptionDto);
  }

  @Post('options-info')
  createOptionInfo(@Body() createOptionInfoDto: CreateOptionInfoDto) {
    return this.adminService.createOptionInfo(createOptionInfoDto);
  }

  @Put('options-info')
  updateOptionInfo(@Body() updateOptionInfoDto: UpdateOptionInfoDto) {
    return this.adminService.updateOptionInfo(updateOptionInfoDto);
  }

  @Delete('options-info')
  deleteOptionInfo(@Body() deleteOptionInfoDto: DeleteOptionInfoDto) {
    return this.adminService.deleteOptionInfo(deleteOptionInfoDto);
  }



  /*We attempt to transfer to integrated 
  api regarding menu or category generation 
  and query modification*/

  // @Get(':masterUserId')
  // getStore(@Param('masterUserId') masterUserId: number) {
  //   //deprecated
  // }

  // @Get(':storeId/menus')
  // getMenus(@Param('storeId') storeId: number) {
  //   //deprecated
  // }
}
