'use client';
import axios from 'axios';
import { useState } from 'react';

export default function insertClass(){
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [isLoading,setIsLoading] = useState(false);
    function handleSubmit(e:any){
        setIsLoading(true);
        e.preventDefault();
        const data = {
            jumlah_jam:e.target.jumlah_jam.value,
            judul:e.target.judul.value,
            tanggal_mulai:e.target.tanggal_mulai.value,
            tanggal_selesai:e.target.tanggal_selesai.value,
            start_date:e.target.start_date.value,
            end_date:e.target.end_date.value,
            teacher:e.target.teacher.value,
            manager:e.target.manager.value,
            message:e.target.message.value,
            status:e.target.status.value,
            poster:e.target.poster.value,
            bigPoster:e.target.bigPoster.value,
            kompetensi:e.target.kompetensi.value,
            subKompetensi:e.target.subKompetensi.value
        }
        axios.post('/api/kelas',data)
        .then((response)=>{
            console.log(response);
        })
        .catch((error)=>{
            console.log(error);
        })
        .finally(()=>setIsLoading(false));
    }
    return(
        <>
            <div className="h-auto mt-24 lg:px-16 lg:py-16 bg-base flex">
                <div className="bg-white mt-10 w-full lg:w-1/2 m-auto p-8">
                    <h3 className="text-center text-2xl font-bold text-secondaryBrown">INSERT CLASS</h3>
                    <form onSubmit={handleSubmit}>
                        <div className="relative mt-3 w-full lg:w-2/3 mx-auto">
                            <label className="font-semibold text-secondaryBrown" htmlFor="judul">Judul Kelas</label>
                            <input type="text" id="judul" name="judul" className="bg-gray-50 border border-gray-300 text-secondaryBrown text-sm rounded-lg focus:ring-2 focus:ring-secondaryBrown focus:outline-none block w-full pl-4 p-2.5 transition duration-300" placeholder=""/>
                        </div>
                        <div className="relative mt-3 w-full lg:w-2/3 mx-auto">
                            <label className="font-semibold text-secondaryBrown" htmlFor="jam">Jumlah Jam</label>
                            <input type="number" id="jumlah_jam" name="jumlah_jam" className="bg-gray-50 border border-gray-300 text-secondaryBrown text-sm rounded-lg focus:ring-2 focus:ring-secondaryBrown focus:outline-none block w-full pl-4 p-2.5 transition duration-300" placeholder=""/>
                        </div>
                        <div className="relative mt-3 w-full lg:w-2/3 mx-auto">
                            <label className="font-semibold text-secondaryBrown" htmlFor="tgl_mulai">Tanggal Mulai</label>
                            <input type="text" id="tanggal_mulai" name="tanggal_mulai"  className="bg-gray-50 border border-gray-300 text-secondaryBrown text-sm rounded-lg focus:ring-2 focus:ring-secondaryBrown focus:outline-none block w-full pl-4 p-2.5 transition duration-300" placeholder=""/>
                        </div>
                        <div className="relative mt-3 w-full lg:w-2/3 mx-auto">
                            <label className="font-semibold text-secondaryBrown" htmlFor="tgl_selesai">Tanggal Selesai</label>
                            <input type="text" id="tanggal_selesai" name="tanggal_selesai" className="bg-gray-50 border border-gray-300 text-secondaryBrown text-sm rounded-lg focus:ring-2 focus:ring-secondaryBrown focus:outline-none block w-full pl-4 p-2.5 transition duration-300" placeholder=""/>
                        </div>
                        <div className="relative mt-3 w-full lg:w-2/3 mx-auto">
                            <label className="font-semibold text-secondaryBrown" htmlFor="tgl_selesai">Start Date</label>
                            <input type="date" id="start_date" name="start_date" className="bg-gray-50 border border-gray-300 text-secondaryBrown text-sm rounded-lg focus:ring-2 focus:ring-secondaryBrown focus:outline-none block w-full pl-4 p-2.5 transition duration-300" placeholder=""/>
                        </div>
                        <div className="relative mt-3 w-full lg:w-2/3 mx-auto">
                            <label className="font-semibold text-secondaryBrown" htmlFor="tgl_selesai">End Date</label>
                            <input type="date" id="end_date" name="end_date" className="bg-gray-50 border border-gray-300 text-secondaryBrown text-sm rounded-lg focus:ring-2 focus:ring-secondaryBrown focus:outline-none block w-full pl-4 p-2.5 transition duration-300" placeholder=""/>
                        </div>
                        <div className="relative mt-3 w-full lg:w-2/3 mx-auto">
                            <label className="font-semibold text-secondaryBrown" htmlFor="teacher">Teacher</label>
                            <input type="text" id="teacher" name="teacher" className="bg-gray-50 border border-gray-300 text-secondaryBrown text-sm rounded-lg focus:ring-2 focus:ring-secondaryBrown focus:outline-none block w-full pl-4 p-2.5 transition duration-300" placeholder=""/>
                        </div>
                        <div className="relative mt-3 w-full lg:w-2/3 mx-auto">
                            <label className="font-semibold text-secondaryBrown" htmlFor="manager">Manager</label>
                            <input type="text" id="manager" name="manager" className="bg-gray-50 border border-gray-300 text-secondaryBrown text-sm rounded-lg focus:ring-2 focus:ring-secondaryBrown focus:outline-none block w-full pl-4 p-2.5 transition duration-300" placeholder=""/>
                        </div>
                        <div className="relative mt-3 w-full lg:w-2/3 mx-auto">
                            <label className="font-semibold text-secondaryBrown" htmlFor="status">Status</label>
                            <input type="text" id="status" name="status" className="bg-gray-50 border border-gray-300 text-secondaryBrown text-sm rounded-lg focus:ring-2 focus:ring-secondaryBrown focus:outline-none block w-full pl-4 p-2.5 transition duration-300" placeholder=""/>
                        </div>
                        <div className="relative mt-3 w-full lg:w-2/3 mx-auto">
                            <label className="font-semibold text-secondaryBrown" htmlFor="poster">Poster Link</label>
                            <input type="text" id="poster" name="poster" className="bg-gray-50 border border-gray-300 text-secondaryBrown text-sm rounded-lg focus:ring-2 focus:ring-secondaryBrown focus:outline-none block w-full pl-4 p-2.5 transition duration-300" placeholder=""/>
                        </div>
                        <div className="relative mt-3 w-full lg:w-2/3 mx-auto">
                            <label className="font-semibold text-secondaryBrown" htmlFor="poster">Big Poster Link</label>
                            <input type="text" id="bigPoster" name="bigPoster" className="bg-gray-50 border border-gray-300 text-secondaryBrown text-sm rounded-lg focus:ring-2 focus:ring-secondaryBrown focus:outline-none block w-full pl-4 p-2.5 transition duration-300" placeholder=""/>
                        </div>
                        <div className="relative mt-3 w-full lg:w-2/3 mx-auto">
                            <label className="font-semibold text-secondaryBrown" htmlFor="poster">Kompetensi</label>
                            <input type="text" id="kompetensi" name="kompetensi" className="bg-gray-50 border border-gray-300 text-secondaryBrown text-sm rounded-lg focus:ring-2 focus:ring-secondaryBrown focus:outline-none block w-full pl-4 p-2.5 transition duration-300" placeholder=""/>
                        </div>
                        <div className="relative mt-3 w-full lg:w-2/3 mx-auto">
                            <label className="font-semibold text-secondaryBrown" htmlFor="poster">Sub Kompetensi</label>
                            <input type="text" id="subKompetensi" name="subKompetensi" className="bg-gray-50 border border-gray-300 text-secondaryBrown text-sm rounded-lg focus:ring-2 focus:ring-secondaryBrown focus:outline-none block w-full pl-4 p-2.5 transition duration-300" placeholder=""/>
                        </div>
                        <div className="relative mt-3 w-full lg:w-2/3 mx-auto">
                            <label className="font-semibold text-secondaryBrown" htmlFor="pesan">Pesan</label>
                            <textarea id="message" name="message" className="bg-gray-50 border h-32 border-gray-300 text-secondaryBrown text-sm rounded-lg focus:ring-2 focus:ring-secondaryBrown focus:outline-none block w-full pl-4 p-2.5 transition duration-300" placeholder=""/>
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
        </>
    )
}