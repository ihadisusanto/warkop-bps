import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export async function POST(request:Request) {
    try{
        const prisma = new PrismaClient();
        const data = await request.json();
        const {
            judul,
            status,
            waktu,
            poster,
            posterBesar,
            author,
            isi
        }=data;
        const result = await prisma.pengumuman.create({
            data:{
                judul,
                status,
                waktu,
                poster,
                posterBesar,
                author,
                isi
            }
        });
        return NextResponse.json(result);
    }catch(error:any){
        console.log("Input Announcement Error",error);
        return new NextResponse('Internal Error',{status:500})
    }
}