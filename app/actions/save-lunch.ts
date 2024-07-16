"use server"

import { db } from "@/lib/prisma";

interface SaveBreakfastParams {
     userId: string;
      foodId: string;
      date: Date;

}

export const saveLunch = async (params: SaveBreakfastParams) => {
  await db.lunch.create({
    data: {
      userId: params.userId,
      foodId: params.foodId,
      date: new Date(),
    },
  })
};