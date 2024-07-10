import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link";

const Final = () => {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-green-20 from-100% to-green-10 pt-16 relative">
        <header>
          <h1 className="text-white text-center text-xl ml-4">Parabéns!</h1>
          <p className="text-white text-center text-sm ml-4 mt-16">
            Seu plano personalizado está pronto e você está <br />
            mais perto da sua meta de peso.
          </p>
        </header>

        <div>
          <div className="flex flex-col items-center mt-14">
            <p className="mb-2 text-white">Sua meta diária de calorias é:</p>
            <div className="flex items-center">
              <p className="text-lime-400 mr-2 text-xl">2.500</p>
              <Button className="w-[70px] h-[22px] border border-white bg-transparent text-white rounded-none">
                Calorias
              </Button>
            </div>
          </div>

          <div className="flex flex-col items-center mt-14">
            <h1 className="mb-2 text-white">Você deve perder:</h1>
            <h1 className="text-lime-400">2,5 kg até 10 de maio</h1>
          </div>

          <hr className="w-2/3 border-t border-gray-300 opacity-50 mt-6 mx-auto" />

          <div className="rounded-2xl mt-14">
            <div className="flex items-center mb-2">
              <Checkbox className="ml-4 border-white" />
              <Label className="text-white ml-4">
                Me mantenha no caminho certo com <br />
                lembretes.
              </Label>
            </div>

            <div className="flex items-center mb-2">
              <Checkbox className="ml-4 border-white mt-2" />
              <Label className="text-white ml-4 mt-4">
                Usar meu celular para monitorar <br /> meu passos
              </Label>
            </div>

            <div className="flex items-center">
              <Checkbox className="ml-4 border-white" />
              <Label className="text-white ml-4 mt-4">
                Envie-me as últimas notícias, inovações e ofertas <br /> do
                SnapFit.
              </Label>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center mt-24">
          <Link href="./daily">
            <Button className="w-[349px] h-[46px] bg-lime-400 mt-4 rounded-[25px] text-black">
              Continuar
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Final;
