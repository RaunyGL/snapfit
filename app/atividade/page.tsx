import { Button } from "@/components/ui/button";
import { Toggle } from "@/components/ui/toggle";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
const Atividade = () => {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-green-20 from-100% to-green-10 pt-16 relative">
        <div className="absolute top-0 left-0 p-4">
          <Link href="./objetivos">
            <ArrowLeft className="text-white" />
          </Link>
        </div>
        <header>
          <h1 className="text-white text-xl ml-4">
            Qual seu nível de atividade?
          </h1>
          <p className="text-white text-sm ml-4 mt-3">
            Não incluindo treinos - contamos isso separadamente
          </p>
        </header>

        <div className="flex flex-col items-center justify-center mt-20">
          <Toggle
            variant="outline"
            className="w-[349px] h-[80px] bg-transparent rounded-[25px] text-white border-4 flex justify-start items-center pl-4 mt-4"
          >
            <div>
              <h1 className="font-bold text-left text-lime-400 text-base">
                Não muito ativo
              </h1>
              <p className="text-sm text-left">
              Passa a maior parte do dia sentado (ex: caixa de banco, trabalho de escritório)
              </p>
            </div>
          </Toggle>

          <Toggle
            variant={"outline"}
            className="w-[349px] h-[80px] bg-transparent rounded-[25px] text-white border-4 flex justify-start items-center pl-4 mt-4"
          >
            <div>
              <h1 className="font-bold text-left text-lime-400 text-base">
                Levemente ativo
              </h1>
              <p className="text-sm text-left">
                Passa boa parte do dia de pé <br /> (ex: professor, vendedor)
              </p>
            </div>
          </Toggle>

          <Toggle
            variant={"outline"}
            className="w-[349px] h-[80px] bg-transparent rounded-[25px] text-white border-4 flex justify-start items-center pl-4 mt-4"
          >
            <div>
              <h1 className="font-bold text-left text-lime-400 text-base">
                Ativo
              </h1>
              <p className="text-sm text-left">
                Passa boa parte do dia fazendo <br /> alguma atividade física
                (ex: garçom, carteiro)
              </p>
            </div>
          </Toggle>

          <Toggle
            variant={"outline"}
            className="w-[349px] h-[80px] bg-transparent rounded-[25px] text-white border-4 flex justify-start items-center pl-4 mt-4"
          >
            <div>
              <h1 className="font-bold text-left text-lime-400 text-base">
                Bastante ativo
              </h1>
              <p className="text-sm text-left">
                Passa maior parte do dia fazendo atividade <br /> física pesada
                (ex: ciclista entregador)
              </p>
            </div>
          </Toggle>
        </div>

        <div className="flex flex-col items-center justify-center mt-48">
          <Link href="./sobre">
            <Button className="w-[349px] h-[46px] bg-lime-400 mt-4 rounded-[25px] text-black">
              Próximo
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Atividade;
