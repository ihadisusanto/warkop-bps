/* eslint-disable @next/next/no-img-element */
'use client'
import { useEffect, useState } from "react";
import Header from "../components/header/page"
import arrowDown from "@/public/asset/Arrow Down.png";
import arrowUp from "@/public/asset/Arrow Up.png";
import Footer1st from "../components/footer1st/page";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useRouter } from 'next/navigation';
import { MantineProvider } from '@mantine/core';
import { Notifications } from '@mantine/notifications';
import { notifications } from '@mantine/notifications';

const linkSex = ["Laki-laki", "Perempuan"]
const linkGrade = ["SD/Sederajat", "SMP/Sederajat", "SMA/Sederajat", "Diploma I/II/III", "Diploma IV/S1/S2/S3"]
const linkOffice = ["Dewan Perwakilan Rakyat", "Badan Informasi Geospasial", "Kementrian Keuangan Republik Indonesia", "Lembaga Sandi Negara", "Badan Pemeriksa Keuangan"]
const linkWork = ["Biro Bina Program", "Pusat Pendidikan dan Pelatihan", "Politeknik Statistika STIS", "Direktorat Sistem Informasi Statistik", "BPS Provinsi DKI Jakarta"]

export default function Register(){
    interface Data {
        nama_depan: string;
        nama_belakang: string;
        username: string;
        password: string;
        confpassword: string;
        email: string;
        gender: string;
        education: string;
        nik: string;
        lembaga: string;
        unit_kerja: string;
    }

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
    
    //error message in filed
    const [errorFirstName, setErrorFirstName] = useState("");
    const [errorLastName, setErrorLastName] = useState("");
    const [errorUsername, setErrorUsername] = useState("");
    const [errorPassword, setErrorPassword] = useState("");
    const [errorConfPassword, setErrorConfPassword] = useState("");
    const [errorEmail, setErrorEmail] = useState("");
    const [errorGender, setErrorGender] = useState("");
    const [errorEducation, setErrorEducation] = useState("");
    const [errorNik, setErrorNik] = useState("");
    const [errorLembaga, setErrorLembaga] = useState("");
    const [errorUnitKerja, setErrorUnitKerja] = useState("");

    useEffect(()=>{
        sessionStorage.setItem("errorFirstName","");
        sessionStorage.setItem("errorLastName","");
        sessionStorage.setItem("errorUsername","");
        sessionStorage.setItem("errorPassword","");
        sessionStorage.setItem("errorConfPassword","");
        sessionStorage.setItem("errorEmail","");
        sessionStorage.setItem("errorGender","");
        sessionStorage.setItem("errorEducation","");
        sessionStorage.setItem("errorNik","");
        sessionStorage.setItem("errorLembaga","");
        sessionStorage.setItem("errorUnitKerja","");
    })

    const [isLoading,setIsLoading] = useState(false);
    const router = useRouter();
    //handle submit function
    function handleSubmit(e:any){
        setIsLoading(true);
        e.preventDefault();
        const data :Data = {
            nama_depan:e.target.nama_depan.value,
            nama_belakang:e.target.nama_belakang.value,
            username:e.target.username.value,
            password:e.target.password.value,
            confpassword:e.target.confpassword.value,
            email:e.target.email.value,
            gender:selectedSex,
            education:selectedGrade,
            nik:e.target.nik.value,
            lembaga:selectedOffice,
            unit_kerja:selectedWork
        }
        if(selectedOffice == ""){
            data.lembaga = e.target.textKementrian.value
        }

        if(selectedWork == ""){
            data.unit_kerja = e.target.textWork.value
        }
        
        
        validation(data);
        console.log(sessionStorage.getItem("errorFirstName"))
        if(sessionStorage.getItem("errorFirstName")=="" && sessionStorage.getItem("errorLastName")=="" && sessionStorage.getItem("errorUsername")=="" && sessionStorage.getItem("errorPassword")=="" && sessionStorage.getItem("errorConfPassword")=="" && sessionStorage.getItem("errorEmail")=="" && sessionStorage.getItem("errorGender")=="" && sessionStorage.getItem("errorEducation")=="" && sessionStorage.getItem("errorNik")=="" && sessionStorage.getItem("errorLembaga")=="" && sessionStorage.getItem("errorUnitKerja")==""){
            //axios post
            axios.post('/api/register', data)
            .then((res)=>{
                console.log(res.data)
                notifications.show({
                    autoClose:3000,
                    withCloseButton:true,
                    title: 'Berhasil',
                    message: 'Akun berhasil dibuat. Menuju halaman login dalam 3 detik',
                    color: 'green',
                })
                setTimeout(() => {
                    router.push("/login");
                }, 3000)
            })
            .catch((err)=>{
                setErrorEmail(err.response.data);
                window.location.href="#info-public"
                notifications.show({
                    autoClose:3000,
                    withCloseButton:true,
                    title: 'Terjadi kesalahan',
                    message: 'Alamat Email Sudah Digunakan',
                    color: 'red',
                })
            })
            .finally(()=>setIsLoading(false));
        }else{
            setIsLoading(false);
            notifications.show({
                title:"Terjadi Kesalahan",
                message:"Silakan periksa kembali kolom yang anda isikan",
                color:"red",
                autoClose:8000,
                withCloseButton:true
            })
        }
    }

    const validation = (data:Data)=>{
        //validation first name
        if(data.nama_depan===""){
            setErrorFirstName("Nama Depan tidak boleh kosong");
            sessionStorage.setItem("errorFirstName","Nama Depan tidak boleh kosong");
            setIsLoading(false);
        }else{
            setErrorFirstName("");
            sessionStorage.setItem("errorFirstName","");
        }

        //validation last name
        if(data.nama_belakang===""){
            setErrorLastName("Nama Belakang tidak boleh kosong");
            sessionStorage.setItem("errorLastName","Nama Belakang tidak boleh kosong");
            setIsLoading(false);
        }else{
            setErrorLastName("");
            sessionStorage.setItem("errorLastName","");
        }

        //validation username
        if(data.username===""){
            setErrorUsername("Nama Pengguna tidak boleh kosong");
            sessionStorage.setItem("errorUsername","Nama Pengguna tidak boleh kosong");
            setIsLoading(false);
        }else{
            setErrorUsername("");
            sessionStorage.setItem("errorUsername","");
        }

        //validation password
        if(data.password===""){
            setErrorPassword("Kata Sandi tidak boleh kosong");
            sessionStorage.setItem("errorPassword","Kata Sandi tidak boleh kosong");
            setIsLoading(false);
        }else{
            setErrorPassword("");
            sessionStorage.setItem("errorPassword","");
        }

        //validation confpassword
        if(data.confpassword===""){
            setErrorConfPassword("Konfirmasi Kata Sandi tidak boleh kosong");
            sessionStorage.setItem("errorConfPassword","Konfirmasi Kata Sandi tidak boleh kosong");
            setIsLoading(false);
        }else{
            setErrorConfPassword("");
            sessionStorage.setItem("errorConfPassword","");
        }

        //validation email
        if(data.email===""){
            setErrorEmail("Alamat Surel tidak boleh kosong");
            sessionStorage.setItem("errorEmail","Alamat Surel tidak boleh kosong");
            setIsLoading(false);
        }else{
            setErrorEmail("");
            sessionStorage.setItem("errorEmail","");
        }

        //validation gender
        if(data.gender===""){
            setErrorGender("Isikan jenis kelamin ada");
            sessionStorage.setItem("errorGender","Isikan jenis kelamin ada");
            setIsLoading(false);
        }else{
            setErrorGender("");
            sessionStorage.setItem("errorGender","");
        }

        //validation education
        if(data.education===""){
            setErrorEducation("Kolom pendidikan terakhir tidak boleh kosong");
            sessionStorage.setItem("errorEducation","Kolom pendidikan terakhir tidak boleh kosong");
            setIsLoading(false);
        }else{
            setErrorEducation("");
            sessionStorage.setItem("errorEducation","");
        }

        //validation nik
        if(data.nik===""){
            setErrorNik("NIK tidak boleh kosong");
            sessionStorage.setItem("errorNik","NIK tidak boleh kosong");
            setIsLoading(false);
        }else{
            setErrorNik("");
            sessionStorage.setItem("errorNik","");
        }

        //validation lembaga
        if(data.lembaga===""){
            setErrorLembaga("Kolom Instansi tidak boleh kosong");
            sessionStorage.setItem("errorLembaga","Kolom Instansi tidak boleh kosong");
            setIsLoading(false);
        }else{
            setErrorLembaga("");
            sessionStorage.setItem("errorLembaga","");
        }

        //validation unit kerja
        if(data.unit_kerja===""){
            setErrorUnitKerja("Kolom Unit Kerja tidak boleh kosong");
            sessionStorage.setItem("errorUnitKerja","Kolom Unit Kerja tidak boleh kosong");
            setIsLoading(false);
        }else{
            setErrorUnitKerja("");
            sessionStorage.setItem("errorUnitKerja","");
        }

        //password tidak cocok
        if(data.password != data.confpassword){
            setErrorConfPassword("Kata sandi tidak cocok");
            sessionStorage.setItem("errorConfPassword","Kata sandi tidak cocok");
            setIsLoading(false);
        }else{
            setErrorConfPassword("");
            sessionStorage.setItem("errorConfPassword","");
        }

        //password kurang dari 8 karakter
        if(data.password.length < 8){
            setErrorPassword("Kata sandi setidaknya memiliki 8 karakter");
            sessionStorage.setItem("errorPassword","Kata sandi setidaknya memiliki 8 karakter");
            setIsLoading(false);
        }else{
            setErrorPassword("");
            sessionStorage.setItem("errorPassword","");
        }

        //email tidak valid
        if(!data.email.includes("@")){
            setErrorEmail("Alamat surel tidak valid");
            sessionStorage.setItem("errorEmail","Alamat surel tidak valid");
            setIsLoading(false);
        }else{
            setErrorEmail("");
            sessionStorage.setItem("errorEmail","");
        }

        //nik tidak 16 digit
        if(data.nik.length != 16){
            setErrorNik("NIK harus terdiri atas 16 digit");
            sessionStorage.setItem("errorNik","NIK harus terdiri atas 16 digit");
            setIsLoading(false);
        }else{
            setErrorNik("");
            sessionStorage.setItem("errorNik","");
        }
    };



    return (
        <MantineProvider withNormalizeCSS withGlobalStyles>
        <Notifications/>
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
                                    <input type="text" id="nama_depan" name="nama_depan" placeholder="Nama Depan" className="bg-gray-100 text-sm md:text-[16px] rounded-md w-full p-2 border-none focus:ring-secondaryBrown focus:ring-2 transition duration-300"/>
                                    {/* {error.filter((err) => err.type == "nama_depan") && (<p className="mt-1 text-red-700 text-sm font-semibold">{error.filter((err) => err.type == "nama_depan")[0]["message"]}</p>)} */}
                                    {errorFirstName!==""  && (<p className="mt-1 text-red-700 text-sm font-semibold">{errorFirstName}</p>)}
                                </div>
                                <div className="w-1/2 space-y-2">
                                    <label className="font-semibold text-sm md:text-[16px]">Nama Belakang</label><br />
                                    <input type="text" id="nama_belakang" name="nama_belakang" placeholder="Nama Belakang" className="bg-gray-100 text-sm md:text-[16px] rounded-md w-full p-2 border-none focus:ring-secondaryBrown focus:ring-2 transition duration-300"/>
                                    {/* {error.filter((err) => err.type == "nama_belakang") && (<p className="mt-1 text-red-700 text-sm font-semibold">{error.filter((err) => err.type == "nama_belakang")[0]["message"]}</p>)} */}
                                    {errorLastName!==""  && (<p className="mt-1 text-red-700 text-sm font-semibold">{errorLastName}</p>)}
                                </div>
                            </div>
                            <div className="w-full space-y-2">
                                    <label className="font-semibold text-sm md:text-[16px]">Nama Pengguna</label><br />
                                    <input type="text" id="username" name="username" placeholder="Nama Pengguna" className="bg-gray-100 text-sm md:text-[16px] rounded-md w-full p-2 border-none focus:ring-secondaryBrown focus:ring-2 transition duration-300"/>
                                    {errorUsername!==""  && (<p className="mt-1 text-red-700 text-sm font-semibold">{errorUsername}</p>)}
                            </div>
                            <div className="w-full space-y-2">
                                    <label className="font-semibold text-sm md:text-[16px]">Kata Sandi</label><br />
                                    <input type="password" id="password" name="password" placeholder="Kata sandi setidaknya memiliki 8 karakter" className="bg-gray-100 text-sm md:text-[16px] rounded-md w-full p-2 border-none focus:ring-secondaryBrown focus:ring-2 transition duration-300"/>
                                    {errorPassword!==""  && (<p className="mt-1 text-red-700 text-sm font-semibold">{errorPassword}</p>)}
                            </div>
                            <div className="w-full space-y-2">
                                    <label className="font-semibold text-sm md:text-[16px]">Konfirmasi Kata Sandi</label><br />
                                    <input type="password" id="confpassword" name="confpassword" placeholder="Kata sandi setidaknya memiliki 8 karakter" className="bg-gray-100 text-sm md:text-[16px] rounded-md w-full p-2 border-none focus:ring-secondaryBrown focus:ring-2 transition duration-300"/>
                                    {errorConfPassword!==""  && (<p className="mt-1 text-red-700 text-sm font-semibold">{errorConfPassword}</p>)}
                            </div>
                            <div className="w-full space-y-2">
                                    <label className="font-semibold text-sm md:text-[16px]">Alamat Surel</label><br />
                                    <input type="text" id="email" name="email" placeholder="alamatsurel@gmail.com" className="bg-gray-100 text-sm md:text-[16px] rounded-md w-full p-2 border-none focus:ring-secondaryBrown focus:ring-2 transition duration-300"/>
                                    {errorEmail!==""  && (<p className="mt-1 text-red-700 text-sm font-semibold">{errorEmail}</p>)}
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
                                    {linkSex.map((linkSex,index) => (
                                        <li key={index} onClick={() => {setSelectedSex(linkSex);}} className={`hover:bg-yellow-50 p-2 rounded-md ${selectedSex==linkSex ? 'text-primary border-l-4 border-primary' : ''}`}>
                                            {linkSex}
                                        </li>
                                    ))}
                                </ul>
                                {errorGender!==""  && (<p className="mt-1 text-red-700 text-sm font-semibold">{errorGender}</p>)}
                            </div>
                            <div className="relative w-full lg:w-1/2 space-y-2 text-sm md:text-[16px]">
                                <label className="font-semibold">Pendidikan Terakhir</label><br />
                                <div onClick={() => setOpenGrade(!openGrade)} className="bg-gray-100 w-full p-2 flex justify-between items-center rounded-md cursor-pointer">
                                    <p className={selectedGrade ? 'text-primary' : 'text-gray-500'}>{selectedGrade ? selectedGrade : "Pilih..."}</p>
                                    {openGrade ? <img src={arrowUp.src} alt="" className="inline" /> : <img src={arrowDown.src} alt="" className="inline" />}
                                </div>
                                <ul onClick={() => setOpenGrade(!openGrade)} className={`bg-white mt-2 shadow-md rounded-md border-gray-100 border ${openGrade ? 'absolute w-full z-10' : 'hidden'}`}>
                                    {linkGrade.map((linkGrade,index) => (
                                        <li key={index} onClick={() => {setSelectedGrade(linkGrade);}} className={`hover:bg-yellow-50 p-2 rounded-md ${selectedGrade==linkGrade ? 'text-primary border-l-4 border-primary' : ''}`}>
                                            {linkGrade}
                                        </li>
                                    ))}
                                </ul>
                                {errorEducation!==""  && (<p className="mt-1 text-red-700 text-sm font-semibold">{errorEducation}</p>)}
                            </div>
                        </div>
                    </div>

                    <div id="data-staff" className="bg-white px-7 md:px-14 py-8 rounded-md mb-8 shadow-md border border-gray-100 scroll-mt-32">
                        <h1 className="text-xl md:text-2xl uppercase font-bold text-gray-600 mb-8">Data Kepegawaian</h1>
                        <div className="space-y-4">
                            <div className="w-full space-y-2 text-sm md:text-[16px]">
                                    <label className="font-semibold">NIK</label><br />
                                    <input type="text" id="nik" name="nik" placeholder="Nomor Induk Kependudukan" className="bg-gray-100 font-normal rounded-md w-full p-2 text-sm md:text-[16px] border-none focus:ring-secondaryBrown focus:ring-2 transition duration-300"/>
                                    {errorNik!==""  && (<p className="mt-1 text-red-700 text-sm font-semibold">{errorNik}</p>)}
                            </div>
                            <div className="relative w-full space-y-2">
                                    <label className="font-semibold">Kementrian/Lembaga Non BPS</label><br />
                                    <div className={`relative bg-gray-100 flex justify-between items-center rounded-md ${textOffice ? '' : 'hidden'}`}>
                                        {textOffice
                                            ? (<input type="text" id="textKementrian" placeholder="Isikan nama instansi anda" name="textKementrian" className={`bg-gray-100 w-full text-gray-500 border-none rounded-md`}/>)
                                            : (<input type="text" defaultValue={""} id="textKementrian" name="textKementrian" className={`bg-gray-100 w-full text-gray-500 border-none rounded-md hidden`}/>)
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
                                        {linkOffice.map((linkOffice,index) => (
                                            <li key={index} onClick={() => {setSelectedOffice(linkOffice);}} className={`hover:bg-yellow-50 p-2 rounded-md ${selectedOffice==linkOffice ? 'text-primary border-l-4 border-primary' : ''}`}>
                                                {linkOffice}
                                            </li>
                                        ))}
                                        <li onClick={() => {setTextOffice(!textOffice); setSelectedOffice("")}} className="hover:bg-base p-2 rounded-md">
                                            Lainnya...
                                        </li>
                                    </ul>
                                    {errorLembaga!==""  && (<p className="mt-1 text-red-700 text-sm font-semibold">{errorLembaga}</p>)}
                            </div>
                            <div className="relative w-full space-y-2">
                                    <label className="font-semibold">Unit Kerja</label><br />
                                    <div className={`relative bg-gray-100 flex justify-between items-center rounded-md ${textWork ? '' : 'hidden'}`}>
                                        {textWork
                                            ? (<input type="text" id="textWork" name="textWork" placeholder="Isikan unit kerja anda" className={`bg-gray-100 w-full text-gray-500 border-none rounded-md`}/>)
                                            : (<input type="text" defaultValue={""} id="textWork" name="textWork" className={`bg-gray-100 w-full text-gray-500 border-none rounded-md hidden`}/>)
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
                                        {linkWork.map((linkWork,index) => (
                                            <li key={index} onClick={() => {setSelectedWork(linkWork);}} className={`hover:bg-yellow-50 p-2 rounded-md ${selectedWork==linkWork ? 'text-primary border-l-4 border-primary' : ''}`}>
                                                {linkWork}
                                            </li>
                                        ))}
                                        <li onClick={() => {setTextWork(!textWork); setSelectedWork("")}} className="hover:bg-base p-2 rounded-md">
                                            Lainnya...
                                        </li>
                                    </ul>
                                    {errorUnitKerja!==""  && (<p className="mt-1 text-red-700 text-sm font-semibold">{errorUnitKerja}</p>)}
                            </div>
                        </div>
                    </div>

                    <div className="w-full flex justify-end items-end mb-4 ">
                        <button type="submit" className={`bg-primary text-gray-600 font-bold text-xl py-3 px-8 md:px-16 rounded-sm shadow-md ${isLoading ? 'disabled opacity-50' : ''}`}>
                            {isLoading ? (
                                <div role="status" className="flex items-center justify-center">
                                    <svg aria-hidden="true" className="inline w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-secondaryBrown" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                                        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                                    </svg>
                                    <p>Sedang Memproses...</p>
                                </div>)  
                                : 
                                'Daftar'
                            }
                        </button>
                    </div>
                </form>
            </div>
            <Footer1st/>
        </div>
        </MantineProvider>                  
    )
}
