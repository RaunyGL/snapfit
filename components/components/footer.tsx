"use-client"
import { Camera, Leaf, MoreVertical, Salad, TrendingUp } from "lucide-react";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";

const Footer = () => {
  return (
    <div className="fixed bottom-10 w-full">

    <Card className="mx-auto from-33% ... h-24 w-11/12 bg-gradient-to-r from-green-20 from-100% to-green-10 from-36% drop-shadow-lg relative">
      <CardContent>
        <div className=" flex justify-between items-center">
          <div className="mt-4 flex flex-col items-center">
          <Button className="text-lime-500" variant="link" size="icon">
            <Leaf size={35} />
          </Button>
          <h1 className="text-white text-sm">Diário</h1>
          </div>
          <div className="mt-4 mr-10 flex flex-col items-center">
          <Button className="text-white" variant="link" size="icon">
            <TrendingUp size={35} strokeWidth={2} />
          </Button>
          <h1 className="text-white text-sm">Evolução</h1>
          </div>
          <div className="absolute -top-9 left-1/2  -translate-x-1/2">
          <Button className="text-white p-2 bg-gradient-to-r from-green-20 from-100% to-green-10 from-36% drop-shadow-lg w-20 h-20 rounded-full" variant="link" size="icon">
            <Camera size={52} strokeWidth={1.5} />
          </Button>
          </div>
          <div className=" mt-4 ml-10 flex flex-col items-center">
          <Button className="text-white" variant="link" size="icon">
            <Salad size={35} strokeWidth={1.5} />
          </Button>
          <h1 className="text-white text-sm">Receitas</h1>
          </div>
          <div className="mt-4 flex flex-col items-center">
          <Button className="text-white" variant="link" size="icon">
            <MoreVertical size={35} />
          </Button>
          <h1 className="text-white text-sm">Opções</h1>
          </div>
        </div>
      </CardContent>
    </Card>
    </div>
  );
};

export default Footer;
