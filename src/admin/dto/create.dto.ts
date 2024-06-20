import { ApiProperty } from '@nestjs/swagger';

export class CreateCategoryDto {
  @ApiProperty()
  name: string;

  @ApiProperty()
  storeId: number; // Optional for now; we'll handle the association
}

export class CreateMenuDto {
  @ApiProperty()
  name: string;

  @ApiProperty()
  info: string;

  @ApiProperty()
  price: number;

  @ApiProperty()
  photoUrl: string;
}

export class CreateOptionDto {
  @ApiProperty()
  name: string;

  @ApiProperty()
  menuId: number; // Associate the Option with a Menu
}