import { ApiProperty } from '@nestjs/swagger';

export class CreateCategoryDto {
  @ApiProperty()
  name: string;

  @ApiProperty()
  className?: string;

  @ApiProperty({example : 1})
  storeId: number;
}

export class UpdateCategoryDto {
  @ApiProperty()
  categoryId: number;

  @ApiProperty()
  name: string;

  @ApiProperty()
  className?: string;

  // @ApiProperty()
  // storeId: number;
}

export class DeleteCategoryDto {
  @ApiProperty()
  categoryId: number;

  // @ApiProperty()
  // storeId: number;
}

export class CreateSubCategoryDto {
  @ApiProperty()
  name: string;

  @ApiProperty()
  className?: string;

  @ApiProperty()
  categoryId: number;
}

export class UpdateSubCategoryDto {
  @ApiProperty()
  subCategoryId: number;

  @ApiProperty()
  name?: string;

  @ApiProperty()
  className?: string;

  @ApiProperty()
  categoryId?: number;
}

export class DeleteSubCategoryDto {
  @ApiProperty()
  subCategoryId: number;
}

export class CreateMenuDto {
  @ApiProperty()
  name: string;

  @ApiProperty()
  info: string;

  @ApiProperty()
  price: number;

  @ApiProperty()
  photoURL: string;
  
  @ApiProperty()
  subCategoryId: number;
}

export class UpdateMenuDto {
  @ApiProperty()
  menuId: number;

  @ApiProperty()
  name: string;

  @ApiProperty()
  info: string;

  @ApiProperty()
  price: number;

  @ApiProperty()
  photoURL: string;
  
  @ApiProperty()
  subCategoryId: number;
}

export class DeleteMenuDto {
  @ApiProperty()
  menuId: number;
}

export class CreateOptionDto {
  @ApiProperty()
  name: string;

  @ApiProperty()
  menuId: number;
}

export class UpdateOptionDto {
  @ApiProperty()
  optionId: number;

  @ApiProperty()
  name: string;
}

export class DeleteOptionDto {
  @ApiProperty()
  optionId: number;
}

export class CreateOptionInfoDto {
  @ApiProperty()
  optionId: number;

  @ApiProperty()
  name: string;

  @ApiProperty()
  price: number;

  @ApiProperty()
  photoURL: string;
}

export class UpdateOptionInfoDto {
  @ApiProperty()
  optionInfoId: number;

  @ApiProperty()
  name: string;

  @ApiProperty()
  price: number;

  @ApiProperty()
  photoURL: string;
}

export class DeleteOptionInfoDto {
  @ApiProperty()
  optionInfoId: number;
}

export class GetCategoriesQueryDto {
  @ApiProperty({description: "안보낼시 본인 매장. 현재는 안보내도 됨", required: false})
  storeId?: string;
}

export class GetSubCategoriesQueryDto {
  @ApiProperty()
  categoryId: string;
}

export class GetMenusQueryDto {
  @ApiProperty()
  subCategoryId: string;
}