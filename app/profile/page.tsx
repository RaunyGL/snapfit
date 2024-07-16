"use client"
import React from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import Footer from "@/components/components/footer";
import { useSession } from "next-auth/react";

const profile = () => {
  const {data} = useSession()
  return (
    <>
      <div className="top-0 w-full h-10 bg-white shadow">
        <div className="flex items-center justify-between px-4">
        <Link href="/daily">
          <Button className="bg-transparent">
            <ArrowLeft color="black" />
          </Button>
        </Link>
          <div className="text-black text-[15px] font-bold ml-72">Editar</div>
        </div>
      </div>
      <div>
        <Card className="mt-2 bg-green-800 w-[409px] h-[317px] mx-auto shadow-xl">
          <div className="text-center flex flex-col items-center justify-center">
            <Avatar className="mt-2 w-[175px] h-[179px]">
              <AvatarImage src={data?.user?.image ?? ''} />
            </Avatar>
            <p className="mt-2 text-white text-xl">{data?.user?.name}</p>
            <p className="text-white text-sm">Pelotas, RS</p>
            <Card className="mt-2 bg-[#A2ED3A] w-[137px] h-[45px] flex flex-col items-center justify-center">
              <p className="text-black text-sm mt-2">Seja Premium</p>
              <img
                src="/dark-crown.svg"
                alt="Seja premium"
                className="w-6 h-6 mb-2"
              />
            </Card>
          </div>
        </Card>
      </div>
      <div className="flex justify-between px-14 mt-4">
        <Card className="bg-[#181818] w-[90px] h-[90px] flex flex-col justify-around items-center rounded-2xl">
          <p className="text-[#A2ED3A] mt-2">1,70</p>
          <p className="text-white text-sm mb-4">Altura(m)</p>
        </Card>
        <Card className="bg-[#181818] w-[90px] h-[90px] flex flex-col justify-around items-center rounded-2xl">
          <p className="text-[#A2ED3A] mt-2">90Kg</p>
          <p className="text-white text-sm mb-4">Peso</p>
        </Card>
        <Card className="bg-[#181818] w-[90px] h-[90px] flex flex-col justify-around items-center rounded-2xl">
          <p className="text-[#A2ED3A] mt-2">31.14</p>
          <p className="text-white text-sm mb-4">IMC (atual)</p>
        </Card>
      </div>
      <div className="flex justify-center mt-4">
        <Card className="bg-[#FFFFFF] w-[409px] h-[265px] rounded-[30px] shadow-xl">
          <div className="flex justify-between items-center p-4">
            <h2 className="text-black text-lg font-semibold">Dados Básicos</h2>
            <img src="/green-pencil.svg" alt="Planos" className="w-6 h-6" />
          </div>
          <div className="flex justify-center">
            <div className="w-[389px] h-[1px] bg-black opacity-60"></div>
          </div>
          <div className="mt-4 px-4">
            <p className="mt-4 font-medium">Objetivo: Perda de peso</p>
            <p className="mt-4 font-medium">Endereço: Av. Bento Gonçalves, 432, apto 301</p>
            <p className="mt-4 font-medium">Cidade/País: Pelotas, RS/Brazil</p>
            <p className="mt-4 font-medium">Idade: 25 anos</p>
            <p className="mt-4 font-medium">Sexo: Feminino</p>
          </div>
        </Card>
      </div>
      <Footer />
    </>
  );
};

export default profile;
