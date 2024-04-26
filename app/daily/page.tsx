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
    <Card className="bg-gradient-to-r from-green-600 from-10% via-green-800 to-green-900 drop-shadow-lg relative h-44 w-11/12 mx-auto mt-7  ">
          <CardDescription>
            <Progress className="mt-20 h-4 w-80 mx-auto " value={86}  />
          </CardDescription>
      </Card>
      <Footer />  
      </>
  );
};

export default daily;
