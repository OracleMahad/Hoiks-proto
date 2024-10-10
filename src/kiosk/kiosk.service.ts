import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { PrismaService } from '../prisma/prisma.service';
import { GetAllItemsResDto, Category, SubCategory, Menu, MenuOption, OptionInfo } from './dto/get-all-items-res.dto';

@Injectable()
export class KioskService {
  constructor(private prisma: PrismaService) {}

  create(createOrderDto: CreateOrderDto) {
    return {
      result : true
    };
  }

  async findAllItems(): Promise<GetAllItemsResDto> {
    const allItems = await this.prisma.store.findFirst({
      include: {
        Category: {
          include: {
            SubCategory: {
              include: {
                MenuSearch: {
                  include: {
                    Menu: {
                      include: {
                        MenuOption: {
                          include: {
                            OptionInfo: true
                          }
                        }
                      },
                    },
                  },
                },
              },
            },
          }
        }
      }
    });

    return new GetAllItemsResDto(
      allItems.Category.map(
        e => new Category(
          e.id, 
          e.name,
          e.className,
          e.SubCategory.map(
            sc => new SubCategory(
              sc.id,
              sc.name,
              sc.className,
              sc.MenuSearch.map( 
                ms => new Menu(
                  ms.Menu.id,
                  ms.Menu.name,
                  ms.Menu.price,
                  ms.Menu.MenuOption.map(
                    (mo) => new MenuOption(
                      mo.id,
                      mo.name,
                      mo.OptionInfo
                    )
                  ),
                  ms.Menu.info,
                  ms.Menu.photoURL,
                )
              )
            )
          ))
      ))
  }

  findAllItemsSample() {
    return {
      "topCategories": [
        {
          "id": 1,
          "name": "추천메뉴",
          "className": null,
          "subCategories": [
            {
              "id": 1,
              "name": "시즌 메뉴",
              "className": null,
              "items": [
                {
                  "id": 15,
                  "name": "멜론 소다",
                  "info": "달콤한 멜론 맛 소다",
                  "price": 4500,
                  "photoUrl": "melonsoda.jpg",
                  "option": []
                },
                {
                  "id": 16,
                  "name": "핑크 크림 라떼",
                  "info": "핑크빛 비주얼의 부드러운 라떼",
                  "price": 5000,
                  "photoUrl": "pinkcremalatte.jpg",
                  "option": [
                    {
                      "id": 12,
                      "name": "사이즈",
                      "optionInfo": [
                        {
                          "id": 13,
                          "name": "Regular",
                          "price": 0,
                          "photoURL": null,
                          "optionId": 12
                        },
                        {
                          "id": 14,
                          "name": "Large",
                          "price": 500,
                          "photoURL": null,
                          "optionId": 12
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "id": 2,
              "name": "할인&인기",
              "className": null,
              "items": [
                {
                  "id": 1,
                  "name": "아메리카노",
                  "info": "깔끔한 맛의 기본 커피",
                  "price": 3500,
                  "photoUrl": "americano.jpg",
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
                      "id": 2,
                      "name": "HOT/ICE",
                      "optionInfo": [
                        {
                          "id": 21,
                          "name": "HOT",
                          "price": 0,
                          "photoURL": null,
                          "optionId": 2
                        },
                        {
                          "id": 22,
                          "name": "ICE",
                          "price": 0,
                          "photoURL": null,
                          "optionId": 2
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
                  "photoUrl": "cafelatte.jpg",
                  "option": [
                    {
                      "id": 3,
                      "name": "사이즈",
                      "optionInfo": [
                        {
                          "id": 3,
                          "name": "Regular",
                          "price": 0,
                          "photoURL": null,
                          "optionId": 3
                        },
                        {
                          "id": 4,
                          "name": "Large",
                          "price": 500,
                          "photoURL": null,
                          "optionId": 3
                        }
                      ]
                    },
                    {
                      "id": 4,
                      "name": "HOT/ICE",
                      "optionInfo": [
                        {
                          "id": 23,
                          "name": "HOT",
                          "price": 0,
                          "photoURL": null,
                          "optionId": 4
                        },
                        {
                          "id": 24,
                          "name": "ICE",
                          "price": 0,
                          "photoURL": null,
                          "optionId": 4
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "id": 2,
          "name": "커피",
          "className": null,
          "subCategories": [
            {
              "id": 3,
              "name": "에스프레소",
              "className": null,
              "items": [
                {
                  "id": 1,
                  "name": "아메리카노",
                  "info": "깔끔한 맛의 기본 커피",
                  "price": 3500,
                  "photoUrl": "americano.jpg",
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
                      "id": 2,
                      "name": "HOT/ICE",
                      "optionInfo": [
                        {
                          "id": 21,
                          "name": "HOT",
                          "price": 0,
                          "photoURL": null,
                          "optionId": 2
                        },
                        {
                          "id": 22,
                          "name": "ICE",
                          "price": 0,
                          "photoURL": null,
                          "optionId": 2
                        }
                      ]
                    }
                  ]
                },
                {
                  "id": 19,
                  "name": "에스프레소",
                  "info": "강렬한 커피의 향미",
                  "price": 3000,
                  "photoUrl": "espresso.jpg",
                  "option": []
                },
                {
                  "id": 22,
                  "name": "헤이즐넛 아메리카노",
                  "info": "고소한 헤이즐넛 향의 아메리카노",
                  "price": 4000,
                  "photoUrl": "hazelnutamericano.jpg",
                  "option": []
                }
              ]
            },
            {
              "id": 4,
              "name": "라떼",
              "className": null,
              "items": [
                {
                  "id": 2,
                  "name": "카페라떼",
                  "info": "부드러운 우유와 커피의 조화",
                  "price": 4000,
                  "photoUrl": "cafelatte.jpg",
                  "option": [
                    {
                      "id": 3,
                      "name": "사이즈",
                      "optionInfo": [
                        {
                          "id": 3,
                          "name": "Regular",
                          "price": 0,
                          "photoURL": null,
                          "optionId": 3
                        },
                        {
                          "id": 4,
                          "name": "Large",
                          "price": 500,
                          "photoURL": null,
                          "optionId": 3
                        }
                      ]
                    },
                    {
                      "id": 4,
                      "name": "HOT/ICE",
                      "optionInfo": [
                        {
                          "id": 23,
                          "name": "HOT",
                          "price": 0,
                          "photoURL": null,
                          "optionId": 4
                        },
                        {
                          "id": 24,
                          "name": "ICE",
                          "price": 0,
                          "photoURL": null,
                          "optionId": 4
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
                  "photoUrl": "vanillalatte.jpg",
                  "option": [
                    {
                      "id": 5,
                      "name": "사이즈",
                      "optionInfo": [
                        {
                          "id": 5,
                          "name": "Regular",
                          "price": 0,
                          "photoURL": null,
                          "optionId": 5
                        },
                        {
                          "id": 6,
                          "name": "Large",
                          "price": 500,
                          "photoURL": null,
                          "optionId": 5
                        }
                      ]
                    },
                    {
                      "id": 6,
                      "name": "HOT/ICE",
                      "optionInfo": [
                        {
                          "id": 25,
                          "name": "HOT",
                          "price": 0,
                          "photoURL": null,
                          "optionId": 6
                        },
                        {
                          "id": 26,
                          "name": "ICE",
                          "price": 0,
                          "photoURL": null,
                          "optionId": 6
                        }
                      ]
                    }
                  ]
                },
                {
                  "id": 4,
                  "name": "녹차라떼",
                  "info": "진한 녹차 맛을 느낄 수 있는 라떼",
                  "price": 4500,
                  "photoUrl": "greenTealatte.jpg",
                  "option": [
                    {
                      "id": 7,
                      "name": "사이즈",
                      "optionInfo": [
                        {
                          "id": 7,
                          "name": "Regular",
                          "price": 0,
                          "photoURL": null,
                          "optionId": 7
                        },
                        {
                          "id": 8,
                          "name": "Large",
                          "price": 500,
                          "photoURL": null,
                          "optionId": 7
                        }
                      ]
                    },
                    {
                      "id": 8,
                      "name": "HOT/ICE",
                      "optionInfo": [
                        {
                          "id": 27,
                          "name": "HOT",
                          "price": 0,
                          "photoURL": null,
                          "optionId": 8
                        },
                        {
                          "id": 28,
                          "name": "ICE",
                          "price": 0,
                          "photoURL": null,
                          "optionId": 8
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
                  "photoUrl": "chocolatelatte.jpg",
                  "option": [
                    {
                      "id": 9,
                      "name": "사이즈",
                      "optionInfo": [
                        {
                          "id": 9,
                          "name": "Regular",
                          "price": 0,
                          "photoURL": null,
                          "optionId": 9
                        },
                        {
                          "id": 10,
                          "name": "Large",
                          "price": 500,
                          "photoURL": null,
                          "optionId": 9
                        }
                      ]
                    },
                    {
                      "id": 10,
                      "name": "HOT/ICE",
                      "optionInfo": [
                        {
                          "id": 29,
                          "name": "HOT",
                          "price": 0,
                          "photoURL": null,
                          "optionId": 10
                        },
                        {
                          "id": 30,
                          "name": "ICE",
                          "price": 0,
                          "photoURL": null,
                          "optionId": 10
                        }
                      ]
                    }
                  ]
                },
                {
                  "id": 16,
                  "name": "핑크 크림 라떼",
                  "info": "핑크빛 비주얼의 부드러운 라떼",
                  "price": 5000,
                  "photoUrl": "pinkcremalatte.jpg",
                  "option": [
                    {
                      "id": 12,
                      "name": "사이즈",
                      "optionInfo": [
                        {
                          "id": 13,
                          "name": "Regular",
                          "price": 0,
                          "photoURL": null,
                          "optionId": 12
                        },
                        {
                          "id": 14,
                          "name": "Large",
                          "price": 500,
                          "photoURL": null,
                          "optionId": 12
                        }
                      ]
                    }
                  ]
                },
                {
                  "id": 20,
                  "name": "카페 모카",
                  "info": "달콤한 초콜릿과 커피의 조화",
                  "price": 5000,
                  "photoUrl": "cafemocha.jpg",
                  "option": []
                },
                {
                  "id": 21,
                  "name": "카푸치노",
                  "info": "부드러운 우유 거품과 커피",
                  "price": 4500,
                  "photoUrl": "cappuccino.jpg",
                  "option": []
                },
                {
                  "id": 24,
                  "name": "아인슈페너",
                  "info": "크림과 커피의 환상적인 조합",
                  "price": 5500,
                  "photoUrl": "einspanner.jpg",
                  "option": [
                    {
                      "id": 15,
                      "name": "사이즈",
                      "optionInfo": [
                        {
                          "id": 17,
                          "name": "Regular",
                          "price": 0,
                          "photoURL": null,
                          "optionId": 15
                        },
                        {
                          "id": 18,
                          "name": "Large",
                          "price": 500,
                          "photoURL": null,
                          "optionId": 15
                        }
                      ]
                    },
                    {
                      "id": 16,
                      "name": "HOT/ICE",
                      "optionInfo": [
                        {
                          "id": 33,
                          "name": "HOT",
                          "price": 0,
                          "photoURL": null,
                          "optionId": 16
                        },
                        {
                          "id": 34,
                          "name": "ICE",
                          "price": 0,
                          "photoURL": null,
                          "optionId": 16
                        }
                      ]
                    }
                  ]
                },
                {
                  "id": 25,
                  "name": "카라멜 마끼아또",
                  "info": "달콤한 카라멜 소스와 커피",
                  "price": 5000,
                  "photoUrl": "caramelmacchiato.jpg",
                  "option": [
                    {
                      "id": 17,
                      "name": "사이즈",
                      "optionInfo": [
                        {
                          "id": 19,
                          "name": "Regular",
                          "price": 0,
                          "photoURL": null,
                          "optionId": 17
                        },
                        {
                          "id": 20,
                          "name": "Large",
                          "price": 500,
                          "photoURL": null,
                          "optionId": 17
                        }
                      ]
                    },
                    {
                      "id": 18,
                      "name": "HOT/ICE",
                      "optionInfo": [
                        {
                          "id": 35,
                          "name": "HOT",
                          "price": 0,
                          "photoURL": null,
                          "optionId": 18
                        },
                        {
                          "id": 36,
                          "name": "ICE",
                          "price": 0,
                          "photoURL": null,
                          "optionId": 18
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "id": 5,
              "name": "콜드브루",
              "className": null,
              "items": [
                {
                  "id": 17,
                  "name": "콜드브루",
                  "info": "진하고 깔끔한 콜드브루",
                  "price": 4500,
                  "photoUrl": "coldbrew.jpg",
                  "option": [
                    {
                      "id": 11,
                      "name": "사이즈",
                      "optionInfo": [
                        {
                          "id": 11,
                          "name": "Regular",
                          "price": 0,
                          "photoURL": null,
                          "optionId": 11
                        },
                        {
                          "id": 12,
                          "name": "Large",
                          "price": 500,
                          "photoURL": null,
                          "optionId": 11
                        }
                      ]
                    }
                  ]
                },
                {
                  "id": 26,
                  "name": "콜드브루 라떼",
                  "info": "콜드브루와 우유의 부드러운 조화",
                  "price": 5000,
                  "photoUrl": "coldbrewlatte.jpg",
                  "option": [
                    {
                      "id": 19,
                      "name": "사이즈",
                      "optionInfo": []
                    }
                  ]
                },
                {
                  "id": 27,
                  "name": "바닐라 콜드브루",
                  "info": "달콤한 바닐라 향의 콜드브루",
                  "price": 5000,
                  "photoUrl": "vanillacoldbrew.jpg",
                  "option": [
                    {
                      "id": 20,
                      "name": "사이즈",
                      "optionInfo": []
                    }
                  ]
                }
              ]
            },
            {
              "id": 6,
              "name": "디카페인",
              "className": null,
              "items": [
                {
                  "id": 28,
                  "name": "디카페인 아메리카노",
                  "info": "카페인 부담없이 즐기는 아메리카노",
                  "price": 3500,
                  "photoUrl": "decafaAmericano.jpg",
                  "option": [
                    {
                      "id": 27,
                      "name": "사이즈",
                      "optionInfo": []
                    }
                  ]
                },
                {
                  "id": 29,
                  "name": "디카페인 에스프레소",
                  "info": "카페인 부담없이 즐기는 에스프레소",
                  "price": 3000,
                  "photoUrl": "decafaespresso.jpg",
                  "option": [
                    {
                      "id": 28,
                      "name": "사이즈",
                      "optionInfo": []
                    }
                  ]
                },
                {
                  "id": 30,
                  "name": "디카페인 카페 모카",
                  "info": "카페인 부담없이 즐기는 카페 모카",
                  "price": 5000,
                  "photoUrl": "decafacafemocha.jpg",
                  "option": [
                    {
                      "id": 29,
                      "name": "사이즈",
                      "optionInfo": []
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "id": 3,
          "name": "음료",
          "className": null,
          "subCategories": [
            {
              "id": 7,
              "name": "에이드",
              "className": null,
              "items": [
                {
                  "id": 6,
                  "name": "자몽에이드",
                  "info": "상큼한 자몽 맛 에이드",
                  "price": 5500,
                  "photoUrl": "grapefruitade.jpg",
                  "option": [
                    {
                      "id": 24,
                      "name": "사이즈",
                      "optionInfo": []
                    }
                  ]
                },
                {
                  "id": 7,
                  "name": "레몬에이드",
                  "info": "시원하고 상큼한 레몬 에이드",
                  "price": 5500,
                  "photoUrl": "lemonade.jpg",
                  "option": [
                    {
                      "id": 25,
                      "name": "사이즈",
                      "optionInfo": []
                    }
                  ]
                },
                {
                  "id": 18,
                  "name": "핑크 자몽 에이드",
                  "info": "핑크빛 자몽의 상큼함",
                  "price": 5500,
                  "photoUrl": "pinkgrapefruitade.jpg",
                  "option": []
                }
              ]
            },
            {
              "id": 8,
              "name": "프라페",
              "className": null,
              "items": [
                {
                  "id": 15,
                  "name": "멜론 소다",
                  "info": "달콤한 멜론 맛 소다",
                  "price": 4500,
                  "photoUrl": "melonsoda.jpg",
                  "option": []
                },
                {
                  "id": 31,
                  "name": "초코 프라페",
                  "info": "달콤한 초콜릿 맛 프라페",
                  "price": 5500,
                  "photoUrl": "chocofrappe.jpg",
                  "option": [
                    {
                      "id": 30,
                      "name": "사이즈",
                      "optionInfo": []
                    }
                  ]
                },
                {
                  "id": 32,
                  "name": "딸기 쿠키 프라페",
                  "info": "상큼한 딸기와 쿠키가 듬뿍",
                  "price": 6000,
                  "photoUrl": "strawberrycookiefrappe.jpg",
                  "option": [
                    {
                      "id": 31,
                      "name": "사이즈",
                      "optionInfo": []
                    }
                  ]
                }
              ]
            },
            {
              "id": 9,
              "name": "스무디&주스",
              "className": null,
              "items": [
                {
                  "id": 8,
                  "name": "딸기주스",
                  "info": "신선한 딸기로 만든 주스",
                  "price": 6000,
                  "photoUrl": "strawberryjuice.jpg",
                  "option": [
                    {
                      "id": 26,
                      "name": "사이즈",
                      "optionInfo": []
                    }
                  ]
                },
                {
                  "id": 33,
                  "name": "수박주스",
                  "info": "시원하고 달콤한 수박주스",
                  "price": 5000,
                  "photoUrl": "watermelonjuice.jpg",
                  "option": [
                    {
                      "id": 32,
                      "name": "사이즈",
                      "optionInfo": []
                    }
                  ]
                }
              ]
            },
            {
              "id": 10,
              "name": "라뗴/초콜릿",
              "className": null,
              "items": [
                {
                  "id": 34,
                  "name": "아이스티",
                  "info": "깔끔한 맛의 아이스티",
                  "price": 3500,
                  "photoUrl": "icetea.jpg",
                  "option": []
                },
                {
                  "id": 35,
                  "name": "녹차",
                  "info": "진한 녹차",
                  "price": 3000,
                  "photoUrl": "greentea.jpg",
                  "option": [
                    {
                      "id": 21,
                      "name": "HOT/ICE",
                      "optionInfo": [
                        {
                          "id": 37,
                          "name": "HOT",
                          "price": 0,
                          "photoURL": null,
                          "optionId": 21
                        },
                        {
                          "id": 38,
                          "name": "ICE",
                          "price": 0,
                          "photoURL": null,
                          "optionId": 21
                        }
                      ]
                    }
                  ]
                },
                {
                  "id": 36,
                  "name": "얼그레이",
                  "info": "은은한 향의 얼그레이",
                  "price": 3500,
                  "photoUrl": "earlgrey.jpg",
                  "option": [
                    {
                      "id": 22,
                      "name": "HOT/ICE",
                      "optionInfo": [
                        {
                          "id": 39,
                          "name": "HOT",
                          "price": 0,
                          "photoURL": null,
                          "optionId": 22
                        },
                        {
                          "id": 40,
                          "name": "ICE",
                          "price": 0,
                          "photoURL": null,
                          "optionId": 22
                        }
                      ]
                    }
                  ]
                },
                {
                  "id": 37,
                  "name": "페퍼민트",
                  "info": "상쾌한 페퍼민트",
                  "price": 3500,
                  "photoUrl": "peppermint.jpg",
                  "option": [
                    {
                      "id": 23,
                      "name": "HOT/ICE",
                      "optionInfo": [
                        {
                          "id": 41,
                          "name": "HOT",
                          "price": 0,
                          "photoURL": null,
                          "optionId": 23
                        },
                        {
                          "id": 42,
                          "name": "ICE",
                          "price": 0,
                          "photoURL": null,
                          "optionId": 23
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "id": 11,
              "name": "차",
              "className": null,
              "items": [
                {
                  "id": 13,
                  "name": "닭가슴살 샐러드",
                  "info": "건강한 닭가슴살과 신선한 채소 샐러드",
                  "price": 7000,
                  "photoUrl": "chickensalad.jpg",
                  "option": []
                },
                {
                  "id": 14,
                  "name": "레몬 샤베트",
                  "info": "상큼한 레몬 맛 샤베트",
                  "price": 4000,
                  "photoUrl": "lemonsorbet.jpg",
                  "option": []
                }
              ]
            }
          ]
        },
        {
          "id": 4,
          "name": "음식",
          "className": null,
          "subCategories": [
            {
              "id": 12,
              "name": "디저트",
              "className": null,
              "items": [
                {
                  "id": 11,
                  "name": "크루아상",
                  "info": "바삭하고 고소한 프랑스 빵",
                  "price": 3000,
                  "photoUrl": "croissant.jpg",
                  "option": []
                },
                {
                  "id": 12,
                  "name": "햄치즈 샌드위치",
                  "info": "신선한 채소와 햄, 치즈가 어우러진 샌드위치",
                  "price": 6500,
                  "photoUrl": "hamcheeseSandwich.jpg",
                  "option": []
                }
              ]
            },
            {
              "id": 13,
              "name": "베이커리",
              "className": null,
              "items": [
                {
                  "id": 9,
                  "name": "티라미수 케이크",
                  "info": "부드러운 마스카포네 치즈와 커피 향",
                  "price": 5500,
                  "photoUrl": "tiramisu.jpg",
                  "option": []
                },
                {
                  "id": 10,
                  "name": "치즈케이크",
                  "info": "진한 치즈 맛을 느낄 수 있는 케이크",
                  "price": 5000,
                  "photoUrl": "cheesecake.jpg",
                  "option": []
                }
              ]
            },
            {
              "id": 14,
              "name": "케이크",
              "className": null,
              "items": []
            }
          ]
        },
        {
          "id": 5,
          "name": "MD",
          "className": null,
          "subCategories": [
            {
              "id": 15,
              "name": "커피",
              "className": null,
              "items": []
            },
            {
              "id": 16,
              "name": "차",
              "className": null,
              "items": []
            },
            {
              "id": 17,
              "name": "텀블러/컵",
              "className": null,
              "items": []
            }
          ]
        }
      ]
    }
  }
}