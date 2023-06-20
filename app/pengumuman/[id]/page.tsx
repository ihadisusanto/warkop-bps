'use client';
import Footer1st from "@/app/components/footer1st/page";
import Footer2nd from "@/app/components/footer2nd/page";
import Header from "@/app/components/header/page";
import Details from "./details";

export default function PengumumanPage(
    { params }: { params: { id: string } }
){
    return(
        <>
            <Header title="Pengumuman"/>
            <Details id={params}/>
            <Footer2nd/>
            <Footer1st/>
        </>
    )
}