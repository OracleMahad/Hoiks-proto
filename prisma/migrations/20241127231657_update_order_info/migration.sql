-- DropForeignKey
ALTER TABLE `Category` DROP FOREIGN KEY `Category_ibfk_1`;

-- DropForeignKey
ALTER TABLE `MenuOption` DROP FOREIGN KEY `MenuOption_ibfk_1`;

-- DropForeignKey
ALTER TABLE `MenuSearch` DROP FOREIGN KEY `MenuSearch_ibfk_1`;

-- DropForeignKey
ALTER TABLE `MenuSearch` DROP FOREIGN KEY `MenuSearch_ibfk_2`;

-- DropForeignKey
ALTER TABLE `OptionInfo` DROP FOREIGN KEY `OptionInfo_ibfk_1`;

-- DropForeignKey
ALTER TABLE `StoreInfo` DROP FOREIGN KEY `StoreInfo_ibfk_1`;

-- DropForeignKey
ALTER TABLE `SubCategory` DROP FOREIGN KEY `SubCategory_ibfk_1`;

-- AlterTable
ALTER TABLE `OrderInfo` ADD COLUMN `age` VARCHAR(10) NOT NULL DEFAULT '',
    ADD COLUMN `gender` VARCHAR(10) NOT NULL DEFAULT '',
    ADD COLUMN `position` VARCHAR(10) NOT NULL DEFAULT '';

-- AlterTable
ALTER TABLE `Store` ADD COLUMN `createdDate` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `updatedDate` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    MODIFY `masterUserId` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `Category` ADD CONSTRAINT `Category_ibfk_1` FOREIGN KEY (`storeId`) REFERENCES `Store`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `MenuOption` ADD CONSTRAINT `MenuOption_ibfk_1` FOREIGN KEY (`menuId`) REFERENCES `Menu`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `MenuSearch` ADD CONSTRAINT `MenuSearch_ibfk_1` FOREIGN KEY (`subCategoryId`) REFERENCES `SubCategory`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `MenuSearch` ADD CONSTRAINT `MenuSearch_ibfk_2` FOREIGN KEY (`menuId`) REFERENCES `Menu`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `OptionInfo` ADD CONSTRAINT `OptionInfo_ibfk_1` FOREIGN KEY (`optionId`) REFERENCES `MenuOption`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `StoreInfo` ADD CONSTRAINT `StoreInfo_ibfk_1` FOREIGN KEY (`storeId`) REFERENCES `Store`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `SubCategory` ADD CONSTRAINT `SubCategory_ibfk_1` FOREIGN KEY (`categoryId`) REFERENCES `Category`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION;
