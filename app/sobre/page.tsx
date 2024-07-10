import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const Objetivos = () => {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-green-20 from-100% to-green-10 pt-16 ">
      <div className="absolute top-0 left-0 p-4">
          <Link href="./atividade">
            <ArrowLeft className="text-white"/>
          </Link>
        </div>

        <header>
          <h1 className="text-white text-xl ml-4">Conte um pouco sobre você</h1>
          <p className="text-white text-center text-sm ml-4 mt-3">
            Selecione o sexo que devemos usar para calcular suas necessidades
            calóricas
          </p>
        </header>

        <div className="flex justify-center mt-8">
          <Button className="w-[180px] h-[30px] border border-white bg-transparent text-white  rounded-none">
            Masculino
          </Button>
          <Button className="w-[180px] h-[30px] border border-white bg-transparent text-white rounded-none">
            Feminino
          </Button>
        </div>
        <div>
          <div className="flex flex-col items-center mt-20">
            <h1 className="mb-2 text-white">Qual sua idade?</h1>
            <Input
              type="Number"
              className="w-[360px] h-[30px] border text-center border-white bg-transparent text-lime-400 "
            />
            <p className="mb-2 mt-1 text-white text-xs text-center">
              Usamos o seu sexo biológico e idade para calcular uma meta <br />{" "}
              de peso precisa para você
            </p>
          </div>

          <div className="flex flex-col items-center mt-20">
            <h1 className="mb-2 text-white">Onde você vive?</h1>
            <Input
              type="String"
              className="w-[360px] h-[30px] border text-center border-white bg-transparent text-lime-400 "
            />
          </div>
        </div>

        <div className="flex flex-col items-center justify-center mt-48">
          <Link href="./medidas">
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
