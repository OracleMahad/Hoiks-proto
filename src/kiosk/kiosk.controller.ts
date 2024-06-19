import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { KioskService } from './kiosk.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { GetAllItemsResDto } from './dto/get-all-items-res.dto';

@ApiTags('kiosk')
@Controller('kiosk')
export class KioskController {
  constructor(private readonly kioskService: KioskService) {}

  @Post("order")
  createOrder(@Body() createOrderDto: CreateOrderDto) {
    return this.kioskService.create(createOrderDto);
  }

  @ApiOperation({ summary: 'Get all items' })
  @ApiResponse({ status: 200, description: 'Object', type: GetAllItemsResDto })
  @Get('items')
  async findAllItems() {
    return await this.kioskService.findAllItemsSample(); 
  }
} 
