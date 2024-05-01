'use client'
import React, { useState } from "react";
import { Food } from "@prisma/client";
import { Plus} from "lucide-react";
import { Dialog, DialogContent, DialogFooter, DialogTitle, DialogTrigger } from "../ui/dialog";
import { Button } from "../ui/button";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "../ui/select";

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
         <Dialog>
            <DialogTrigger asChild >
                <Button  variant ="link" size="icon" >
                 <Plus className="" size={20} />

                </Button>
            </DialogTrigger>
            <DialogContent  className="h-[260px] w-[310px] rounded-md">
                <DialogTitle>
                    Arroz
                </DialogTitle>
                <div className="grid-cols-2">
                    <div>
                    <Label htmlFor="quantidade">
                      Quantidade
                    </Label>
                    <Input id="Name" defaultValue="1" className="w-[73px] h-[49px] text-center"> 
                    
                    </Input>

                    </div>
                    <div className="mt-4">
                      <Select>
                        <SelectTrigger className="h-[49px] w-[160px]">
                          <SelectValue placeholder="Unidades(s)  "/>
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            <SelectItem value="unidade">Unidade(s) </SelectItem> 
                            <SelectItem value="grama">Gramas(gr)</SelectItem> 
                            <SelectItem value="mililitros">Mililitros(ml)</SelectItem> 
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    </div>
                </div>
                <DialogFooter>
                  <Button type="submit" className="from-36% bg-gradient-to-r from-green-20 from-100% to-green-10  drop-shadow-lg">
                    Adicionar ao diário
                  </Button>
                </DialogFooter>
            </DialogContent>
         </Dialog>
        </div> 
      </li>
    </ul>


    </div>
   );
}
 
export default List;