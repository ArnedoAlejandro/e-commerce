/*
  Warnings:

  - Made the column `city` on table `OrderAddress` required. This step will fail if there are existing NULL values in that column.
  - Made the column `city` on table `UserAddress` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Order" ALTER COLUMN "isPaid" SET DEFAULT false;

-- AlterTable
ALTER TABLE "OrderAddress" ALTER COLUMN "city" SET NOT NULL;

-- AlterTable
ALTER TABLE "UserAddress" ALTER COLUMN "city" SET NOT NULL;
