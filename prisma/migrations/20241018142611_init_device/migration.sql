-- AlterTable
ALTER TABLE `User` ADD COLUMN `createdDate` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `updatedDate` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);

-- CreateTable
CREATE TABLE `StoreInfo` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `totalAmount` INTEGER NOT NULL,
    `storeId` INTEGER NOT NULL,

    INDEX `storeId`(`storeId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `OrderInfo` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `storeId` INTEGER NOT NULL,
    `details` JSON NOT NULL,
    `amount` INTEGER NOT NULL,
    `orderDate` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `createdDate` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `paymentMethod` ENUM('CARD', 'CASH') NOT NULL,
    `deviceId` VARCHAR(20) NOT NULL,

    INDEX `storeId`(`storeId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Device` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `code` VARCHAR(40) NOT NULL,
    `name` VARCHAR(30) NULL,
    `storeId` INTEGER NOT NULL,
    `createdDate` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedDate` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `Device_code_key`(`code`),
    INDEX `storeId`(`storeId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `StoreInfo` ADD CONSTRAINT `StoreInfo_ibfk_1` FOREIGN KEY (`storeId`) REFERENCES `Store`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `OrderInfo` ADD CONSTRAINT `OrderInfo_ibfk_1` FOREIGN KEY (`storeId`) REFERENCES `Store`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `Device` ADD CONSTRAINT `Device_ibfk_1` FOREIGN KEY (`storeId`) REFERENCES `Store`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;
