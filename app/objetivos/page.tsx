import { Button } from "@/components/ui/button";

const Objetivos = () => {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-green-20 from-100% to-green-10 pt-16 relative">
        <button className="absolute top-4 left-1 p-2 z-20">
          <img src="arrow.png" alt="Voltar" className="w-6 h-6" />
        </button>
        
        <header>
          <h1 className="text-white text-xl ml-4">Vamos começar pelos objetivos.</h1>
          <p className="text-white text-sm ml-4 mt-3">Selecione até três metas que são mais importantes para você.</p>
        </header>
        <div className="flex flex-col items-center justify-center mt-20">
          <Button variant={"outline"} className="w-[349px] h-[46px] bg-transparent rounded-[25px] text-white border-2">Perder Peso</Button>
          <Button variant={"outline"} className="w-[349px] h-[46px] bg-transparent mt-4 rounded-[25px] text-white border-2">Manter Peso</Button>
          <Button variant={"outline"} className="w-[349px] h-[46px] bg-transparent mt-4 rounded-[25px] text-white border-2">Ganhar Peso</Button>
          <Button variant={"outline"} className="w-[349px] h-[46px] bg-transparent mt-4 rounded-[25px] text-white border-2">Ganhar massa muscular</Button>
          <Button variant={"outline"} className="w-[349px] h-[46px] bg-transparent mt-4 rounded-[25px] text-white border-2">Modificar minha dieta</Button>
          <Button variant={"outline"} className="w-[349px] h-[46px] bg-transparent mt-4 rounded-[25px] text-white border-2">Controla o estresse</Button>
          <Button variant={"outline"} className="w-[349px] h-[46px] bg-transparent mt-4 rounded-[25px] text-white border-2">Aumenta o número de passos</Button>
        </div>
        <div className="flex flex-col items-center justify-center mt-36">
          <Button className="w-[349px] h-[46px] bg-lime-400 mt-4 rounded-[25px] text-black">Próximo</Button>
        </div>
      </div>
    </>
  );
};

export default Objetivos;
