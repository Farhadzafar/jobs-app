/*
  Warnings:

  - You are about to drop the column `postedAt` on the `Job` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Job" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "logo" TEXT,
    "title" TEXT NOT NULL,
    "company" TEXT NOT NULL,
    "type" TEXT,
    "salary" TEXT,
    "tags" TEXT,
    "description" TEXT,
    "companyInfo" TEXT,
    "companyWebsite" TEXT,
    "companyEmail" TEXT,
    "companyLinks" TEXT,
    "jobApplyDescription" TEXT,
    "team" TEXT,
    "experience" TEXT,
    "startDate" DATETIME,
    "closingDate" DATETIME,
    "location" TEXT,
    "remote" BOOLEAN,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME
);
INSERT INTO "new_Job" ("company", "id", "location", "salary", "tags", "title", "type") SELECT "company", "id", "location", "salary", "tags", "title", "type" FROM "Job";
DROP TABLE "Job";
ALTER TABLE "new_Job" RENAME TO "Job";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
