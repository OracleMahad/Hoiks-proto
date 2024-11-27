import { ApiProperty } from '@nestjs/swagger';


export class Customer {
    @ApiProperty({ example: '주짓수' })
    name?: string;
    @ApiProperty({ example: '010-1234-1234' })
    phoneNumber?: string;
}
  
export class Item {
    @ApiProperty({ example: 1 })
    id: number;
    @ApiProperty({ example: '커피' })
    name: string;
    @ApiProperty({ example: 2 })
    quantity: number;
    @ApiProperty({ example: 2000 })
    price: number; 
    @ApiProperty({ example: 4500, description: 'price * quantity + option-price' })
    totalPrice: number;//price * quantity + option price
    @ApiProperty({ type: () => [MenuOption] })
    options: MenuOption[];
}

export class MenuOption {
    @ApiProperty({ example: 1 })
    id: number;
  
    @ApiProperty({ example: '옵션 이름' })
    name: string;
  
    @ApiProperty({ type: () => [OptionInfo] })
    optionInfo: OptionInfo[];
  
    constructor(id: number, name: string, optionInfos: OptionInfo[]) {
      this.id = id;
      this.name = name;
      this.optionInfo = optionInfos;
    }
  }

  export class OptionInfo {
    @ApiProperty({ example: 1 })
    id: number;
  
    @ApiProperty({ example: '옵션 상세' })
    name: string;
  
    @ApiProperty({ example: '옵션 추가 가격' })
    price: number;
  
    constructor(id: number, name: string, price: number) {
      this.id = id;
      this.name = name;
      this.price = price;
    }
  }
  

export class CreateOrderDto {
    @ApiProperty({ example: 'QSDFQSX' })
    orderId: string;

    @ApiProperty({ example: 'AGGSGW!$@$', required: false })
    deviceId?: string;

    @ApiProperty({ example: '2024-07-11T17:48:10.516Z' })
    orderDateTime: string;

    // @ApiProperty({ type: () => Customer })
    // customer?: Customer;

    @ApiProperty({ type: () => [Item] })
    items: Item[];

    @ApiProperty({ example: 0, required: false })
    extraPrice: number;

    @ApiProperty({ example: 109000 })
    totalPrice: number; // (price * quantity + option price)[] + extraPrice

    @ApiProperty({ example: 'card' })
    paymentMethod: string;

    // @ApiProperty({ example: '???' })
    // orderStatus: string;

    @ApiProperty({ example: true })
    takeOut: boolean;

    // @ApiProperty({ example: '안녕하세요' })
    // notes?: string; // 선택적 필드

    @ApiProperty({ example: '' })
    gender: string;

    @ApiProperty({ example: '' })
    age: string;

    @ApiProperty({ example: '' })
    position: string;
  
    constructor(
      orderId: string,
      deviceId: string,
      orderDateTime: string,
      customer: Customer,
      items: Item[],
      extraPrice: number,
      totalPrice: number,
      paymentMethod: string,
      orderStatus: string,
      takeOut: boolean,
      notes?: string
    ) {
      this.orderId = orderId;
      this.deviceId = deviceId;
      this.orderDateTime = orderDateTime;
      this.items = items;
      this.extraPrice = extraPrice;
      this.totalPrice = totalPrice;
      this.paymentMethod = paymentMethod;
      this.takeOut = takeOut;
    }
}
