import Footer from "@/components/components/footer";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Card, CardDescription } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Bell, HelpCircle } from "lucide-react";

const daily = () => {
  return (
    
    <>
    <div className="flex items-center">
    <div className="mr-4 mt-12">
        <Avatar className="bg-lime-600 outline-double outline-lime-600 mt- ml-4 w-14 h-14">
        <AvatarImage src="useravatar.png" />    
        </Avatar>
    </div>
    <div className="mt-8">
        <h1 className="mt-4 text-xl font-medium">Olá, Eduarda!</h1>
        <p className="text-sm font-light">Quinta, 25 de Abril</p> 
    </div>
    <div className="ml-auto flex items-center">
        <Bell className="mr-5"/>
        <HelpCircle className="mr-6"/>
    </div>
</div>
<Card className="bg-gradient-to-r from-green-600 from-10% via-green-800 to-green-900 drop-shadow-lg relative h-44 w-11/12 mx-auto mt-7">
    <CardDescription className="absolute top-0 left-0 text-white font-semibold text-xs mt-16 ml-8">
        86%
    </CardDescription>
    <CardDescription className="absolute top-0 right-0 text-white font-semibold text-lg mt-9 mr-8">
        <span className="text-white">2151</span>/<span className="text-primary">2500</span>     
    </CardDescription>
    <CardDescription className="absolute top-0 right-0 text-white font-semibold text-base mt-14 mr-8">
        Kcal
    </CardDescription>
    <Progress className="mt-20 h-4 w-80 mx-auto" value={86} />
    <CardDescription className="absolute bottom-0 left-0 text-white font-semibold text-base ml-8 mb-6">
        Proteínas
    </CardDescription>
    <CardDescription className="absolute bottom-0 left-0 text-white font-semibold text-sm ml-12 mb-2">
        230 gr
    </CardDescription>
    <CardDescription className="absolute bottom-0 text-white font-semibold text-base text-center mb-6" style={{ left: '50%', transform: 'translateX(-50%)' }}>
        Carboidratos
    </CardDescription>
    <CardDescription className="absolute bottom-0 text-white font-semibold text-sm text-center mb-2" style={{ left: '50%', transform: 'translateX(-50%)' }}>
        100 gr
    </CardDescription>
    <CardDescription className="absolute bottom-0 right-0 text-white font-semibold text-base mr-8 mb-6">
        Gorduras
    </CardDescription>
    <CardDescription className="absolute bottom-0 right-0 text-white font-semibold text-sm mr-12 mb-2">
        77 gr
    </CardDescription>
</Card>

      <Footer />  
      </>
  );
};

export default daily;
