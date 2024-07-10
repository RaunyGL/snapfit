import { Button } from "@/components/ui/button";

const Objetivos = () => {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-green-20 from-100% to-green-10 pt-16 relative">
        <button className="absolute top-4 left-1 p-2 z-20">
          <img src="arrow.png" alt="Voltar" className="w-6 h-6" />
        </button>

        <header>
          <h1 className="text-white text-xl ml-4">Só mais algumas perguntas</h1>
        </header>

        <div>
          <div className="flex flex-col items-center mt-20">
            <h1 className="mb-2 text-white">Qual sua Altura?</h1>
            <Button className="w-[360px] h-[30px] border border-white bg-transparent text-lime-400">
              170cm
            </Button>
            
          </div>

          <div className="flex flex-col items-center mt-20">
            <h1 className="mb-2 text-white">Quanto você pesa?</h1>
            <Button className="w-[360px] h-[30px] border border-white bg-transparent text-lime-400">
              25
            </Button>
            <p className="mb-2 mt-1 text-white text-xs text-center">
            Não tem problema inserir uma estimativa. Você pode atualizar <br /> isso posteriormente.
            </p>
          </div>

          <div className="flex flex-col items-center mt-20">
            <h1 className="mb-2 text-white">Qual sua meta de peso?</h1>
            <Button className="w-[360px] h-[30px] border border-white bg-transparent text-lime-400">
              75 kg 
            </Button>
            <p className="mb-2 mt-1 text-white text-xs text-center">
            Não se preocupe, isso não afeta sua meta diária de calorias e <br /> você pode alterar isso depois.
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center mt-32">
          <Button className="w-[349px] h-[46px] bg-lime-400 mt-4 rounded-[25px] text-black">
            Próximo
          </Button>
        </div>
      </div>
    </>
  );
};

export default Objetivos;
