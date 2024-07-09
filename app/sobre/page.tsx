import { Button } from "@/components/ui/button";

const Objetivos = () => {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-green-20 from-100% to-green-10 pt-16 relative">
        <button className="absolute top-4 left-1 p-2 z-20">
          <img src="arrow.png" alt="Voltar" className="w-6 h-6" />
        </button>

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
            <Button className="w-[360px] h-[30px] border border-white bg-transparent text-lime-400">
              25
            </Button>
            <p className="mb-2 mt-1 text-white text-xs text-center">
              Usamos o seu sexo biológico e idade para calcular uma meta <br />{" "}
              de peso precisa para você
            </p>
          </div>

          <div className="flex flex-col items-center mt-20">
            <h1 className="mb-2 text-white">Onde você vive?</h1>
            <Button className="w-[360px] h-[30px] border border-white bg-transparent text-lime-400">
              Brasil
            </Button>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center mt-48">
          <Button className="w-[349px] h-[46px] bg-lime-400 mt-4 rounded-[25px] text-black">
            Próximo
          </Button>
        </div>
      </div>
    </>
  );
};

export default Objetivos;
