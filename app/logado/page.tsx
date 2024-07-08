import { Button } from "@/components/ui/button";
import { ArrowLeft, Mail } from "lucide-react";
import  Link  from 'next/link';

const Logado = () => {
    return (
        <>  
        <div className="flex flex-col items-center  min-h-screen bg-gradient-to-br from-green-20 from-100% to-green-10 from-15%">
          <div className="mt-5 mr-80 ">
          <Link href="./login">
           <ArrowLeft className="text-white" />
          </Link>
         </div>
            <div className="mt-16 w-80">
                <img src="snap-logo2.png" alt="" />
            </div>
            <div className=" mt-36 text-white text-center text-xl w-96 h-16">
                <p className="drop-shadow-lg font-light">
                Bem-vindo! Vamos personalizar o SnapFit de acordo com os seus objetivos!
                </p>
            </div>
            <div>
                <Button type="submit" className="w-[349px] h-[46px] bg-lime-400 hover:bg-lime-500 rounded-[15px] text-sm mt-32 flex justify-center text-black font-extrabold">
                    Continuar
                </Button>
            </div> 

            </div>
        </>
    );
};

export default Logado;
