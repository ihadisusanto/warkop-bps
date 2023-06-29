import { PrismaClient,Prisma } from "@prisma/client";
import { NextResponse } from "next/server";

export async function POST(request:Request) {
    try{
        const prisma = new PrismaClient();
        const data = await request.json();
        const {email,password} = data;

        const result = await prisma.user.findUnique({
            where:{
                email: email,
            }
        })
        if(result){
            if(result.password === password){
                return new NextResponse(result.email,{status:200});
            }else{
                return new NextResponse('Email atau Password salah',{status:400});
            }
        }
        prisma.$disconnect();
    }catch(err:any){
        if(err  instanceof Prisma.PrismaClientKnownRequestError){
            if(err.code === "P2001"){
                return new NextResponse('Email atau Password salah',{status:400});
            }else{
                return new NextResponse('Internal Error',{status:500});
            }
        }else{
            console.log("Login Error",err);
        }
        return new NextResponse('Internal Error',{status:500});
    }
}