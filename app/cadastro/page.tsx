import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import AuthActions from "@/modules/auth/actions/auth-actions";


const Header = () => {
    return (
        <div className="fixed top-0 w-full h-10 bg-gradient-to-br from-green-20 from-100% to-green-10 from-40% shadow">
            <div className="flex justify-center items-center relative">
                <Link href="/login">
                    <Button className="fixed left-0 bg-transparent top-2">
                        <ArrowLeft color="white" />
                    </Button>
                </Link>
                <h1 className="text-white text-[15px] font-bold mt-3">Cadastro</h1>
            </div>
        </div>
    );
};

const Login = () => {
    return (
        <><div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-green-20 from-100% to-green-10 from-15%">
            <Header />
            <div className="mt-[-200px] w-80">
                <img src="snap-logo2.png" alt="" />
            </div>
        <form action={AuthActions.createAccount}>
            <div className="">
                <div>
                    <Input id="name" required name="name"
                        type="name"
                        placeholder="Nome"
                        className="w-[349px] h-[46px] bg-white rounded-[25px]  mt-16 font-bold border-2 text-sm border-transparent focus:border-lime-400" />

                    <Input
                        type="email" id="email" required name="email"
                        placeholder="E-mail"
                        className="w-[349px] h-[46px] bg-white rounded-[25px] mt-7 font-bold border-2 text-sm border-transparent focus:border-lime-400" />
                </div>
                <div>
                    <Input
                        type="password" id="password" required name="password"
                        placeholder="Senha"
                        className="w-[349px] h-[46px] bg-white rounded-[25px]  mt-7 font-bold border-2 text-sm border-transparent focus:border-lime-400" />
                </div>
            </div>
            <div>
                <Button  type="submit" className="w-[349px] h-[46px] bg-lime-400 hover:bg-lime-500 rounded-[15px] text-sm mt-10 flex justify-center text-black font-extrabold">
                    Confirmar
                </Button>
            </div>
            
        </form>
           
            
        </div>
        
        
        
        </>
    );
};

export default Login;