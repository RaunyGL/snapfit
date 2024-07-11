import Footer from "@/components/components/footer";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Card, CardDescription } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { db } from "@/lib/prisma";
import { Bell, HelpCircle } from "lucide-react";
import Link from "next/link";

export default async function daily() {
  const users = await db.user.findMany({});

  return (
    <>
      <div className="flex items-center">
        <div className="mr-4 mt-12">
          <Avatar className="bg-lime-600 outline-double outline-lime-600 mt- ml-4 w-14 h-14">
            <AvatarImage src="useravatar.png" />
          </Avatar>
        </div>
        <div className="mt-8">
          {users.map((user) => (
            <><h1 key={user.id} className="mt-4 text-xl font-medium">Olá,{user.name}</h1>
            <p className="text-sm font-light">Quinta, 25 de Abril</p></>
          ))}
        </div>
        <div className="ml-auto flex items-center">
          <Bell className="mr-5" />
          <HelpCircle className="mr-6" />
        </div>
      </div>
      <Card className="bg-gradient-to-r from-green-600 from-10% via-green-800 to-green-900 drop-shadow-lg relative h-44 w-11/12 mx-auto mt-4">
        <CardDescription className="absolute top-0 left-0 text-white font-semibold text-xs mt-16 ml-8">
          86%
        </CardDescription>
        <CardDescription className="absolute top-0 right-0 text-white font-semibold text-lg mt-9 mr-8">
          <span className="text-white">2151</span>/
          <span className="text-primary">2500</span>
        </CardDescription>
        <CardDescription className="absolute top-0 right-0 text-white font-semibold text-base mt-14 mr-8">
          Kcal
        </CardDescription>
        <Progress className="mt-20 h-4 w-80 mx-auto" value={86} />
        <CardDescription className="absolute bottom-0 left-0 text-white font-semibold text-base ml-8 mb-6">
          Proteínas
        </CardDescription>
        <CardDescription className="absolute bottom-0 left-0 text-white font-semibold text-sm ml-12 mb-2">
          230 gr
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
          100 gr
        </CardDescription>
        <CardDescription className="absolute bottom-0 right-0 text-white font-semibold text-base mr-8 mb-6">
          Gorduras
        </CardDescription>
        <CardDescription className="absolute bottom-0 right-0 text-white font-semibold text-sm mr-12 mb-2">
          77 gr
        </CardDescription>
      </Card>

      <Card className="mt-4 mx-auto w-80 h-9">
        <div className="text-center flex justify-center items-center h-full">
          <img src="light.png" alt="Ícone" className="mr-2 w-4 h-6" />
          <h1 className="font-medium text-sm">
            Dica: Controle a ingestão de água!
          </h1>
        </div>
      </Card>

      <Link href="./breakfast">
        <Card className="w-10/12 h-20 mx-auto mt-4 drop-shadow-lg relative flex">
          <div>
            <img src="coffee.png" alt="Ícone" className="w-9 h-8 mt-6 ml-4" />
          </div>
          <div className="flex flex-col justify-center ml-4">
            <h1 className="text-center font-bold">Café da manhã</h1>
            <p className="text-sm">713/749 kcal</p>
          </div>
          <div className="flex items-center absolute top-5 right-0 pr-8">
            <span className="text-3xl font-thin cursor-pointer">+</span>
          </div>
        </Card>
      </Link>

      <Link href="./lunch">
        <Card className="w-10/12 h-20 mx-auto mt-2 drop-shadow-lg relative flex">
          <div>
            <img src="salad.png" alt="Ícone" className="w-8 h-6 mt-8 ml-4" />
          </div>
          <div className="flex flex-col justify-center ml-4">
            <h1 className="text-center font-bold mr-5">Almoço</h1>
            <p className="text-sm ml-2">837/999 kcal</p>
          </div>
          <div className="flex items-center absolute top-5 right-0 pr-8">
            <span className="text-3xl font-thin cursor-pointer">+</span>
          </div>
        </Card>
      </Link>

      <Link href="./afternooncoffee">
        <Card className="w-10/12 h-20 mx-auto mt-2 drop-shadow-lg relative flex">
          <div>
            <img src="coffee.png" alt="Ícone" className="w-9 h-8 mt-6 ml-4" />
          </div>
          <div className="flex flex-col justify-center ml-4">
            <h1 className="text-center  font-bold">Café da Tarde</h1>
            <p className="text-sm ">126/126 kcal</p>
          </div>
          <div className="flex items-center absolute top-5 right-0 pr-8">
            <span className="text-3xl font-thin cursor-pointer">+</span>
          </div>
        </Card>
      </Link>

      <Link href="./dinner">
        <Card className="w-10/12 h-20 mx-auto mt-2 drop-shadow-lg relative flex">
          <div>
            <img src="food.png" alt="Ícone" className="w-9 h-8 mt-6 ml-4" />
          </div>
          <div className="flex flex-col justify-center ml-4">
            <h1 className="text-center font-bold mr-10">Jantar</h1>
            <p className="text-sm">475/626 kcal</p>
          </div>
          <div className="flex items-center absolute top-5 right-0 pr-8">
            <span className="text-3xl font-thin cursor-pointer">+</span>
          </div>
        </Card>
      </Link>

      <Footer />
    </>
  );
};

