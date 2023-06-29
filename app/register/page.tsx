/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-key */
'use client'
import { useState } from "react";
import Header from "../components/header/page"
import arrowDown from "@/public/asset/Arrow Down.png";
import arrowUp from "@/public/asset/Arrow Up.png";
import Footer1st from "../components/footer1st/page";

const linkSex = ["Laki-laki", "Perempuan"]
const linkGrade = ["SD/Sederajat", "SMP/Sederajat", "SMA/Sederajat", "Diploma I/II/III", "Diploma IV/S1/S2/S3"]
const linkOffice = ["Dewan Perwakilan Rakyat", "Badan Informasi Geospasial", "Kementrian Keuangan Republik Indonesia", "Lembaga Sandi Negara", "Badan Pemeriksa Keuangan"]
const linkWork = ["Biro Bina Program", "Pusat Pendidikan dan Pelatihan", "Politeknik Statistika STIS", "Direktorat Sistem Informasi Statistik", "BPS Provinsi DKI Jakarta"]

export default function Register(){
    const [selectedSex, setSelectedSex] = useState("");
    const [selectedGrade, setSelectedGrade] = useState("");
    const [selectedOffice, setSelectedOffice] = useState("");
    const [selectedWork, setSelectedWork] = useState("");
    const [openSex, setOpenSex] = useState(false);
    const [openGrade, setOpenGrade] = useState(false);
    const [openOffice, setOpenOffice] = useState(false);
    const [openWork, setOpenWork] = useState(false);
    const [textOffice, setTextOffice] = useState(false);
    const [textWork, setTextWork] = useState(false);

    //handleSubmit Function
    function handleSubmit(e:any){
        e.preventDefault();
        const data = {
            nama_depan:e.target.nama_depan.value,
            nama_belakang:e.target.nama_belakang.value,
            username:e.target.username.value,
            password:e.target.password.value,
            confpassword:e.target.confpassword.value,
            email:e.target.email.value,
            jenis_kelamin:selectedSex,
            pendidikan_terakhir:selectedGrade,
            nik:e.target.nik.value,
            kementrian_lembaga:selectedOffice,
            unit_kerja:selectedWork
        }

    }
    return (
        <div>
            <Header/>
            <div className="flex justify-between bg-base mt-24 py-14 px-4 md:px-8">
                <div className="hidden md:block w-1/4 pr-4 md:pr-8">
                    <h1 className="text-xl md:text-2xl text-secondaryBrown font-bold mb-6">Daftar</h1>
                    <ul className="bg-white rounded-md shadow-md border border-gray-100">
                        <li className="hover:border-l-4 hover:border-primary hover:rounded-l-md">
                            <a href="#info-public" className="text-justify font-semibold flex text-sm md:text-lg py-2 px-3 md:px-6 hover:text-primary hover:font-bold">Informasi Umum</a>
                        </li>
                        <li className="hover:border-l-4 hover:border-primary hover:rounded-l-md">
                            <a href="#data-self" className="text-justify font-semibold flex text-sm md:text-lg py-2 px-3 md:px-6 hover:text-primary hover:font-bold">Data Pribadi</a>
                        </li>
                        <li className="hover:border-l-4 hover:border-primary hover:rounded-l-md">
                            <a href="#data-staff" className="text-justify font-semibold flex text-sm md:text-lg py-2 px-3 md:px-6 hover:text-primary hover:font-bold">Data Kepagawaian</a>
                        </li>
                    </ul>
                </div>
                <form className="w-full md:w-3/4" onSubmit={handleSubmit}>
                    <div id="info-public" className="bg-white px-7 md:px-14 py-8 rounded-md mb-8 shadow-md border border-gray-100 scroll-mt-32">
                        <h1 className="text-xl md:text-2xl uppercase font-bold text-gray-600 mb-8">Informasi Umum</h1>
                        <div className="space-y-4">
                            <div className="flex justify-between space-x-7 md:space-x-14">
                                <div className="w-1/2 space-y-2">
                                    <label className="font-semibold text-sm md:text-[16px]">Nama Depan</label><br />
                                    <input type="text" placeholder="Nama Depan" className="bg-gray-100 text-sm md:text-[16px] rounded-md w-full p-2 border-none focus:ring-secondaryBrown"/>
                                </div>
                                <div className="w-1/2 space-y-2">
                                    <label className="font-semibold text-sm md:text-[16px]">Nama Belakang</label><br />
                                    <input type="text" placeholder="Nama Belakang" className="bg-gray-100 text-sm md:text-[16px] rounded-md w-full p-2 border-none focus:ring-secondaryBrown"/>
                                </div>
                            </div>
                            <div className="w-full space-y-2">
                                    <label className="font-semibold text-sm md:text-[16px]">Nama Pengguna</label><br />
                                    <input type="text" placeholder="Nama Pengguna" className="bg-gray-100 text-sm md:text-[16px] rounded-md w-full p-2 border-none focus:ring-secondaryBrown"/>
                            </div>
                            <div className="w-full space-y-2">
                                    <label className="font-semibold text-sm md:text-[16px]">Kata Sandi</label><br />
                                    <input type="password" placeholder="*Kata sandi setidaknya memiliki 5 karakter" className="bg-gray-100 text-sm md:text-[16px] rounded-md w-full p-2 border-none focus:ring-secondaryBrown"/>
                            </div>
                            <div className="w-full space-y-2">
                                    <label className="font-semibold text-sm md:text-[16px]">Konfirmasi Kata Sandi</label><br />
                                    <input type="password" placeholder="*Kata sandi setidaknya memiliki 5 karakter" className="bg-gray-100 text-sm md:text-[16px] rounded-md w-full p-2 border-none focus:ring-secondaryBrown"/>
                            </div>
                            <div className="w-full space-y-2">
                                    <label className="font-semibold text-sm md:text-[16px]">Alamat Surel</label><br />
                                    <input type="email" placeholder="alamatsurel@gmail.com" className="bg-gray-100 text-sm md:text-[16px] rounded-md w-full p-2 border-none focus:ring-secondaryBrown"/>
                            </div>
                        </div>
                    </div>

                    <div id="data-self" className="bg-white px-7 md:px-14 py-8 rounded-md mb-8 shadow-md border border-gray-100 scroll-mt-32">
                        <h1 className="text-xl md:text-2xl uppercase font-bold text-gray-600 mb-8">Data Pribadi</h1>
                        <div className="space-y-4">
                            <div className="relative w-full lg:w-1/2 space-y-2 text-sm md:text-[16px]">
                                <label className="font-semibold">Jenis Kelamin</label><br />
                                <div onClick={() => setOpenSex(!openSex)} className="bg-gray-100 w-full p-2 flex justify-between items-center rounded-md cursor-pointer">
                                    <p className={selectedSex ? 'text-primary' : 'text-gray-500'}>{selectedSex ? selectedSex : "Pilih..."}</p>
                                    {openSex ? <img src={arrowUp.src} alt="" className="inline" /> : <img src={arrowDown.src} alt="" className="inline" />}
                                </div>
                                <ul onClick={() => setOpenSex(!openSex)} className={`bg-white mt-2 shadow-md rounded-md border-gray-100 border ${openSex ? 'absolute w-full z-10' : 'hidden'}`}>
                                    {linkSex.map((linkSex) => (
                                        <li onClick={() => {setSelectedSex(linkSex);}} className={`hover:bg-base p-2 rounded-md cursor-pointer ${selectedSex==linkSex ? 'text-primary border-l-4 border-primary' : ''}`}>
                                            {linkSex}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="relative w-full lg:w-1/2 space-y-2 text-sm md:text-[16px]">
                                <label className="font-semibold">Pendidikan Terakhir</label><br />
                                <div onClick={() => setOpenGrade(!openGrade)} className="bg-gray-100 w-full p-2 flex justify-between items-center rounded-md cursor-pointer">
                                    <p className={selectedGrade ? 'text-primary' : 'text-gray-500'}>{selectedGrade ? selectedGrade : "Pilih..."}</p>
                                    {openGrade ? <img src={arrowUp.src} alt="" className="inline" /> : <img src={arrowDown.src} alt="" className="inline" />}
                                </div>
                                <ul onClick={() => setOpenGrade(!openGrade)} className={`bg-white mt-2 shadow-md rounded-md border-gray-100 border ${openGrade ? 'absolute w-full z-10' : 'hidden'}`}>
                                    {linkGrade.map((linkGrade) => (
                                        <li onClick={() => {setSelectedGrade(linkGrade);}} className={`hover:bg-base p-2 rounded-md cursor-pointer ${selectedGrade==linkGrade ? 'text-primary border-l-4 border-primary' : ''}`}>
                                            {linkGrade}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div id="data-staff" className="bg-white px-7 md:px-14 py-8 rounded-md mb-8 shadow-md border border-gray-100 scroll-mt-32">
                        <h1 className="text-xl md:text-2xl uppercase font-bold text-gray-600 mb-8">Data Kepegawaian</h1>
                        <div className="space-y-4">
                            <div className="w-full space-y-2 text-sm md:text-[16px]">
                                    <label className="font-semibold">NIK</label><br />
                                    <input required type="text" id="nik" name="nik" placeholder="Nomor Induk Kependudukan" className="bg-gray-100 font-normal rounded-md w-full p-2 text-sm md:text-[16px] border-none focus:ring-secondaryBrown"/>
                            </div>
                            <div className="relative w-full space-y-2">
                                    <label className="font-semibold">Kementrian/Lembaga Non BPS</label><br />
                                    <div className={`relative bg-gray-100 flex justify-between items-center rounded-md ${textOffice ? '' : 'hidden'}`}>
                                        {textOffice
                                            ? <input type="text" className={`bg-gray-100 w-full text-gray-500 border-none rounded-md focus:ring-secondaryBrown`}/>
                                            : <input value={""} type="text" className={`bg-gray-100 w-full text-gray-500 border-none rounded-md focus:ring-secondaryBrown`}/>
                                        }
                                        <div onClick={() => {setTextOffice(!textOffice); setOpenOffice(!openOffice)}} className="py-2 px-4 cursor-pointer">
                                            <img src={arrowDown.src} alt="" className="inline" />
                                        </div>
                                    </div>
                                    <div onClick={() => setOpenOffice(!openOffice)} className={`bg-gray-100 w-full p-2 flex justify-between items-center rounded-md cursor-pointer ${textOffice ? 'hidden' : ''}`}>
                                        <p className={selectedOffice ? 'text-primary' : 'text-gray-500'}>{selectedOffice ? selectedOffice : "Pilih..."}</p>
                                        {openOffice ? <img src={arrowUp.src} alt="" className="inline" /> : <img src={arrowDown.src} alt="" className="inline" />}
                                    </div>
                                    <ul onClick={() => setOpenOffice(!openOffice)} className={`bg-white mt-2 shadow-md rounded-md border-gray-100 border ${openOffice ? 'absolute w-full z-10' : 'hidden'}`}>
                                        {linkOffice.map((linkOffice) => (
                                            <li onClick={() => {setSelectedOffice(linkOffice);}} className={`hover:bg-base p-2 rounded-md cursor-pointer ${selectedOffice==linkOffice ? 'text-primary border-l-4 border-primary' : ''}`}>
                                                {linkOffice}
                                            </li>
                                        ))}
                                        <li onClick={() => {setTextOffice(!textOffice); setSelectedOffice("")}} className="hover:bg-base p-2 rounded-md cursor-pointer">
                                            Lainnya...
                                        </li>
                                    </ul>
                            </div>
                            <div className="relative w-full space-y-2">
                                    <label className="font-semibold">Unit Kerja</label><br />
                                    <div className={`relative bg-gray-100 flex justify-between items-center rounded-md ${textWork ? '' : 'hidden'}`}>
                                        {textWork
                                            ? <input type="text" className={`bg-gray-100 w-full text-gray-500 border-none rounded-md focus:ring-secondaryBrown`}/>
                                            : <input value={""} type="text" className={`bg-gray-100 w-full text-gray-500 border-none rounded-md focus:ring-secondaryBrown`}/>
                                        }
                                        <div onClick={() => {setTextWork(!textWork); setOpenWork(!openWork);}} className="py-2 px-4 cursor-pointer">
                                            <img src={arrowDown.src} alt="" className="inline" />
                                        </div>
                                    </div>
                                    <div onClick={() => setOpenWork(!openWork)} className={`bg-gray-100 w-full p-2 flex justify-between items-center rounded-md cursor-pointer ${textWork ? 'hidden' : ''}`}>
                                        <p className={selectedWork ? 'text-primary' : 'text-gray-500'}>{selectedWork ? selectedWork : "Pilih..."}</p>
                                        {openWork ? <img src={arrowUp.src} alt="" className="inline" /> : <img src={arrowDown.src} alt="" className="inline" />}
                                    </div>
                                    <ul onClick={() => setOpenWork(!openWork)} className={`bg-white mt-2 shadow-md rounded-md border-gray-100 border ${openWork ? 'absolute w-full z-10' : 'hidden'}`}>
                                        {linkWork.map((linkWork) => (
                                            <li onClick={() => {setSelectedWork(linkWork);}} className={`hover:bg-base p-2 rounded-md cursor-pointer${selectedWork==linkWork ? 'text-primary border-l-4 border-primary' : ''}`}>
                                                {linkWork}
                                            </li>
                                        ))}
                                        <li onClick={() => {setTextWork(!textWork); setSelectedWork("")}} className="hover:bg-base p-2 rounded-md cursor-pointer">
                                            Lainnya...
                                        </li>
                                    </ul>
                            </div>
                        </div>
                    </div>

                    <div className="w-full flex justify-end items-end mb-4 ">
                        <button type="submit" className="bg-primary text-gray-600 font-bold text-xl py-3 px-8 md:px-16 rounded-sm shadow-md">
                            Buat Akun
                        </button>
                    </div>
                </form>
            </div>
            <Footer1st/>
        </div>                  
    )
}
