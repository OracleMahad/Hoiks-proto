import { Controller, Get, Post, Body, Patch, Param, Delete, Put, HttpCode, Query, UseGuards, Request } from '@nestjs/common';
import { AdminService } from './admin.service';
import { CreateCategoryDto, CreateDeviceDto, CreateMenuDto, CreateOptionDto, CreateOptionInfoDto, CreateSubCategoryDto, DeleteCategoryDto, DeleteDeviceDto, DeleteMenuDto, DeleteOptionDto, DeleteOptionInfoDto, DeleteSubCategoryDto, GetCategoriesQueryDto, GetDevicesQueryDto, GetMenusQueryDto, GetSubCategoriesQueryDto, UpdateCategoryDto, UpdateDeviceDto, UpdateMenuDto, UpdateOptionDto, UpdateOptionInfoDto, UpdateSubCategoryDto } from './dto/admin-req.dto';
import { ApiBearerAuth, ApiOperation, ApiResponse, ApiTags, ApiUnauthorizedResponse } from '@nestjs/swagger';
import { GetAllItemsResDto } from 'src/kiosk/dto/get-all-items-res.dto';
import { KioskService } from 'src/kiosk/kiosk.service';
import { AuthGuard } from 'src/auth/auth.guard';

@ApiTags('admin')
@ApiBearerAuth()
@UseGuards(AuthGuard)
@ApiUnauthorizedResponse({ description: 'login or refresh'})
@Controller('admin')
export class AdminController {
  constructor(private readonly adminService: AdminService, private readonly kioskService: KioskService) {}

  @ApiOperation({ summary: 'for test' })
  @ApiResponse({ status: 200, description: 'Object', type: GetAllItemsResDto })
  @Get('items')
  async findAllItems() {
    return await this.kioskService.findAllItems(); 
  }

  @Get('categories')
  getCategories(@Query() query: GetCategoriesQueryDto) {
    return this.adminService.getCategoris(query);
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

  @Get('sub-categories')
  getSubCategories(@Query() query: GetSubCategoriesQueryDto) {
    return this.adminService.getSubCategoris(query);
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
  async getAllMenus(@Query() query: GetMenusQueryDto) {
    return this.adminService.getMenus(query);
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

  @Get('devices')
  async getAllDevices(@Query() query: GetDevicesQueryDto) {
    return this.adminService.getDevices(query);
  }
  
  @Post('devices')
  createDevice(@Request() req, @Body() createDeviceDto: CreateDeviceDto) {
    return this.adminService.createDevice(createDeviceDto, req.user.sub);
  }

  @Put('devices')
  updateDevice(@Body() updateDeviceDto: UpdateDeviceDto) {
    return this.adminService.updateDevice(updateDeviceDto);
  }

  @Delete('devices')
  deleteDevice(@Body() deleteDeviceDto: DeleteDeviceDto) {
    return this.adminService.deleteDevice(deleteDeviceDto);
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
