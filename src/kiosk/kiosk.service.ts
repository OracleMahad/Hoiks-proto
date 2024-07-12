import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { PrismaService } from '../prisma.service';
import { GetAllItemsResDto, Category, SubCategory, Menu, MenuOption, OptionInfo } from './dto/get-all-items-res.dto';

@Injectable()
export class KioskService {
  constructor(private prisma: PrismaService) {}

  create(createOrderDto: CreateOrderDto) {
    return {
      result : true
    };
  }

  // async findAllItems(): Promise<GetAllItemsResDto> {
  //   const allItems = await this.prisma.store.findFirst({
  //     include: {
  //       Category: {
  //         include: {
  //           SubCategory: {
  //             include: {
  //               MenuSearch: {
  //                 include: {
  //                   Menu: {
  //                     include: {
  //                       MenuOption: {
  //                         include: {
  //                           OptionInfo: true
  //                         }
  //                       }
  //                     },
  //                   },
  //                 },
  //               },
  //             },
  //           },
  //         }
  //       }
  //     }
  //   });

  //   return new GetAllItemsResDto(
  //     allItems.Category.map(
  //       e => new Category(
  //         e.id, 
  //         e.name,
  //         e.className,
  //         e.SubCategory.map(
  //           sc => new SubCategory(
  //             sc.id,
  //             sc.name,
  //             sc.className,
  //             sc.MenuSearch.map( 
  //               ms => new Menu(
  //                 ms.Menu.id,
  //                 ms.Menu.name,
  //                 ms.Menu.price,
  //                 ms.Menu.MenuOption.map(
  //                   (mo) => new MenuOption(
  //                     mo.id,
  //                     mo.name,
  //                     mo.OptionInfo
  //                   )
  //                 ),
  //                 ms.Menu.info,
  //                 ms.Menu.photoURL,
  //               )
  //             )
  //           )
  //         ))
  //     ))
  // }

  findAllItemsSample() {
    return {
      "topCategories": [
        {
          "id": 1,
          "name": "음료",
          "className": null,
          "subCategories": [
            {
              "id": 1,
              "name": "커피",
              "className": null,
              "items": [
                {
                  "id": 1,
                  "name": "아메리카노",
                  "info": "깔끔한 맛의 기본 커피",
                  "price": 3500,
                  "photoUrl": "https://image_url/americano.jpg",
                  "option": [
                    {
                      "id": 1,
                      "name": "사이즈",
                      "optionInfo": [
                        {
                          "id": 1,
                          "name": "Regular",
                          "price": 0,
                          "photoURL": null,
                          "optionId": 1
                        },
                        {
                          "id": 2,
                          "name": "Large",
                          "price": 500,
                          "photoURL": null,
                          "optionId": 1
                        }
                      ]
                    },
                    {
                      "id": 6,
                      "name": "HOT/ICE",
                      "optionInfo": [
                        {
                          "id": 11,
                          "name": "ICE",
                          "price": 0,
                          "photoURL": null,
                          "optionId": 6
                        },
                        {
                          "id": 12,
                          "name": "HOT",
                          "price": 0,
                          "photoURL": null,
                          "optionId": 6
                        }
                      ]
                    }
                  ]
                },
                {
                  "id": 2,
                  "name": "카페라떼",
                  "info": "부드러운 우유와 커피의 조화",
                  "price": 4000,
                  "photoUrl": "https://image_url/cafelatte.jpg",
                  "option": [
                    {
                      "id": 2,
                      "name": "사이즈",
                      "optionInfo": [
                        {
                          "id": 3,
                          "name": "Regular",
                          "price": 0,
                          "photoURL": null,
                          "optionId": 2
                        },
                        {
                          "id": 4,
                          "name": "Large",
                          "price": 500,
                          "photoURL": null,
                          "optionId": 2
                        }
                      ]
                    },
                    {
                      "id": 7,
                      "name": "HOT/ICE",
                      "optionInfo": [
                        {
                          "id": 13,
                          "name": "ICE",
                          "price": 0,
                          "photoURL": null,
                          "optionId": 7
                        },
                        {
                          "id": 14,
                          "name": "HOT",
                          "price": 0,
                          "photoURL": null,
                          "optionId": 7
                        }
                      ]
                    }
                  ]
                },
                {
                  "id": 3,
                  "name": "바닐라라떼",
                  "info": "달콤한 바닐라 향이 가득한 라떼",
                  "price": 4500,
                  "photoUrl": "https://image_url/vanillalatte.jpg",
                  "option": [
                    {
                      "id": 3,
                      "name": "사이즈",
                      "optionInfo": [
                        {
                          "id": 5,
                          "name": "Regular",
                          "price": 0,
                          "photoURL": null,
                          "optionId": 3
                        },
                        {
                          "id": 6,
                          "name": "Large",
                          "price": 500,
                          "photoURL": null,
                          "optionId": 3
                        }
                      ]
                    },
                    {
                      "id": 8,
                      "name": "HOT/ICE",
                      "optionInfo": [
                        {
                          "id": 15,
                          "name": "ICE",
                          "price": 0,
                          "photoURL": null,
                          "optionId": 8
                        },
                        {
                          "id": 16,
                          "name": "HOT",
                          "price": 0,
                          "photoURL": null,
                          "optionId": 8
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "id": 2,
              "name": "논커피",
              "className": null,
              "items": [
                {
                  "id": 4,
                  "name": "녹차라떼",
                  "info": "진한 녹차 맛을 느낄 수 있는 라떼",
                  "price": 4500,
                  "photoUrl": "https://image_url/greenTealatte.jpg",
                  "option": [
                    {
                      "id": 4,
                      "name": "사이즈",
                      "optionInfo": [
                        {
                          "id": 7,
                          "name": "Regular",
                          "price": 0,
                          "photoURL": null,
                          "optionId": 4
                        },
                        {
                          "id": 8,
                          "name": "Large",
                          "price": 500,
                          "photoURL": null,
                          "optionId": 4
                        }
                      ]
                    },
                    {
                      "id": 9,
                      "name": "HOT/ICE",
                      "optionInfo": [
                        {
                          "id": 17,
                          "name": "ICE",
                          "price": 0,
                          "photoURL": null,
                          "optionId": 9
                        },
                        {
                          "id": 18,
                          "name": "HOT",
                          "price": 0,
                          "photoURL": null,
                          "optionId": 9
                        }
                      ]
                    }
                  ]
                },
                {
                  "id": 5,
                  "name": "초콜릿라떼",
                  "info": "달콤하고 진한 초콜릿 맛",
                  "price": 5000,
                  "photoUrl": "https://image_url/chocolatelatte.jpg",
                  "option": [
                    {
                      "id": 5,
                      "name": "사이즈",
                      "optionInfo": [
                        {
                          "id": 9,
                          "name": "Regular",
                          "price": 0,
                          "photoURL": null,
                          "optionId": 5
                        },
                        {
                          "id": 10,
                          "name": "Large",
                          "price": 500,
                          "photoURL": null,
                          "optionId": 5
                        }
                      ]
                    },
                    {
                      "id": 10,
                      "name": "HOT/ICE",
                      "optionInfo": [
                        {
                          "id": 19,
                          "name": "ICE",
                          "price": 0,
                          "photoURL": null,
                          "optionId": 10
                        },
                        {
                          "id": 20,
                          "name": "HOT",
                          "price": 0,
                          "photoURL": null,
                          "optionId": 10
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "id": 3,
              "name": "에이드/주스",
              "className": null,
              "items": [
                {
                  "id": 6,
                  "name": "자몽에이드",
                  "info": "상큼한 자몽 맛 에이드",
                  "price": 5500,
                  "photoUrl": "https://image_url/grapefruitade.jpg",
                  "option": []
                },
                {
                  "id": 7,
                  "name": "레몬에이드",
                  "info": "시원하고 상큼한 레몬 에이드",
                  "price": 5500,
                  "photoUrl": "https://image_url/lemonade.jpg",
                  "option": []
                },
                {
                  "id": 8,
                  "name": "딸기주스",
                  "info": "신선한 딸기로 만든 주스",
                  "price": 6000,
                  "photoUrl": "https://image_url/strawberryjuice.jpg",
                  "option": []
                }
              ]
            }
          ]
        },
        {
          "id": 2,
          "name": "디저트",
          "className": null,
          "subCategories": [
            {
              "id": 4,
              "name": "케이크",
              "className": null,
              "items": [
                {
                  "id": 9,
                  "name": "티라미수 케이크",
                  "info": "부드러운 마스카포네 치즈와 커피 향",
                  "price": 5500,
                  "photoUrl": "https://image_url/tiramisu.jpg",
                  "option": []
                },
                {
                  "id": 10,
                  "name": "치즈케이크",
                  "info": "진한 치즈 맛을 느낄 수 있는 케이크",
                  "price": 5000,
                  "photoUrl": "https://image_url/cheesecake.jpg",
                  "option": []
                }
              ]
            },
            {
              "id": 5,
              "name": "베이커리",
              "className": null,
              "items": [
                {
                  "id": 11,
                  "name": "크루아상",
                  "info": "바삭하고 고소한 프랑스 빵",
                  "price": 3000,
                  "photoUrl": "https://image_url/croissant.jpg",
                  "option": []
                }
              ]
            }
          ]
        },
        {
          "id": 3,
          "name": "푸드",
          "className": null,
          "subCategories": [
            {
              "id": 6,
              "name": "샌드위치",
              "className": null,
              "items": [
                {
                  "id": 12,
                  "name": "햄치즈 샌드위치",
                  "info": "신선한 채소와 햄, 치즈가 어우러진 샌드위치",
                  "price": 6500,
                  "photoUrl": "https://image_url/hamcheeseSandwich.jpg",
                  "option": []
                }
              ]
            },
            {
              "id": 7,
              "name": "샐러드",
              "className": null,
              "items": [
                {
                  "id": 13,
                  "name": "닭가슴살 샐러드",
                  "info": "건강한 닭가슴살과 신선한 채소 샐러드",
                  "price": 7000,
                  "photoUrl": "https://image_url/chickensalad.jpg",
                  "option": []
                }
              ]
            }
          ]
        }
      ]
    }
  }
}
