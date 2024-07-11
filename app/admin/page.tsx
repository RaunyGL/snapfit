import EditDialog from "@/components/components/editDialog";
import Footer from "@/components/components/footer";
import ListEdit from "@/components/components/listEdit";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { db } from "@/lib/prisma";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

EditDialog

export default async function Insert() {
  const foods = await db.food.findMany({});

  return (
    <div>
      <Link href="./daily">
        <ArrowLeft className="ml-5 mt-5" />
      </Link>
      <div>
        <ScrollArea className="overflow-y-scroll max-h-[718px] w-11/12 mx-auto mt-2 rounded-md border bg-white drop-shadow-lg">
          <div className="p-4">
            <div className="flex items-center justify-start">
              <h4 className="mb-4 mt-6 ml-2 text-base font-extrabold leading-none">
                Lista de alimentos
              </h4>
              <button className="ml-[86px] w-[126px] h-[36px] bg-[#173F14] text-white rounded-2xl mt-2">
                Incluir
              </button>
            </div>
            <div className="flex items-center justify-between w-[360px] h-[39px] border border-[#1A1A1A1C] border-opacity-50 mb-4 bg-[#1A1A1A1C] shadow-2xl">
              <h1 className="ml-2 text-sm font-bold">Nome</h1>
              <h1 className="ml-36 text-sm font-bold">Editar</h1>
              <h1 className="mr-2 text-sm font-bold">Excluir</h1>
            </div>
            {foods.map((food) => (
              <>
                <ListEdit
                  key={food.id}
                  food={food}
                  user={{
                    id: "",
                    name: food.name,
                    email: "",
                    password: "",
                    createdAt: new Date(),
                    updatedAt: new Date(),
                  }}
                />
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

