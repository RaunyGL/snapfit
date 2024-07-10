import { Button } from "@/components/ui/button";
import { Toggle } from "@/components/ui/toggle";
import Link from "next/link";

const Objetivos = () => {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-green-20 from-100% to-green-10 pt-16 relative">
        

        <header>
          <h1 className="text-white text-xl ml-4">
            Vamos começar pelos objetivos.
          </h1>
          <p className="text-white text-sm ml-4 mt-3">
            Selecione até três metas que são mais importantes para você.
          </p>
        </header>
        <div className="flex flex-col items-center justify-center mt-20 ">
          
          <Toggle variant="outline" className="w-[349px] h-[46px] text-white border-2">
            Perder Peso
          </Toggle>

          <Toggle variant="outline" className="w-[349px] h-[46px] bg-transparent mt-4 rounded-[25px] text-white border-2">
            Manter Peso
          </Toggle>

          <Toggle variant="outline" className="w-[349px] h-[46px] bg-transparent mt-4 rounded-[25px] text-white border-2">
            Ganhar peso
          </Toggle>

          <Toggle variant="outline" className="w-[349px] h-[46px] bg-transparent mt-4 rounded-[25px] text-white border-2">
            Ganhar massa muscular
          </Toggle>

          <Toggle variant="outline" className="w-[349px] h-[46px] bg-transparent mt-4 rounded-[25px] text-white border-2">
            Modificar minha dieta
          </Toggle>

          <Toggle variant="outline" className="w-[349px] h-[46px] bg-transparent mt-4 rounded-[25px] text-white border-2">
            Controlar o estresse
          </Toggle>

          <Toggle variant="outline" className="w-[349px] h-[46px] bg-transparent mt-4 rounded-[25px] text-white border-2">
            Aumentar meu número de passos
          </Toggle>
        </div>

        <div className="flex flex-col items-center justify-center mt-36">
          <Link href="./atividade">
            <Button className="w-[349px] h-[46px] bg-lime-400 mt-4 rounded-[25px] text-black">
              Próximo
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Objetivos;
