import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export async function GET(request:Request) {
    try{
        const prisma = new PrismaClient();
        const result = await prisma.pengumuman.findMany();
        return NextResponse.json(result);
    }catch(error){
        console.log("Get Announcement Error",error);
        return new NextResponse('Internal Error',{status:500})
    }
}