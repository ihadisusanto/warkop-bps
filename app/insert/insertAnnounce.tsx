'use client';
import axios from 'axios';
import { useState } from 'react';

export default function insertAnnounce(){
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [isLoading,setIsLoading] = useState(false);

    function handleSubmit(e:any){
        setIsLoading(true);
        e.preventDefault();
        const data = {
            judul:e.target.judul.value,
            status:e.target.status.value,
            waktu:e.target.waktu.value,
            tanggal:e.target.tanggal.value,
            poster:e.target.poster.value,
            posterBesar:e.target.posterBesar.value,
            isi:e.target.isi.value,
            author:e.target.author.value
        }
        axios.post('/api/pengumuman',data)
        .then((response)=>{
            console.log(response);
        })
        .catch((error)=>{
            console.log(error);
        })
        .finally(()=>setIsLoading(false));
    }
    return(
        <div className="h-auto mt-24 lg:px-16 lg:py-16 bg-base flex">
                <div className="bg-white mt-10 w-full lg:w-1/2 m-auto p-8">
                    <h3 className="text-center text-2xl font-bold text-secondaryBrown">INSERT ANNOUNCEMENT</h3>
                    <form onSubmit={handleSubmit}>
                        <div className="relative mt-3 w-full lg:w-2/3 mx-auto">
                            <label className="font-semibold text-secondaryBrown" htmlFor="judul">Judul Pengumuman</label>
                            <input type="text" name="judul" id="judul" className="bg-gray-50 border border-gray-300 text-secondaryBrown text-sm rounded-lg focus:ring-2 focus:ring-secondaryBrown focus:outline-none block w-full pl-4 p-2.5 transition duration-300" placeholder=""/>
                        </div>
                        <div className="relative mt-3 w-full lg:w-2/3 mx-auto">
                            <label className="font-semibold text-secondaryBrown" htmlFor="status">Status</label>
                            <select id="status" name="status" className="bg-gray-50 border border-gray-300 text-secondaryBrown text-sm rounded-lg focus:ring-2 focus:ring-secondaryBrown focus:outline-none block w-full pl-4 p-2.5 transition duration-300">
                                <option value="terbaru">Terbaru</option>
                                <option value="terlama">Terlama</option>
                            </select>
                        </div>
                        <div className="relative mt-3 w-full lg:w-2/3 mx-auto">
                            <label className="font-semibold text-secondaryBrown" htmlFor="waktu">Waktu</label>
                            {/* <input type="text" id="waktu" name="waktu" className="bg-gray-50 border border-gray-300 text-secondaryBrown text-sm rounded-lg focus:ring-2 focus:ring-secondaryBrown focus:outline-none block w-full pl-4 p-2.5 transition duration-300" placeholder=""/> */}
                            <input className="bg-gray-50 border border-gray-300 text-secondaryBrown text-sm rounded-lg focus:ring-2 focus:ring-secondaryBrown focus:outline-none block w-full pl-4 p-2.5 transition duration-300" type="text" id="waktu" name="waktu"></input>
                            <input className="bg-gray-50 border border-gray-300 text-secondaryBrown text-sm rounded-lg focus:ring-2 focus:ring-secondaryBrown focus:outline-none block w-full pl-4 p-2.5 transition duration-300" type="datetime-local" id="tanggal" name="tanggal"></input>
                        </div>
                        <div className="relative mt-3 w-full lg:w-2/3 mx-auto">
                            <label className="font-semibold text-secondaryBrown" htmlFor="poster">Link Poster</label>
                            <input type="text" id="poster" name="poster" className="bg-gray-50 border border-gray-300 text-secondaryBrown text-sm rounded-lg focus:ring-2 focus:ring-secondaryBrown focus:outline-none block w-full pl-4 p-2.5 transition duration-300" placeholder=""/>
                        </div>
                        <div className="relative mt-3 w-full lg:w-2/3 mx-auto">
                            <label className="font-semibold text-secondaryBrown" htmlFor="posterBesar">Link Poster Besar</label>
                            <input type="text" id="posterBesar" name="posterBesar" className="bg-gray-50 border border-gray-300 text-secondaryBrown text-sm rounded-lg focus:ring-2 focus:ring-secondaryBrown focus:outline-none block w-full pl-4 p-2.5 transition duration-300" placeholder=""/>
                        </div>
                        <div className="relative mt-3 w-full lg:w-2/3 mx-auto">
                            <label className="font-semibold text-secondaryBrown" htmlFor="author">Author</label>
                            <input type="text" id="author" name="author" className="bg-gray-50 border border-gray-300 text-secondaryBrown text-sm rounded-lg focus:ring-2 focus:ring-secondaryBrown focus:outline-none block w-full pl-4 p-2.5 transition duration-300" placeholder=""/>
                        </div>
                        <div className="relative mt-3 w-full lg:w-2/3 mx-auto">
                            <label className="font-semibold text-secondaryBrown" htmlFor="isi">Pesan</label>
                            <textarea id="isi" name="isi" className="bg-gray-50 border h-32 border-gray-300 text-secondaryBrown text-sm rounded-lg focus:ring-2 focus:ring-secondaryBrown focus:outline-none block w-full pl-4 p-2.5 transition duration-300" placeholder=""/>
                        </div>
                        <div className="relative my-5 w-full lg:w-2/3 mx-auto">
                            {isLoading ? 
                                <button type="submit" className="bg-primary opacity-40 text-lg font-semibold text-slate-100 text-center hover:shadow-lg rounded-lg w-full py-2 transition duration-500" disabled>Sedang Memproses</button>
                                :
                                <button type="submit" className="bg-primary text-lg font-semibold text-slate-100 text-center hover:shadow-lg rounded-lg w-full py-2 transition duration-500">Tambah Pengumuman</button>
                            }
                        </div>
                    </form>
                </div>
            </div>
    )
}