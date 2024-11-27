import { Controller, Get, Post, Body, Patch, Param, Delete, Put, HttpCode, Query, UseGuards, Request } from '@nestjs/common';
import { AdminService } from './admin.service';
import { CreateCategoryDto, CreateDeviceDto, CreateMenuDto, CreateOptionDto, CreateOptionInfoDto, CreateSubCategoryDto, DeleteCategoryDto, DeleteDeviceDto, DeleteMenuDto, DeleteOptionDto, DeleteOptionInfoDto, DeleteSubCategoryDto, GetByStoreIdQueryDto, GetCategoriesQueryDto, GetDevicesQueryDto, GetMenusQueryDto, GetSubCategoriesQueryDto, UpdateCategoryDto, UpdateDeviceDto, UpdateMenuDto, UpdateOptionDto, UpdateOptionInfoDto, UpdateSubCategoryDto } from './dto/admin-req.dto';
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

  @ApiOperation({ summary: 'OpenWeather 사용 예정. 현재 dummy 리턴' })
  @Get('waether')
  getWeatherInfo2(@Query() query: GetByStoreIdQueryDto){
    return {
      "coord": {
        "lon": 126.9778,
        "lat": 37.5683
      },
      "weather": [
        {
          "id": 900,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01d"
        }
      ],
      "base": "stations",
      "main": {
        "temp": 2.75,
        "feels_like": 2.43,
        "temp_min": 0,
        "temp_max": 3,
        "pressure": 1015,
        "humidity": 90
      },
      "visibility": 10000,
      "wind": {
        "speed": 3.09,
        "deg": 230
      },
      "clouds": {
        "all": 0
      },
      "dt": 1620817926,
      "sys": {
        "type": 1,
        "id": 5509,
        "country": "KR",
        "sunrise": 1620781943,
        "sunset": 1620832541
      },
      "timezone": 32400,
      "id": 1835848,
      "name": "Seoul",
      "cod": 200
    }    
  }

  @ApiOperation({ summary: 'OpenWeather 사용 예정. 현재 dummy 리턴' })
  @Get('weather')
  getWeatherInfo(@Query() query: GetByStoreIdQueryDto){
    return {
      "coord": {
        "lon": 126.9778,
        "lat": 37.5683
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01d"
        }
      ],
      "base": "stations",
      "main": {
        "temp": 22.75,
        "feels_like": 22.43,
        "temp_min": 21.56,
        "temp_max": 23.89,
        "pressure": 1015,
        "humidity": 46
      },
      "visibility": 10000,
      "wind": {
        "speed": 3.09,
        "deg": 230
      },
      "clouds": {
        "all": 0
      },
      "dt": 1620817926,
      "sys": {
        "type": 1,
        "id": 5509,
        "country": "KR",
        "sunrise": 1620781943,
        "sunset": 1620832541
      },
      "timezone": 32400,
      "id": 1835848,
      "name": "Seoul",
      "cod": 200
    }    
  }

  @ApiOperation({ summary: '현재 dummy 리턴. 실시간 보다는 오늘의 매출이 의미있을거 같아서 이렇게 했습니다요' })
  @Get('dashboard')
  get(@Query() query: GetByStoreIdQueryDto){
    // const oneHourAgo = new Date();
    // oneHourAgo.setHours(oneHourAgo.getHours() - 1);
  
    // const totalAmount = await this.prisma.orderInfo.aggregate({
    //   _sum: {
    //     amount: true,
    //   },
    //   where: {
    //     orderDate: {
    //       gte: oneHourAgo, // 1시간 전 이후의 주문만 필터링
    //     },
    //   },
    // });
  
    // return totalAmount._sum.amount || 0; // 총합이 null일 경우 0으로 반환
    return {
      "salesInfo": {
        "totalSalesToday": 1289000,  // 오늘의 총 매출
        "totalOrdersToday": 145,     // 오늘의 총 주문 수
        "recentPayments": [          // 최근 결제 내역
          {
            "orderId": "QSDFQSX",
            "deviceId": "AGGSGW!$@$",
            "orderDateTime": "2024-07-11T17:48:10.516Z",
            "items": [
              {
                "id": 1,
                "name": "커피",
                "quantity": 2,
                "price": 2000,
                "totalPrice": 4500,
                "options": [
                  {
                    "id": 1,
                    "name": "옵션 이름",
                    "optionInfo": [
                      {
                        "id": 1,
                        "name": "옵션 상세",
                        "price": "옵션 추가 가격"
                      }
                    ]
                  }
                ]
              }
            ],
            "extraPrice": 0,
            "totalPrice": 109000,
            "paymentMethod": "card",
            "takeOut": true
          }
        ]
      },
      "popularMenuItems": [          // 매장의 인기 메뉴
        {
          "totalOrders": 50,
          "menuId": 15,
          "name": "멜론 소다",
          "info": "달콤한 멜론 맛 소다",
          "photoUrl": "melonsoda.jpg",
          "description": "할아버지 할머니 어렸을 적에 신으셨던 추억의 검정고무신"
        },
        {
          "totalOrders": 50,
          "menuId": 16,
          "name": "핑크 크림 라떼",
          "info": "핑크빛 비주얼의 부드러운 라떼",
          "photoUrl": "pinkcremalatte.jpg",
          "description": "엄마 아빠도 어릴적 신던 헐렁하고 못생긴 검정고무신"
        },
        {
          "totalOrders": 50,
          "menuId": 1,
          "name": "아메리카노",
          "info": "깔끔한 맛의 기본 커피",
          "photoUrl": "americano.jpg",
          "description": "지금 다시 생각해보면 웃지못할 이야기 정다운얘기 검정고무신"
        }
      ],
      "salesGraph": {                // 매출 그래프 데이터
        "labels": [
          "00:00", "01:00", "02:00", "03:00", "04:00", "05:00", "06:00", "07:00", 
          "08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00"
        ],
        "today": {                   // 오늘의 매출 데이터
          "data": [
            0, 0, 0, 0, 0, 0, 15000, 30000, 75000, 110000, 120000, 350000, 420000, 600000, 750000
          ]
        },
        "yesterday": {               // 어제의 매출 데이터
          "data": [
            0, 0, 0, 0, 0, 5000, 12000, 25000, 60000, 100000, 95000, 300000, 380000, 540000, 680000
          ]
        },
        "lastWeekSameDay": {         // 지난주 같은 요일의 매출 데이터
          "data": [
            0, 0, 0, 0, 0, 0, 8000, 22000, 55000, 90000, 115000, 320000, 410000, 580000, 700000
          ]
        }
      }
    }
  }

  @Get('orders')
  async getOrders(@Query() query: GetByStoreIdQueryDto) {
    return this.adminService.getOrders(query);
  }
  

  /*We attempt to transfer to integrated 
  api regarding menu or category generation 
  and query modification*/

  // @Get(':masterUserId')
  // getStore(@Param('masterUserId') masterUserId: number) {
  //   //deprecated
  // }

}
