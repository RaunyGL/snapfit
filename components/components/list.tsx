'use client'
import React, { useState } from "react";
import { ScrollArea } from "../ui/scroll-area";
import { Separator } from "../ui/separator";
import { Food } from "@prisma/client";
import { Card, CardContent } from "../ui/card";
import { Plus } from "lucide-react";

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
    <ul>
      <li>

    <div className="flex justify-end">
            <Plus className="m" size={20} />
        </div> 
      </li>
    </ul>
       
   
    </div>
   );
}
 
export default List;