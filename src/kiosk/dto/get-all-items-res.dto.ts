import { ApiProperty } from '@nestjs/swagger';

export class GetAllItemsResDto {
  @ApiProperty({ example: 1 })
  id: number;

  @ApiProperty({ example: '카페 이름' })
  name: string;

  @ApiProperty({ example: 1 })
  masterUserId: number;

  @ApiProperty({ type: () => [Category] })
  category: Category[];

  constructor(id: number, name: string, masterUserId: number, categories: Category[]) {
    this.id = id;
    this.name = name;
    this.masterUserId = masterUserId;
    this.category = categories;
  }
}

export class Category {
  @ApiProperty({ example: 1 })
  id: number;

  @ApiProperty({ example: '카테고리 이름' })
  name: string;

  @ApiProperty({ type: () => [Menu] })
  menu: Menu[];

  constructor(id: number, name: string, menu: Menu[]) {
    this.id = id;
    this.name = name;
    this.menu = menu;
  }
}

export class Menu {
  @ApiProperty({ example: 1 })
  id: number;

  @ApiProperty({ example: '메뉴 이름' })
  name: string;

  @ApiProperty({ required: false, example: '메뉴 설명' })
  info?: string;

  @ApiProperty({ example: 3000 })
  price: number;

  @ApiProperty({ required: false, example: 'https://example.com/menu.jpg' })
  photoUrl?: string;

  @ApiProperty({ type: () => [Option] })
  option: Option[];

  constructor(id: number, name: string, price: number, options: Option[], info?: string, photoUrl?: string) {
    this.id = id;
    this.name = name;
    this.info = info;
    this.price = price;
    this.photoUrl = photoUrl;
    this.option = options;
  }
}

export class Option {
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

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }
}
