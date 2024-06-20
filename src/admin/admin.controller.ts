import { Controller, Get, Post, Body, Patch, Param, Delete, Put, HttpCode } from '@nestjs/common';
import { AdminService } from './admin.service';
import { CreateAdminDto } from './dto/create-admin.dto';
import { CreateCategoryDto, CreateMenuDto, CreateOptionDto } from './dto/create.dto';
import { deprecate } from 'util';

@Controller('admin')
export class AdminController {
  constructor(private readonly adminService: AdminService) {}


  @Post('user')
  create(@Body() createAdminDto: CreateAdminDto) {
    return this.adminService.create(createAdminDto);
  }

  @Post('category')
  createCategory(@Body() createCategoryDto: CreateCategoryDto) {
    return this.adminService.createCategory(createCategoryDto);
  }

  @Post('menu')
  createMenu(@Body() createMenuDto: CreateMenuDto) {
    return this.adminService.createMenu(createMenuDto);
  }

  @Post('option')
  createOption(@Body() createOptionDto: CreateOptionDto) {
    return this.adminService.createOption(createOptionDto);
  }

  /*We attempt to transfer to integrated 
  api regarding menu or category generation 
  and query modification*/

  @Get(':masterUserId')
  getStore(@Param('masterUserId') masterUserId: number) {
    //deprecated
  }

  @Get(':storeId/menus')
  getMenus(@Param('storeId') storeId: number) {
    //deprecated
  }

  @Put('category/:categoryId/menu/:menuId') 
  updateMenu() {
    //deprecated
  }

  @Put('category/:categoryId/menu/:menuId/option/:optionId') 
  updateOption() {
    //deprecated
  }

  @Delete('category/:categoryId/menusearch/:meneSearchId')
  @HttpCode(204) // No content on successful delete
  deleteMenuSearch(@Param('meneSearchId') meneSearchId: number) {
    //deprecated
  }

  @Put('category/:categoryId/menu/:menuId/option/:optionId/option-info/:optionInfoId')
  updateOptionInfo() {
    //deprecated
  }
}
