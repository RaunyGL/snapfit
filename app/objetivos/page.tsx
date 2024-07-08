import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Mail } from "lucide-react";
import Link from "next/link";

const Objetivos = () => {
  return (
    <>
    <div className="min-h-screen bg-gradient-to-br from-green-20 from-100% to-green-10 from-15% pt-16">
    <header>
        <h1 className="text-white text-xl ml-4">Vamos começar pelos objetivos.</h1>
        <p className="text-white text-sm ml-4 mt-3">Selecione até três metas que são mais importantes para você.</p>
    </header>
    <div className="flex flex-col items-center justify-center mt-20">
        <Button variant={"outline"} className="w-[349px] h-[46px] bg-transparent rounded-[25px] text-white">Perder Peso</Button>
        <Button variant={"outline"} className="w-[349px] h-[46px] bg-transparent mt-4 rounded-[25px] text-white">Manter Peso</Button>
        <Button variant={"outline"} className="w-[349px] h-[46px] bg-transparent mt-4 rounded-[25px] text-white">Ganhar Peso</Button>
        <Button variant={"outline"} className="w-[349px] h-[46px] bg-transparent mt-4 rounded-[25px] text-white">Ganhar massa muscular</Button>
        <Button variant={"outline"} className="w-[349px] h-[46px] bg-transparent mt-4 rounded-[25px] text-white">Modificar minha dieta</Button>
        <Button variant={"outline"} className="w-[349px] h-[46px] bg-transparent mt-4 rounded-[25px] text-white">Controla o estresse</Button>
        <Button variant={"outline"} className="w-[349px] h-[46px] bg-transparent mt-4 rounded-[25px] text-white">Aumenta o número de passos</Button>
    </div>

    <div className="flex flex-col items-center justify-center mt-36">
    <Button className="w-[349px] h-[46px]  bg-lime-400 mt-4 rounded-[25px] text-black">Próximo</Button>
    </div>
</div>


    </>
  );
};

export default Objetivos;
