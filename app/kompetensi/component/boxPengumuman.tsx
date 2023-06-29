import Link from "next/link"
import { useEffect } from "react"

/* eslint-disable @next/next/no-img-element */
export default function boxPengumuman(data:any){
    return(
        <>
            {data.data.length === 0 ? 
                (
                    <div className="flex lg:h-[50vh] screen-h items-center text-center">
                        <p className="text-xl font-bold text-secondaryBrown">Tidak ada pengumuman</p> 
                    </div>
                )
                :
                data.data.map((item:any)=>(
                    <div key={item.id} className="w-full lg:w-1/3 px-4">
                        <div className="bg-white rounded-lg shadow-md mb-10 p-3 hover:shadow-lg transition duration-300">
                            <img src={item.poster} alt="Akun" className='mx-auto'/>
                            <div className="mt-2 h-[24vh] lg:h-[24vh] overflow-y-hidden">
                                <p className="font-semibold text-sm text-gray-400 my-1">{item.waktu}</p>
                                <p className="font-bold text-secondaryBrown text-lg ">{item.judul}</p>
                                <span className="text-gray-400 font-medium text-[14px] my-1">{item.isi}</span>
                            </div>
                                <p className="text-primary font-semibold"><Link href={`/pengumuman/${item.id}`}>Lihat Selengkapnya...</Link></p>
                        </div>
                    </div>
                ))
            }
        </>
    )
}