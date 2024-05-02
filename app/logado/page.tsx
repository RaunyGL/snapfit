import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Mail } from "lucide-react";
import  Link  from 'next/link';

const Header = () => {
    return (
        <div className="fixed top-0 w-full h-10 bg-gradient-to-br from-green-20 from-100% to-green-10 from-40% shadow">
            <div className="flex justify-center items-center">
                <h1 className="text-white text-[15px] font-bold mt-2">Logado</h1>
            </div>  
        </div>
    );
};

const Login = () => {
    return (
        <><div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-green-20 from-100% to-green-10 from-15%">
            <Header />
            <div className="mt-[-70px] w-80">
                <img src="snap-logo2.png" alt="" />
            </div>
           
           
            <div className="mt-[43px]">
                
            </div>           
        <div className="mt-7">
              
        </div>
            <div className="mt-5">
                <Button className="w-[349px] h-[46px] bg-white rounded-[25px] text-black">
                    <Mail className="mr-2 h-4 w-4" /> VOCE ESTÁ LOGADO
                </Button>
            </div>
            <div className="mt-5 text-center text-xs text-white opacity-80">
                <p>Nunca Publicaremos algo sem sua permissão.</p>
            </div>
        </div>
        
        
        
        </>
    );
};

export default Login;