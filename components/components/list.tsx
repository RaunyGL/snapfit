'use client'
import React, { useState } from "react";
import { ScrollArea } from "../ui/scroll-area";
import { Separator } from "../ui/separator";
import { Food } from "@prisma/client";
import { Card, CardContent } from "../ui/card";

interface ListProps {
  food: Food;
}

const List = ({food}: ListProps) => {

  return ( 
    <div>
    <ul>
      <li className="text-base">
        {food.name}
      </li>
      <li className="text-sm">
        {food.servingSize} - {food.calories} kcal
      </li>
    </ul>
       
   
    </div>
   );
}
 
export default List;