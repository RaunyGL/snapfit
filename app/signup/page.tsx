import { Button } from "@/components/ui/button";
import  Link  from 'next/link';


const Signup = () => {
    return (
        <><div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-green-20 from-100% to-green-10 from-15%">
        
            <div className="mt-44 w-80">
                <img src="snap-logo2.png" alt="" />
            </div>
           
           
            <div className="mt-[43px]">
                
            </div>           
        <div className="mt-7">
              
        </div>
            <div className="mt-96">
                <Link href="./cadastro">
                <Button className="w-[349px] h-[46px] bg-white rounded-[25px] text-black">
                    REGISTRE GRATUITAMENTE
                </Button>
                </Link>
            </div>
            <div className="mt-5 text-center text-xs text-white opacity-80">
            <Link href="/daily">
                <Button variant="link" className="w-[349px] h-[46px] text-white">
                    ENTRAR
                </Button>
                </Link>
            </div>
        </div>
        
        
        
        </>
    );
};

export default Signup;
