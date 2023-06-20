'use client';
import { useEffect, useState } from "react"
import { Tabs } from "flowbite";
import type { TabsOptions, TabsInterface, TabItem } from "flowbite";
import poster from '@/public/img/Thumbnail Kursus 1 Small.png';
import axios from "axios";
import Link from "next/link";

/* eslint-disable @next/next/no-img-element */
export default function Pengumuman() {
    const [isLoading, setIsLoading] = useState(false);
    const [data,setData]  = useState([]);
    useEffect(()=>{
        // create an array of objects with the id, trigger element (eg. button), and the content element
        const tabElements: TabItem[] = [
            {
                id: 'terbaru',
                triggerEl: document.querySelector('#terbaru-tab')!,
                targetEl: document.querySelector('#terbaru')!
            },
        ];

        // options with default values
        const options: TabsOptions = {
            defaultTabId: 'terbaru',
            activeClasses: 'text-secondaryBrown font-bold bg-primary border-secondaryBrown',
            inactiveClasses: 'text-secondaryBrown hover:bg-primary',
            onShow: () => {
                console.log('tab is shown');
            }
        };

        /*
        * tabElements: array of tab objects
        * options: optional
        */
        const tabs: TabsInterface = new Tabs(tabElements, options);

        const getAnnouncement=async()=>{
            if(!sessionStorage.getItem('pengumuman')){
                setIsLoading(true);
                try{
                    const response = await axios.get('/api/getpengumuman');
                    const sliced = response.data.slice(0,3);
                    setData(sliced);
                    sessionStorage.setItem('pengumuman',JSON.stringify(response.data));
                }catch(error){
                    console.log(error)
                }finally{
                    setIsLoading(false);
                }
            }else{
                const sliced = JSON.parse(sessionStorage.getItem('pengumuman') || '{}').slice(0,3);
                setData(sliced);
            }
        }
        getAnnouncement();
    },[]);

    return(
        <div className="container bg-base lg:px-32 text-secondaryBrown">
            <h2 className="text-secondaryBrown font-bold text-center lg:text-3xl lg:pt-8 text-xl mb-11">Pengumuman Umum</h2>
            <div className="mb-4">
                <ul className="flex flex-wrap -mb-px text-sm text-center font-semibold justify-center" id="tabExample" role="tablist">
                    <li className="mr-2" role="presentation">
                        <button className="inline-block p-5 border-transparent rounded-md text-secondaryBrown hover:border-secondaryBrown" id="terbaru-tab" type="button" role="tab" aria-controls="terbaru" aria-selected="false">Pengumuman Terbaru</button>
                    </li>
                    <li className="mr-2" role="presentation">
                        <a href="/pengumuman" className="hover:bg-primary inline-block p-5 border-transparent rounded-md text-secondaryBrown hover:border-secondaryBrown" type="button">Semua Pengumuman</a>
                    </li>
                </ul>
            </div>
            <div className="p-4" id="tabContentExample">
                <div className="hidden p-4 rounded-lg bg-base" id="terbaru" role="tabpanel" aria-labelledby="terbaru-tab">
                    <div className="flex flex-wrap">
                        {isLoading ? (
                            <>
                                <div className="w-full lg:w-1/3 px-4">
                                    <div className="bg-white rounded-lg shadow-md mb-10 p-3 animate-pulse">
                                        <div className="bg-gray-300 h-[16vh] rounded-md"></div>
                                        <div className="mt-2">
                                            <div className="h-6 w-11/12 rounded-md bg-gray-300 mb-2"></div>
                                            <div className="h-6 w-11/12 rounded-md bg-gray-300 mb-2"></div>
                                            <div className="h-6 w-11/12 rounded-md bg-gray-300 mb-2"></div>
                                        </div>
                                            <div className="h-6 w-11/12 rounded-md bg-gray-300 mb-2"></div>
                                    </div>
                                </div>
                                <div className="w-full lg:w-1/3 px-4">
                                    <div className="bg-white rounded-lg shadow-md mb-10 p-3 animate-pulse">
                                        <div className="bg-gray-300 h-[16vh] rounded-md"></div>
                                        <div className="mt-2">
                                            <div className="h-6 w-11/12 rounded-md bg-gray-300 mb-2"></div>
                                            <div className="h-6 w-11/12 rounded-md bg-gray-300 mb-2"></div>
                                            <div className="h-6 w-11/12 rounded-md bg-gray-300 mb-2"></div>
                                        </div>
                                            <div className="h-6 w-11/12 rounded-md bg-gray-300 mb-2"></div>
                                    </div>
                                </div>
                                <div className="w-full lg:w-1/3 px-4">
                                    <div className="bg-white rounded-lg shadow-md mb-10 p-3 animate-pulse">
                                        <div className="bg-gray-300 h-[16vh] rounded-md"></div>
                                        <div className="mt-2">
                                            <div className="h-6 w-11/12 rounded-md bg-gray-300 mb-2"></div>
                                            <div className="h-6 w-11/12 rounded-md bg-gray-300 mb-2"></div>
                                            <div className="h-6 w-11/12 rounded-md bg-gray-300 mb-2"></div>
                                        </div>
                                            <div className="h-6 w-11/12 rounded-md bg-gray-300 mb-2"></div>
                                    </div>
                                </div>
                            </>
                        ) : (
                            <>
                                {data.map((item:any)=>(
                                    <div key={item.id} className="w-full lg:w-1/3 px-4">
                                        <div className="bg-white rounded-lg shadow-md mb-10 p-3 hover:shadow-lg transition duration-300">
                                            <img src={item.poster} alt="buat akun" className='mx-auto'/>
                                            <div className="mt-2 h-[24vh] overflow-y-hidden">
                                                <p className="font-semibold text-sm text-gray-400 my-1">{item.waktu}</p>
                                                <p className="font-bold text-secondaryBrown text-lg ">{item.judul}</p>
                                                <span className="text-gray-400 font-medium text-[14px] my-1">{item.isi}</span>
                                            </div>
                                                <p className="text-primary font-semibold"><Link href={`/pengumuman/${item.id}`}>Lihat Selengkapnya...</Link></p>
                                        </div>
                                    </div>
                                ))}
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}