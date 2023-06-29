'use client';
import { useEffect, useState } from "react"
import { Tabs } from "flowbite";
import type { TabsOptions, TabsInterface, TabItem } from "flowbite";
import axios from "axios";
import { useDisclosure } from '@mantine/hooks';
import { Modal } from '@mantine/core';

/* eslint-disable @next/next/no-img-element */
export default function Kelas(){
    const [isLoading, setIsLoading] = useState(false);
    const [dataTerbaru,setDataTerbaru]  = useState<any>([]);
    const [dataAkanDatang,setDataAkanDatang]  = useState<any>([]);
    const [opened, { open, close }] = useDisclosure(false);
    const [dataModal,setDataModal] = useState<any>({});
    const [opened2, { open: open2, close: close2 }] = useDisclosure(false);

    useEffect(()=>{
        // create an array of objects with the id, trigger element (eg. button), and the content element
        const tabElements: TabItem[] = [
            {
                id: 'kelasTerbaru',
                triggerEl: document.querySelector('#kelasTerbaru-tab')!,
                targetEl: document.querySelector('#kelasTerbaru')!
            },
            {
                id: 'akanDatang',
                triggerEl: document.querySelector('#akanDatang-tab')!,
                targetEl: document.querySelector('#akanDatang')!
            }
        ];

        // options with default values
        const options: TabsOptions = {
            defaultTabId: 'kelasTerbaru',
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
            if(!sessionStorage.getItem('kursusTerbaru')){
                setIsLoading(true);
                try{
                    const response = await axios.get('/api/kelas');
                    const fullData = response.data;
                    let terbaru = [];
                    let akanDatang = [];
                    for(let i=0;i<fullData.length;i++){
                        if(fullData[i].status === "Ongoing"){
                            terbaru.push(fullData[i]);
                        }else if(fullData[i].status === "Coming Soon"){
                            akanDatang.push(fullData[i]);
                        }
                    }
                    console.log(terbaru);
                    console.log(akanDatang);
                    
                    const sorted = terbaru.sort((a:any,b:any)=>{
                        let aDate = new Date(a.start_date), bDate = new Date(b.start_date);
                        return bDate.getTime() - aDate.getTime();
                    });
                    const slicedLatest = sorted.slice(0,3);
                    setDataTerbaru(slicedLatest);

                    const  sortedAkanDatang = akanDatang.sort((a:any,b:any)=>{
                        let aDate = new Date(a.start_date), bDate = new Date(b.start_date);
                        return aDate.getTime() - bDate.getTime();
                    })
                    const slicedAkanDatang = sortedAkanDatang.slice(0,3);
                    setDataAkanDatang(slicedAkanDatang);
                    sessionStorage.setItem('kursus',JSON.stringify(response.data));
                    sessionStorage.setItem('kursusTerbaru',JSON.stringify(slicedLatest));
                    sessionStorage.setItem('kursusAkanDatang',JSON.stringify(slicedAkanDatang));
                }catch(error){
                    console.log(error)
                }finally{
                    setIsLoading(false);
                }
            }else{
                const sliced = JSON.parse(sessionStorage.getItem('kursusTerbaru') || '{}');
                const slicedAkanDatang = JSON.parse(sessionStorage.getItem('kursusAkanDatang') || '{}');
                setDataTerbaru(sliced);
                setDataAkanDatang(slicedAkanDatang);
            }
        }
        getAnnouncement();
    },[]);

    function openModal(item:any){
        setDataModal(item);
        open();
    }

    return(
        <div className="container bg-base lg:px-32 text-secondaryBrown">
            <Modal size={"xl"} opened={opened} onClose={close} title="Rincian Kursus" centered>
                <img src={dataModal.bigPoster} className="w-full" alt="" />
                <p className="text-secondaryBrown font-bold text-left lg:text-2xl text-lg lg:mt-5">{dataModal.judul}</p>
                <p className="text-slate-400 font-semibold text-left lg:text-[15px] text-sm lg:mt-5">Kompetensi : {dataModal.kompetensi}</p>
                <p className="text-slate-400 font-semibold text-left lg:text-[15px] text-sm">Jumlah Jam : {dataModal.jumlah_jam}</p>
                <p className="lg:text-[16px] text-sm lg:mt-4 mt-1"><span className="font-bold">Manager : </span>{dataModal.manager}</p>
                <p className="lg:text-[16px] text-sm mt-1"><span className="font-bold">Pengajar : </span>{dataModal.teacher}</p>
                <p className="lg:text-[16px] text-sm mt-1 text-justify">{dataModal.message}</p>
                <div className="mt-5">
                    <button onClick={open2} className="bg-primary text-white justify-center font-semibold w-auto p-4 rounded-md">Ikuti Kursus</button>
                </div>
            </Modal>

            <Modal size={"sm"} opened={opened2} onClose={close2} title="" centered>
                <div className="text-center">
                    <p className="text-secondaryGray text-bold lg:text-2xl text-[14px]">Login Terlebih Dahulu</p>
                    <p className="text-sm mt-2 text-slate-400">Silakan masuk melalui menu login agar dapat mengakses menu yang tersedia</p>
                    <a type="button" href="/login" className="bg-primary py-4 px-10 mt-4 font-bold text-secondaryGray rounded-md">OK</a>
                </div>
            </Modal>

            <h2 className="text-secondaryBrown font-bold text-center lg:text-3xl lg:pt-8 text-xl mb-11">Daftar Kursus</h2>
            <div className="mb-4">
                <ul className="flex flex-wrap -mb-px text-sm text-center font-semibold justify-center" id="tabExample2" role="tablist">
                    <li className="mr-2" role="presentation">
                        <button className="inline-block p-5 border-transparent rounded-md text-secondaryBrown hover:border-secondaryBrown" id="kelasTerbaru-tab" type="button" role="tab" aria-controls="kelasTerbaru" aria-selected="false">Terbaru</button>
                    </li>
                    <li className="mr-2" role="presentation">
                        <button className="inline-block p-5 border-transparent rounded-md text-secondaryBrown hover:border-secondaryBrown" id="akanDatang-tab" type="button" role="tab" aria-controls="akanDatang" aria-selected="false">Akan Datang</button>
                    </li>
                    <li className="mr-2" role="presentation">
                        <a href="/kompetensi" className="hover:bg-primary inline-block p-5 border-transparent rounded-md text-secondaryBrown hover:border-secondaryBrown" type="button">Semua Kursus</a>
                    </li>
                </ul>
            </div>
            <div className="p-4" id="tabContentExample">
                <div className="hidden p-4 rounded-lg bg-base" id="kelasTerbaru" role="tabpanel" aria-labelledby="kelasTerbaru-tab">
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
                                {dataTerbaru.map((item:any)=>(
                                    <div key={item.id} className="w-full lg:w-1/3 px-4">
                                        <div className="bg-white rounded-lg shadow-md mb-10 p-3 hover:shadow-lg transition duration-300">
                                            <img src={item.poster} alt="buat akun" className='mx-auto'/>
                                            <div className="mt-2 h-[24vh] overflow-y-hidden">
                                                <p className="font-bold text-secondaryBrown text-lg ">{item.judul}</p>
                                                <p className="font-semibold text-slate-400 text-[16px] my-1">Kompetensi : {item.kompetensi}</p>
                                                <p className="font-semibold text-slate-400 text-[16px] my-1">Jumlah Jam : {item.jumlah_jam}</p>
                                            </div>
                                                <button onClick={()=>openModal(item)} className="bg-primary text-secondaryBrown justify-center font-semibold w-full p-2 rounded-lg">Selengkapnya</button>
                                        </div>
                                    </div>
                                ))}
                            </>
                        )}
                    </div>
                </div>
                <div className="hidden p-4 rounded-lg bg-base" id="akanDatang" role="tabpanel" aria-labelledby="akanDatang-tab">
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
                                {dataAkanDatang.map((item:any)=>(
                                    <div key={item.id} className="w-full lg:w-1/3 px-4">
                                        <div className="bg-white rounded-lg shadow-md mb-10 p-3 hover:shadow-lg transition duration-300">
                                            <img src={item.poster} alt="buat akun" className='mx-auto'/>
                                            <div className="mt-2 h-[24vh] overflow-y-hidden">
                                                <p className="font-bold text-secondaryBrown text-lg ">{item.judul}</p>
                                                <p className="font-semibold text-slate-400 text-[16px] my-1">Kompetensi : {item.kompetensi}</p>
                                                <p className="font-semibold text-slate-400 text-[16px] my-1">Jumlah Jam : {item.jumlah_jam}</p>
                                            </div>
                                            <button onClick={()=>openModal(item)} className="bg-primary text-secondaryBrown justify-center font-semibold w-full p-2 rounded-lg">Selengkapnya</button>
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