import EditDialog from "@/components/components/editDialog";
import Footer from "@/components/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { db } from "@/lib/prisma";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default async function Breakfast() {
  const breakfasts = await db.breakFast.findMany({
    include: {
      food: true,
  }});
  
  return (
    <div>
      <Link href="./daily">
      <ArrowLeft className="mt-5 ml-5" />
      </Link>

      <div className="w-full">
        <Card className=" bg-gradient-to-r from-green-20 from-100% to-green-10 from-36%  drop-shadow-lg h-44 w-11/12 mx-auto mt-6">
          <img
            src="cafe.png"
            alt="icone de café"
            className="w-9 h-9 mt-4 ml-5"
          />
          <CardTitle className="text-white mt-1.5 ml-5">
            Café da manhã
          </CardTitle>
          <CardDescription className="absolute top-0 right-0 text-white font-semibold text-lg mt-9 mr-8">
            <span className="text-white">713</span>/
            <span className="text-primary">749</span>
          </CardDescription>
          <CardDescription className="absolute top-0 right-0 text-white font-semibold text-base mt-14 mr-8">
            Kcal
          </CardDescription>
          <Progress className="mt-3 h-4 w-80 mx-auto" value={86} />
          <CardDescription className="absolute bottom-0 left-0 text-white font-semibold text-base ml-8 mb-6">
            Proteínas
          </CardDescription>
          <CardDescription className="absolute bottom-0 left-0 text-white font-semibold text-sm ml-12 mb-2">
            90 gr
          </CardDescription>
          <CardDescription
            className="absolute bottom-0 text-white font-semibold text-base text-center mb-6"
            style={{ left: "50%", transform: "translateX(-50%)" }}
          >
            Carboidratos
          </CardDescription>
          <CardDescription
            className="absolute bottom-0 text-white font-semibold text-sm text-center mb-2"
            style={{ left: "50%", transform: "translateX(-50%)" }}
          >
            65 gr
          </CardDescription>
          <CardDescription className="absolute bottom-0 right-0 text-white font-semibold text-base mr-8 mb-6">
            Gorduras
          </CardDescription>
          <CardDescription className="absolute bottom-0 right-0 text-white font-semibold text-sm mr-12 mb-2">
            15 gr
          </CardDescription>
        </Card>
      </div>

      <div>
        <ScrollArea className="overflow-y-scroll [&::-webkit-scrollbar]:hidden max-h-[500px] w-11/12 mx-auto mt-6 rounded-md border bg-white drop-shadow-lg">
          <div className="mt-6 flex justify-end mr-3">
            <Link href="./insert">
            <Button className="w-20 h-6 text-xs bg-gradient-to-r from-green-20 from-100% to-green-10 from-36%  drop-shadow-lg">
              Adicionar
            </Button>
            </Link>
          </div>

          <div className="p-4">
            <h4 className="mb-4 -mt-8 text-base font-bold leading-none">
              Lista de alimentos
            </h4>
            <ul>
              {breakfasts.map((breakfast) => (
                <li className="text-base">{breakfast.food.name}
                <li className="text-sm">{breakfast.food.servingSize} - {breakfast.food.calories} kcal</li>
                <EditDialog />
                <Separator className="my-2" />
                </li>
              ))}
             </ul>        
          </div>
        </ScrollArea>
      </div>

      <Footer />
    </div>
  );
}
