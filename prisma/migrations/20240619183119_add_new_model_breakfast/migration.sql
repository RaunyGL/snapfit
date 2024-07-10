-- CreateTable
CREATE TABLE "BreakFast" (
    "id" SERIAL NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "userId" INTEGER NOT NULL,
    "foodId" INTEGER NOT NULL,

    CONSTRAINT "BreakFast_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "BreakFast" ADD CONSTRAINT "BreakFast_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BreakFast" ADD CONSTRAINT "BreakFast_foodId_fkey" FOREIGN KEY ("foodId") REFERENCES "Food"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
