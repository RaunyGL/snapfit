"use client";
import React, { useState, useEffect } from "react";
import { Food, BreakFast } from "@prisma/client";
import { Edit, Loader2 } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Button } from "../ui/button";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../ui/select";




interface ListProps {
  breakfast: BreakFast;

}

const ListBreakfast = ({ breakfast }: ListProps) => {

const  [submitIsLoading, setSubmitIsLoading] = useState(false);
const  [dialogIsOpen, setDialogIsOpen] = useState(false);


  const handleBreakfastSubmit = async () => {
    setSubmitIsLoading(true);
    try {
      
     
      
      setDialogIsOpen(false);
    } catch (error) {
      console.error(error);
    } finally {
      setSubmitIsLoading(false);
    }
  };
   

  return (
    <div>
       <ul>
        <li className="text-base">{breakfast.foodId}</li>
        <li className="text-sm">
          kcal
        </li>
      </ul>
      <ul>
        <li>
          <div className="flex justify-end">
            <Dialog open={dialogIsOpen} onOpenChange={setDialogIsOpen}>
              <DialogTrigger asChild>
                <Button variant="link" size="icon">
                  <Edit size={20} />
              
                </Button>
              </DialogTrigger>
              <DialogContent className="h-[260px] w-[310px] rounded-md">
                <DialogTitle>{}</DialogTitle>
                <div>
                  <div className="">
                    <Label htmlFor="quantidade">Quantidade</Label>
                    <Input
                      id="name"
                      defaultValue="1"
                      className="h-[49px] w-[73px] text-center"
                    />
                  </div>
                  <div className="mt-4">
                    <Select>
                      <SelectTrigger className="h-[49px] w-[166px]">
                        <SelectValue placeholder="Unidades(s)" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectItem value="apple">Unidade(s)</SelectItem>
                          <SelectItem value="banana">Gramas</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <DialogFooter>
                  <Button onClick={handleBreakfastSubmit}
                    className="from-36% bg-gradient-to-r from-green-20 from-100% to-green-10  drop-shadow-lg"
                    type="submit"
                  >
                   {submitIsLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />} 
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
};

export default ListBreakfast;
