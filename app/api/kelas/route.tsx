import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export async function POST(request:Request) {
    try{
        const prisma = new PrismaClient();
        const data = await request.json();
        const {
            jumlah_jam,
            judul,
            tanggal_mulai,
            tanggal_selesai,
            teacher,
            manager,
            message,
            status,
            poster,
            bigPoster,
            kompetensi,
            subKompetensi
        } = data;
        const start_date = new Date(data.start_date);
        const end_date = new Date(data.end_date);
        const result = await prisma.kelas.create({
            data:{
                jumlah_jam,
                judul,
                tanggal_mulai,
                tanggal_selesai,
                start_date,
                end_date,
                teacher,
                manager,
                message,
                status,
                poster,
                bigPoster,
                kompetensi,
                subKompetensi
            }
        });
        prisma.$disconnect();
        return NextResponse.json(result);
    }catch(error:any){
        console.log("Input Class Error",error);
        return new NextResponse('Internal Error',{status:500})
    }
}

export async function GET(){
    try{
        const prisma = new PrismaClient();
        const result = await prisma.kelas.findMany();
        prisma.$disconnect();
        return NextResponse.json(result);
    }catch(error:any){
        console.log("Get Class Error",error);
        return new NextResponse('Internal Error',{status:500})
    }
}