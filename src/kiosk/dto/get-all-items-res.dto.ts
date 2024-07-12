import { ApiProperty } from '@nestjs/swagger';

export class GetAllItemsResDto {
  @ApiProperty({ type: () => [Category] })
  topCategories: Category[];

  constructor(categories: Category[]) {
    this.topCategories = categories;
  }
}

export class Category {
  @ApiProperty({ example: 1 })
  id: number;

  @ApiProperty({ example: '추천메뉴' })
  name: string;

  @ApiProperty({ example: 'recommendedMenu' })
  className?: string;

  @ApiProperty({ type: () => [SubCategory] })
  subCategories: SubCategory[];

  constructor(id: number, name: string, className: string, subCategories: SubCategory[]) {
    this.id = id;
    this.name = name;
    this.className = className;
    this.subCategories = subCategories;
  }
}

export class SubCategory {
  @ApiProperty({ example: 1 })
  id: number;

  @ApiProperty({ example: '시즌 메뉴' })
  name: string;

  @ApiProperty({ example: 'seasonalMenu' })
  className?: string;

  @ApiProperty({ type: () => [Menu] })
  items: Menu[];

  constructor(id: number, name: string, className: string, menu: Menu[]) {
    this.id = id;
    this.name = name;
    this.className = className;
    this.items = menu;
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

  @ApiProperty({ type: () => [MenuOption] })
  option: MenuOption[];

  constructor(id: number, name: string, price: number, options: MenuOption[], info?: string, photoUrl?: string) {
    this.id = id;
    this.name = name;
    this.info = info;
    this.price = price;
    this.photoUrl = photoUrl;
    this.option = options;
  }
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

  @ApiProperty({ required: false, example: 'https://example.com/menu.jpg' })
  photoURL?: string;

  constructor(id: number, name: string, price: number, photoUrl: string) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.photoURL = photoUrl;
  }
}
