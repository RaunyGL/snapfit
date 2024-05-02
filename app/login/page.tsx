import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import AuthActions from "@/modules/auth/actions/auth-actions";
import { Mail } from "lucide-react";
import  Link  from 'next/link';

const Header = () => {
    return (
        <div className="fixed top-0 w-full h-10 bg-gradient-to-br from-green-20 from-100% to-green-10 from-40% shadow">
            <div className="flex justify-center items-center">
                <h1 className="text-white text-[15px] font-bold mt-2">Entrar</h1>
            </div>  
        </div>
    );
};

const Login = () => {
    return (
        <>
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-green-20 from-100% to-green-10 from-15%">
            <Header />
            <div className="mt-[-70px] w-80">
                <img src="snap-logo2.png" alt="" />
            </div>
            <form action={AuthActions.login}>
            <div className="">
                <div>
                
                    <Input
                        type="email" id="email" required name="email"
                        placeholder="E-mail"
                        className="w-[349px] h-[46px] bg-white rounded-[25px]  mt-10 font-bold border-2 text-sm border-transparent focus:border-lime-400" />

                    <Input
                        type="password" id="password" required name="password"
                        placeholder="Senha"
                        className="w-[349px] h-[46px] bg-white rounded-[25px] mt-7 font-bold border-2 text-sm border-transparent focus:border-lime-400" />
                </div>
            </div>
            <div>
                <Button type="submit" className="w-[349px] h-[46px] bg-lime-400 hover:bg-lime-500 rounded-[15px] text-sm mt-10 flex justify-center text-black font-extrabold">
                    Entrar
                </Button>
            </div>
            </form>
            <div>
                <div className="w-[119px] h-5 text-lime-400 text-[15px] text-sm mt-14">Esqueci a senha</div>
            </div>
            <div className="mt-[43px]">
                <div className="flex justify-center items-center">
                    <div className="w-[177px] h-[0px] origin-top-left border border-white border-opacity-50"></div>
                    <div className="w-6 h-5 text-white text-[15px] text-sm mx-2">OU</div>
                    <div className="w-[177px] h-[0px] origin-top-left border border-white border-opacity-50"></div>
                </div>
            </div>           
            <div className="mt-7">
                <Link href="http://localhost:3000/cadastro">
            <Button className="w-[349px] h-[46px] bg-white rounded-[25px] text-black">
                <Mail className="mr-2 h-4 w-4" /> Cadastre-se
            </Button>
                </Link>
        </div>
      
            <div className="mt-5">
                <Button className="w-[349px] h-[46px] bg-white rounded-[25px] text-black">
                    <Mail className="mr-2 h-4 w-4" /> Login with Email
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