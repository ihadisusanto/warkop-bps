import { PrismaClient,Prisma } from "@prisma/client";
import { NextResponse } from "next/server";

export async function POST(request:Request) {
    try{
        const prisma = new PrismaClient();
        const data = await request.json();
        const {
            username,
            password,
            nama_depan,
            nama_belakang,
            email,
            gender,
            education,
            nik,
            lembaga,
            unit_kerja
        }=data;
        const result = await prisma.user.create({
            data:{
                username,
                password,
                nama_depan,
                nama_belakang,
                email,
                gender,
                education,
                nik,
                lembaga,
                unit_kerja
            }
        });
        prisma.$disconnect();
        return NextResponse.json(result);
    }catch(err:any){
        if(err instanceof Prisma.PrismaClientKnownRequestError){
            if(err.code === 'P2002'){
                return new NextResponse('Email sudah digunakan, mohon gunakan email lain',{status:400})
            }else{
                return new NextResponse('Internal Error',{status:500})
            }
        }else{
            console.log("Register Error",err);
        }
        
        return new NextResponse('Internal Error',{status:500})
    }
}