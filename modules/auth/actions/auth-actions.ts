
import { PrismaClient } from "@prisma/client";
import * as bcrypt from 'bcrypt';
import error from "next/error";
import { redirect } from "next/navigation";



const prisma = new PrismaClient();

async function createAccount(formData: FormData) {
    'use server';
     const name = formData.get('name') as string;
     const email = formData.get('email') as string;
     const password = formData.get('password') as string; 

     const hashedPassword = await bcrypt.hash(password, 10);

    await prisma.user.create({
        data: {
            name: name,
            email: email,
            password: hashedPassword,
        },
    });

    redirect('/login');

}


async function login(formData: FormData) {
    'use server';
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;
    
    const user = await prisma.user.findFirst({
        where: {
            email,
        },
    });
    if (!user) {
        console.log("Usuario não encontrado");
        redirect('/login');
    }
     
    const isMatch = await bcrypt.compare(password, user.password);
    
    if (!isMatch) {
        console.log('Senha incorreta');
        redirect('/login');
    }

    redirect('/logado');
    //Se o usuario e senha estiverem corretos, redireciona para a pagina de logado




}

const AuthActions = {
    createAccount,
    login
};


export default AuthActions; // Add this closing curly brace
