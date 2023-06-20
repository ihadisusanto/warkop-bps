'use client';
/* eslint-disable @next/next/no-img-element */

import { useEffect, useState } from "react";
import axios from "axios";
import LoadingPengumuman from './component/loadingPengumuman';
import BoxPengumuman from "./component/boxPengumuman";
import clsx from "clsx";

export default function ListPengumuman(){
    const [isLoading, setIsLoading] = useState(false);
    const [data,setData]  = useState([]);
    const [oldestData, setOldestData] = useState([]);
    const [sort, setSort] = useState("terbaru");
    const [searchData, setSearchData] = useState([]);
    useEffect(()=>{
        const getAnnouncement=async()=>{
            if(!sessionStorage.getItem('pengumuman')){
                setIsLoading(true);
                try{
                    const response = await axios.get('/api/getpengumuman');
                    sessionStorage.setItem('pengumuman',JSON.stringify(response.data));
                    console.log(response.data);
                    setData(response.data);
                }catch(error){
                    console.log(error)
                }finally{
                    setIsLoading(false);
                }
            }else{
                setData(JSON.parse(sessionStorage.getItem('pengumuman') || '{}'));
            }
        }
        getAnnouncement();
    },[])

    const onDateSort=async(e:any)=>{
        if(e.target.value === 'terlama'){
            sortByDateOldest();
        }else{
            sortByDateLatest();
        }
    }

    function sortByDateLatest(){
        const sorted = data.sort((a:any,b:any)=>{
            let aDate = new Date(a.tanggal), bDate = new Date(b.tanggal);
            return bDate.getTime() - aDate.getTime();
        });
        setSort("terbaru")
        setData(sorted);
    }

    function sortByDateOldest(){
        const sorted = data.sort((a:any,b:any)=>{
            let aDate = new Date(a.tanggal), bDate = new Date(b.tanggal);
            return aDate.getTime() - bDate.getTime();
        });
        setSort("terlama");
        setOldestData(sorted);
    }

    function searchAnnounce(e:any){
        const keyword = e.target.previousSibling.value;
        const filtered = data.filter((item:any)=>{
            return item.judul.toLowerCase().includes(keyword.toLowerCase());
        })
        setSort("search")
        setSearchData(filtered);
    }

    return(
        <>
            <div className="h-auto mt-24 w-full p-5 lg:p-10 lg:flex lg:justify-between shadow-lg mb-1">
                <p className="text-secondaryBrown font-bold text-2xl lg:text-4xl">Pengumuman Umum</p>
                <div className="w-full lg:w-2/5 flex flex-wrap justify-center lg:justify-end">
                    <input id="keyword" type="text" placeholder="Cari berdasarkan Topik" className="bg-gray-100 placeholder:text-sm placeholder:lg:text-[16px] outline-none border-none my-3 lg:my-0 text-lg md:text-[16px] w-full rounded-md lg:w-2/3 p-2 focus:shadow-none focus:border focus:border-secondaryBrown lg:mr-3"/>
                    <button onClick={searchAnnounce} className="bg-primary text-secondaryBrown text-lg font-bold p-3 rounded-md w-full lg:w-1/5 focus:border-transparent">Cari</button>
                </div>
            </div>
            <div className="h-auto w-full p-8 bg-base lg:flex justify-between">
                <div className="w-1/2 lg:w-1/5 h-28 lg:h-36 block bg-white shadow-lg">
                    <div className="bg-primary p-2">
                        <p className="text-secondaryBrown font-semibold text-sm lg:text-lg">Urut Berdasarkan</p>
                    </div>
                    <div className="p-1">
                        <input onChange={onDateSort} type="radio" name="radio" id="terbaru" className="mx-2 checked:text-secondaryBrown checked:bg-secondaryBrown focus:ring-transparent" value="terbaru"/>
                        <label htmlFor="terbaru" className="text-secondaryBrown text-sm lg:text-lg">Terbaru</label>
                    </div>
                    <div className="p-1">
                        <input  onChange={onDateSort} type="radio" name="radio" id="terlama" className="mx-2 checked:text-secondaryBrown checked:bg-secondaryBrown focus:ring-transparent" value="terlama"/>
                        <label htmlFor="terlama" className="text-secondaryBrown text-sm lg:text-lg">Terlama</label>
                    </div>
                </div>
                <div  className={clsx("w-full mt-2 lg:mt-0 lg:w-3/4 lg:flex lg:flex-wrap",searchData.length==0 && "justify-center")}>
                    {isLoading ? (
                        <LoadingPengumuman/>
                    ) : (
                        <BoxPengumuman data={sort === "search" ? searchData : sort==="terbaru" ? data : oldestData}/>
                    )}                   
                </div>
            </div>
        </>
    )
}