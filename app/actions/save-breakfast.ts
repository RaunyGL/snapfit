"use server"

import { db } from "@/lib/prisma";

interface SaveBreakfastParams {
     userId: string;
      foodId: string;
      date: Date;

}

export const saveBreakfast = async (params: SaveBreakfastParams) => {
  await db.breakFast.create({
    data: {
      userId: params.userId,
      foodId: params.foodId,
      date: new Date(),
    },
  })
};