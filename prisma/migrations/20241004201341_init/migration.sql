/*
  Warnings:

  - You are about to drop the `Users` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Users";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "Veterinaria" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "nombreDelLocal" TEXT NOT NULL,
    "ubicacion" TEXT NOT NULL,
    "latitud" REAL NOT NULL,
    "longitud" REAL NOT NULL,
    "email" TEXT NOT NULL,
    "numero" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Veterinaria_email_key" ON "Veterinaria"("email");
