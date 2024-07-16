import Footer from "@/components/components/footer";
import List from "@/components/components/list-dinner";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { db } from "@/lib/prisma";
import { ArrowLeft} from "lucide-react";
import Link from "next/link";



export default async function Insert() { 
    const foods = await db.food.findMany({});

    return ( 
        <div >
            <Link href="./dinner">
            <ArrowLeft className="ml-5 mt-5" />
            </Link>
            <div className="mt-5">
                <Input type="search" placeholder="Pesquisar" className=" mx-auto text-white placeholder-white  w-[366px] h-[39px] bg-gradient-to-r from-green-20 from-100% to-green-10 from-36% rounded-[25px] shadow" >
                </Input>
            </div> 
            <div className="flex justify-between mt-4">
                <Card className="w-32 h-36 mt-2 ml-4 bg-white shadow-lg">
                <div className="flex flex-col items-center mt-6">
                    <img className="w-20 h-16 " src="salad.png" alt="Icone de Salada"/>
                    <h2 className="mt-3 font-semibold">Alimentos</h2>
                </div>
                </Card>
                <Card className="w-32 h-36 mt-2 bg-white shadow-lg ">
                <div className="flex flex-col items-center mt-6">
                    <img className="w-20 h-16 " src="plate.png" alt="Icone de Prato"/>
                    <h2 className="mt-3 font-semibold">Refeições</h2>
                </div>
                </Card>
                <Card className="w-32 h-36 mt-2 mr-4 bg-white shadow-lg ">
                <div className="flex flex-col items-center mt-6">
                    <img className="w-16 h-16 " src="heart.png" alt="Favoritos"/>
                    <h2 className="mt-3 font-semibold">Favoritos</h2>
                </div>
                </Card>
                </div >
                <div>

      <ScrollArea className="overflow-y-scroll max-h-[482px] w-11/12 mx-auto mt-5 rounded-md border bg-white drop-shadow-lg">
       
        <div className="p-4">
          <h4 className="mb-4  text-base font-bold leading-none">
            Lista de alimentos
          </h4>

          {foods.map((food) => (
            <>
              <List key={food.id} food={food} user={{
                id: "",
                name: food.name,
                email: "",
                password: "",
                emailVerified: null,
                image: null,
                createdAt: new Date(),
                updatedAt: new Date(),
              }} />
              <Separator className="my-2" />
            </>
          ))}
        </div>
      </ScrollArea>
      </div>    
          <Footer />

        </div>

    );
}