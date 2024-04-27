import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ArrowLeft } from "lucide-react";

const Insert = () => {
    return ( 
        <div >
            <ArrowLeft className="ml-5 mt-5" />
            <div className="mt-5">
                <Input type="search" placeholder="Pesquisar" className=" mx-auto text-white placeholder-white  w-[366px] h-[39px] bg-gradient-to-r from-green-20 from-100% to-green-10 from-36% rounded-[25px] shadow bg-gradient-to-r from-green-20 to-green-10" />
            </div> 
            <div className="flex justify-between mt-4">
                <Card className="w-32 h-36 mt-2 ml-4 bg-white shadow-lg">
                <div className="flex flex-col items-center mt-6">
                    <img className="w-20 h-16 " src="salad.png" alt="Icone de Salada"/>
                    <h2 className="mt-3 font-semibold">Alimentos</h2>
                </div>
                </Card>
                <Card className="w-32 h-36 mt-2 bg-white shadow-lg ">
                <div className="flex flex-col items-center mt-6">
                    <img className="w-20 h-16 " src="plate.png" alt="Icone de Prato"/>
                    <h2 className="mt-3 font-semibold">Refeições</h2>
                </div>
                </Card>
                <Card className="w-32 h-36 mt-2 mr-4 bg-white shadow-lg ">
                <div className="flex flex-col items-center mt-6">
                    <img className="w-16 h-16 " src="heart.png" alt="Favoritos"/>
                    <h2 className="mt-3 font-semibold">Favoritos</h2>
                </div>
                </Card>
                </div >

        </div>

    );
}
 
export default Insert;