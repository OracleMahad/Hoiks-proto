import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function seedTestData() {
  try {
    // Users 생성
    const users = [];
    for (let i = 0; i < 10; i++) {
      users.push(
        prisma.user.create({
          data: {
            email: `user${i}@example.com`,
            password: `password${i}`,
            name: `User ${i + 1}`,
            type: 'regular'
          }
        })
      );
    }
    await Promise.all(users);

    // Stores 생성
    const stores = [];
    for (let i = 0; i < 10; i++) {
      stores.push(
        prisma.store.create({
          data: {
            name: `Store ${i + 1}`,
            masterUserId: i + 1
          }
        })
      );
    }
    await Promise.all(stores);

    // Categories 생성
    const categories = [];
    for (let i = 0; i < 10; i++) {
      categories.push(
        prisma.category.create({
          data: {
            name: `Category ${i + 1}`,
            storeId: i + 1
          }
        })
      );
    }
    await Promise.all(categories);

    // 나머지 테이블에 대한 데이터 생성도 이와 같은 방식으로 진행합니다.

    console.log('테스트 데이터 생성 완료');
  } catch (error) {
    console.error('테스트 데이터 생성 중 오류 발생:', error);
  } finally {
    await prisma.$disconnect();
  }
}

seedTestData();