/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @next/next/no-img-element */
'use client';

import { useEffect, useState } from "react";
import adminImage from "@/public/asset/Icon User ChatBot.png";
import Link from "next/link";


export default function details(id:any){
    const [announcement, setAnnouncement] = useState({
        id:"",
        judul:"",
        status:"",
        waktu:"",
        tanggal:"",
        poster:"",
        posterBesar:"",
        isi:"",
        author:""

    });
    useEffect(()=>{
        const data = JSON.parse(sessionStorage.getItem('pengumuman') || '{}');
        setAnnouncement(data.find((item:any)=>item.id == id.id.id))
    },[])
    console.log(announcement);
    return(
        <>
            <div className="w-full mt-24 lg:px-8 shadow-xl bg-base py-10">
                <div className="bg-white rounded-lg shadow-md mb-10 p-3 hover:shadow-lg transition duration-300">
                    <div className="mt-2 lg:h-auto overflow-y-hidden">
                        <p className="font-bold text-secondaryBrown lg:text-2xl my-2">{announcement.judul}</p>
                        <div className="lg:flex items-center my-4">
                            <img src={adminImage.src} alt="image admin"/>
                            <p className="font-semibold text-sm text-secondaryBrown ml-1">{announcement.author}</p>
                            <p className="hidden lg:block lg:ml-1">|</p>
                            <p className="font-semibold text-sm text-secondaryBrown ml-1">{announcement.waktu}</p>
                        </div>
                        <img src={announcement.posterBesar} alt="poster" />
                        <p className="mt-2 text-secondaryGray lg:text-lg text-justify">{announcement.isi}</p>
                    </div>
                    <button className="bg-primary mt-4 p-3 rounded-lg text-white"><Link href="/pengumuman">Kembali</Link></button>
                </div>
            </div>
        </>
    )
}