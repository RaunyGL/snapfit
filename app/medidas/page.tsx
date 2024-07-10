import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

const Medidas = () => {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-green-20 from-100% to-green-10 pt-16 relative">
        <div className="absolute top-0 left-0 p-4">
          <Link href="./sobre">
            <ArrowLeft className="text-white" />
          </Link>
        </div>

        <header>
          <h1 className="text-white text-xl ml-4">Só mais algumas perguntas</h1>
        </header>

        <div>
          <div className="flex flex-col items-center mt-20">
            <h1 className="mb-2 text-white">Qual sua Altura? (cm)</h1>
            <Input
              type="Number"
              className="w-[360px] h-[30px] border text-center border-white bg-transparent text-lime-400 "
            />
          </div>

          <div className="flex flex-col items-center mt-20">
            <h1 className="mb-2 text-white">Quanto você pesa? (kg)</h1>
            <Input
              type="Number"
              className="w-[360px] h-[30px] border text-center border-white bg-transparent text-lime-400 "
            />
            <p className="mb-2 mt-1 text-white text-xs text-center">
              Não tem problema inserir uma estimativa. Você pode atualizar{" "}
              <br /> isso posteriormente.
            </p>
          </div>

          <div className="flex flex-col items-center mt-20">
            <h1 className="mb-2 text-white">Qual sua meta de peso? (kg)</h1>
            <Input
              type="Number"
              className="w-[360px] h-[30px] border text-center border-white bg-transparent text-lime-400 "
            />
            <p className="mb-2 mt-1 text-white text-xs text-center">
              Não se preocupe, isso não afeta sua meta diária de calorias e{" "}
              <br /> você pode alterar isso depois.
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center mt-32">
          <Link href="./final">
            <Button className="w-[349px] h-[46px] bg-lime-400 mt-4 rounded-[25px] text-black">
              Próximo
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Medidas;
