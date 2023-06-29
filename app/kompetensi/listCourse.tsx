'use client'
import { useState, useEffect } from "react";
import arrowDown from "@/public/asset/Arrow Down.png";
import arrowUp from "@/public/asset/Arrow Up.png";
import LoadingPengumuman from './component/loadingPengumuman';
import BoxPengumuman from "./component/boxPengumuman";
import axios from "axios";
import clsx from "clsx";

const linkCompts = ["Semua Jenis Kompetensi", "Microlearning", "Kompetensi Teknis", "Kompetensi Manajerial", "Kompetensi Sosio Kultural"]

export default function CompType() {
  const [selectedCompts, setSelectedCompts] = useState("");
  const [openCompts, setOpenCompts] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [searchData, setSearchData] = useState([]);
  const [sort, setSort] = useState("terbaru");
  const [data,setData]  = useState([]);
  const [oldestData, setOldestData] = useState([]);

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
      if(e.target.value === 'semua'){
          sortByDateOldest();
      }else if(e.target.value === 'terbaru'){
          sortByDateLatest();
      } else if(e.target.value === 'nanti'){
          sortByDateComing();
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

  function sortByDateComing(){
      const sorted = data.sort((a:any,b:any)=>{
          let aDate = new Date(a.tanggal), bDate = new Date(b.tanggal);
          return bDate.getTime() - aDate.getTime();
      });
      setSort("nanti")
      setData(sorted);
  }

  function sortByDateOldest(){
      const sorted = data.sort((a:any,b:any)=>{
          let aDate = new Date(a.tanggal), bDate = new Date(b.tanggal);
          return aDate.getTime() - bDate.getTime();
      });
      setSort("semua");
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

  return (
    <div>
        <div className="mt-12 lg:mt-24 px-4 md:px-8 pt-12 lg:pt-4 pb-6">
            <h1 className="text-secondaryBrown font-bold text-5xl my-3">Daftar Menu Pembelajaran</h1>
            <p className="text-darkbrown text-justify">Warung Kompetensi Pegawai menyediakan berbagai Menu Pembelajaran yang bisa kalian ikuti. Selesaikan kelas anda dan dapatkan sertifikat kompetensi berbentuk digital</p>
        </div>
        <div className="mt-4 px-4 md:px-8 pb-6 md:flex justify-between items-center space-y-8 md:space-y-0">
            <div className="relative w-full md:w-1/3 md:block hidden">
              <div onClick={() => setOpenCompts(!openCompts)} className="bg-gray-100 flex justify-between items-center w-full rounded-md cursor-pointer p-3">
                <p className="text-gray-500">Jenis Kompetensi</p>
                {openCompts ? <img src={arrowUp.src} alt="" className="inline" /> : <img src={arrowDown.src} alt="" className="inline" />}
              </div>
              <ul onClick={() => setOpenCompts(!openCompts)} className={`bg-white mt-2 shadow-md rounded-md border-gray-100 border ${openCompts ? 'absolute w-full z-10' : 'hidden'}`}>
                  {linkCompts.map((linkCompts) => (
                      <li onClick={() => {setSelectedCompts(linkCompts);}} className={`hover:bg-base p-2 rounded-md cursor-pointer ${selectedCompts==linkCompts ? 'text-primary border-l-4 border-primary' : ''}`}>
                          {linkCompts}
                      </li>
                  ))}
              </ul>
            </div>
            <form className="w-full md:w-2/5 md:flex justify-between items-center md:space-x-2 space-y-2 md:space-y-0">
              <input type="text" className="p-3 bg-gray-100 w-full border-none rounded-md focus:ring-secondaryBrown" placeholder="Cari Menu Pembelajaran"/>
              <button onClick={searchAnnounce} className="bg-primary text-secondaryBrown py-3 w-full md:w-1/4 rounded-md font-semibold text-center">Cari</button>
            </form>
            <div className="relative w-full md:w-1/3 md:hidden block">
              <div onClick={() => setOpenCompts(!openCompts)} className="bg-gray-100 flex justify-between items-center w-full rounded-md cursor-pointer p-3">
                <p className="text-gray-500">Jenis Kompetensi</p>
                {openCompts ? <img src={arrowUp.src} alt="" className="inline" /> : <img src={arrowDown.src} alt="" className="inline" />}
              </div>
              <ul onClick={() => setOpenCompts(!openCompts)} className={`bg-white mt-2 shadow-md rounded-md border-gray-100 border ${openCompts ? 'absolute w-full z-10' : 'hidden'}`}>
                  {linkCompts.map((linkCompts) => (
                      <li onClick={() => {setSelectedCompts(linkCompts);}} className={`hover:bg-base p-2 rounded-md cursor-pointer ${selectedCompts==linkCompts ? 'text-primary border-l-4 border-primary' : ''}`}>
                          {linkCompts}
                      </li>
                  ))}
              </ul>
            </div>
        </div>
        <div className="bg-base p-4 md:p-8 lg:flex justify-between items-start space-x-0 lg:space-x-4 space-y-4 md:space-y-0">
          <div className="w-full lg:w-1/4 mb-4 border border-gray-100 shadow-md rounded-b-md">
            <div className="w-full bg-primary text-secondaryBrown p-4 rounded-t-md font-bold">
              Urutkan Berdasarkan
            </div>
            <div className="w-full p-4 bg-white">
              <div className="flex space-x-2 text-secondaryBrown font-semibold">
                <input onChange={onDateSort} type="radio" id="semua" name="RadioSort" value="semua" className="mt-1 text-primary relative mr-1 rounded-sm border-secondaryBrown checked:border-secondaryBrown checked:focus:border-secondaryBrown checked:hover:border-secondaryBrown checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:bg-primary checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer focus:ring-transparent"/>
                <label htmlFor="semua" className="hover:cursor-pointer">Semua</label>
              </div>
              <div className="flex space-x-2 text-secondaryBrown font-semibold">
                <input onChange={onDateSort} type="radio" id="terbaru" name="RadioSort" value="terbaru" className="mt-1 text-primary relative mr-1 rounded-sm border-secondaryBrown checked:border-secondaryBrown checked:focus:border-secondaryBrown checked:hover:border-secondaryBrown checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:bg-primary checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer focus:ring-transparent"/>
                <label htmlFor="terbaru" className="hover:cursor-pointer">Terbaru</label>
              </div>
              <div className="flex space-x-2 text-secondaryBrown font-semibold">
                <input onChange={onDateSort} type="radio" id="nanti" name="RadioSort" value="nanti" className="mt-1 text-primary relative mr-1 rounded-sm border-secondaryBrown checked:border-secondaryBrown checked:focus:border-secondaryBrown checked:hover:border-secondaryBrown checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:bg-primary checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer focus:ring-transparent"/>
                <label htmlFor="nanti" className="hover:cursor-pointer">Akan Datang</label>
              </div>
            </div>

            <div>
                
            </div>
          </div>

          <div  className={clsx("w-full mt-2 lg:mt-0 lg:w-3/4 lg:flex lg:flex-wrap lg:px-0",searchData.length==0 && "justify-center")}>
              {isLoading ? (
                  <LoadingPengumuman/>
              ) : (
                  <BoxPengumuman data={sort === "search" ? searchData : sort === "terbaru" ? data : sort === "nanti" ? data : oldestData}/>
              )}                   
          </div>
        </div>
    </div>
  )
}
