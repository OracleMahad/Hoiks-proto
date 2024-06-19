import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { PrismaService } from '../prisma.service';
import { GetAllItemsResDto, Category } from './dto/get-all-items-res.dto';

@Injectable()
export class KioskService {
  constructor(private prisma: PrismaService) {}

  create(createOrderDto: CreateOrderDto) {
    return 'This action adds a new order info test';
  }

  async findAllItems(): Promise<GetAllItemsResDto> {
    const allItems = await this.prisma.store.findFirst({
      include: {
        category: {
          include: {
            meneSearch: {
              include: {
                menu: {
                  include: {
                    option: {
                      include: {
                        optionInfo: true,
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
      allItems.id, 
      allItems.name, 
      allItems.masterUserId, 
      allItems.category.map(
        e => new Category(e.id, e.name, e.meneSearch.map(ms => ms.menu))
      ))
  }

  findAllItemsSample() {
    return {
      "id": 1,
      "name": "카페 아로마",
      "masterUserId": 1,
      "category": [
        {
          "id": 1,
          "name": "커피",
          "menu": [
            {
              "id": 1,
              "name": "아메리카노",
              "info": "진한 에스프레소와 물의 조화",
              "price": 3500,
              "photoUrl": "https://example.com/americano.jpg",
              "option": [
                {
                  "id": 1,
                  "name": "샷 추가",
                  "menuId": 1,
                  "optionInfo": [
                    {
                      "id": 1,
                      "optionId": 1,
                      "name": "1샷"
                    },
                    {
                      "id": 2,
                      "optionId": 1,
                      "name": "2샷"
                    }
                  ]
                }
              ]
            },
            {
              "id": 2,
              "name": "카페 라떼",
              "info": "부드러운 우유와 에스프레소의 만남",
              "price": 4000,
              "photoUrl": "https://example.com/latte.jpg",
              "option": []
            },
            {
              "id": 3,
              "name": "카푸치노",
              "info": "풍부한 우유 거품과 시나몬 파우더",
              "price": 4500,
              "photoUrl": "https://example.com/cappuccino.jpg",
              "option": [
                {
                  "id": 2,
                  "name": "시럽 추가",
                  "menuId": 3,
                  "optionInfo": [
                    {
                      "id": 3,
                      "optionId": 2,
                      "name": "바닐라 시럽"
                    },
                    {
                      "id": 4,
                      "optionId": 2,
                      "name": "카라멜 시럽"
                    }
                  ]
                }
              ]
            },
            {
              "id": 4,
              "name": "카라멜 마끼아또",
              "info": "달콤한 카라멜과 에스프레소의 조화",
              "price": 5000,
              "photoUrl": "https://example.com/macchiato.jpg",
              "option": [
                {
                  "id": 3,
                  "name": "휘핑크림 추가",
                  "menuId": 4,
                  "optionInfo": [
                    {
                      "id": 5,
                      "optionId": 3,
                      "name": "일반 휘핑크림"
                    },
                    {
                      "id": 6,
                      "optionId": 3,
                      "name": "에스프레소 휘핑크림"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "id": 2,
          "name": "콜드 브루",
          "menu": [
            {
              "id": 5,
              "name": "콜드 브루",
              "info": "차가운 물로 우려낸 깊은 풍미",
              "price": 4500,
              "photoUrl": "https://example.com/coldbrew.jpg",
              "option": []
            },
            {
              "id": 6,
              "name": "콜드 브루 라떼",
              "info": "부드러운 우유와 콜드 브루의 만남",
              "price": 5000,
              "photoUrl": "https://example.com/coldbrewlatte.jpg",
              "option": []
            }
          ]
        },
        {
          "id": 3,
          "name": "라떼",
          "menu": [
            {
              "id": 14,
              "name": "바닐라 라떼",
              "info": "달콤한 바닐라 향과 부드러운 우유",
              "price": 4500,
              "photoUrl": "https://example.com/vanillalatte.jpg",
              "option": []
            }
          ]
        },
        {
          "id": 4,
          "name": "프라푸치노",
          "menu": [
            {
              "id": 7,
              "name": "자바 칩 프라푸치노",
              "info": "달콤한 자바 칩과 커피의 조화",
              "price": 5500,
              "photoUrl": "https://example.com/javachip.jpg",
              "option": []
            },
            {
              "id": 8,
              "name": "녹차 프라푸치노",
              "info": "진한 녹차와 달콤한 휘핑크림",
              "price": 5500,
              "photoUrl": "https://example.com/greentea.jpg",
              "option": []
            }
          ]
        },
        {
          "id": 5,
          "name": "티",
          "menu": [
            {
              "id": 9,
              "name": "페퍼민트 티",
              "info": "상쾌한 페퍼민트 향",
              "price": 3000,
              "photoUrl": "https://example.com/peppermint.jpg",
              "option": []
            },
            {
              "id": 10,
              "name": "캐모마일 티",
              "info": "은은한 캐모마일 향",
              "price": 3000,
              "photoUrl": "https://example.com/chamomile.jpg",
              "option": []
            }
          ]
        },
        {
          "id": 6,
          "name": "디저트",
          "menu": [
            {
              "id": 11,
              "name": "초콜릿 케이크",
              "info": "진한 초콜릿 맛",
              "price": 4500,
              "photoUrl": "https://example.com/chococake.jpg",
              "option": []
            },
            {
              "id": 12,
              "name": "티라미수",
              "info": "부드러운 마스카포네 치즈와 커피 향",
              "price": 5000,
              "photoUrl": "https://example.com/tiramisu.jpg",
              "option": []
            }
          ]
        }
      ]
    }
  }
}
