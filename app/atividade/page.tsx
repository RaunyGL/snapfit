import { Button } from "@/components/ui/button";

const Objetivos = () => {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-green-20 from-100% to-green-10 pt-16 relative">
        <button className="absolute top-4 left-1 p-2 z-20">
          <img src="arrow.png" alt="Voltar" className="w-6 h-6" />
        </button>
        
        <header>
          <h1 className="text-white text-xl ml-4">Qual seu nível de atividade?</h1>
          <p className="text-white text-sm ml-4 mt-3">Não incluindo treinos - contamos isso separadamente</p>
        </header>
        
        <div className="flex flex-col items-center justify-center mt-20">
            <Button variant={"outline"} className="w-[349px] h-[80px] bg-transparent rounded-[25px] text-white border-4 flex justify-start items-center pl-4">
                <div>
                    <h1 className="font-bold text-left text-lime-400 text-base">Não muito ativo</h1>
                    <p className="text-sm text-left">Passa a maior parte do dia sentado <br/>(ex: caixa de banco, trabalho de escritório)</p>
                </div>
            </Button>

            <Button variant={"outline"} className="w-[349px] h-[80px] bg-transparent rounded-[25px] text-white border-4 flex justify-start items-center pl-4 mt-4">
                <div>
                    <h1 className="font-bold text-left text-lime-400 text-base">Levemente ativo</h1>
                    <p className="text-sm text-left">Passa boa parte do dia de pé <br /> (ex: professor, vendedor)</p>
                </div>
            </Button>

            <Button variant={"outline"} className="w-[349px] h-[80px] bg-transparent rounded-[25px] text-white border-4 flex justify-start items-center pl-4 mt-4">
                <div>
                    <h1 className="font-bold text-left text-lime-400 text-base">Ativo</h1>
                    <p className="text-sm text-left">Passa boa parte do dia fazendo <br/> alguma atividade física (ex: garçom, carteiro)</p>
                </div>
            </Button>

            <Button variant={"outline"} className="w-[349px] h-[80px] bg-transparent rounded-[25px] text-white border-4 flex justify-start items-center pl-4 mt-4">
                <div>
                    <h1 className="font-bold text-left text-lime-400 text-base">Bastante ativo</h1>
                    <p className="text-sm text-left">Passa maior parte do dia fazendo atividade <br/> física pesada  (ex: ciclista entregador)</p>
                </div>
            </Button>
        </div>

        

        <div className="flex flex-col items-center justify-center mt-36">
          <Button className="w-[349px] h-[46px] bg-lime-400 mt-4 rounded-[25px] text-black">Próximo</Button>
        </div>
      </div>
    </>
  );
};

export default Objetivos;
