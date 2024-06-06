"use client";
import React, { useState } from "react";
import { Food } from "@prisma/client";


interface ListProps {
  food: Food;
}

const listFood = ({ food }: ListProps) => {
  return (
    <div>
      <ul>
        <li className="text-base">{food.name}</li>
        <li className="text-sm">
          {food.servingSize} - {food.calories} kcal
        </li>
      </ul>
      
    </div>
  );
};

export default listFood;
