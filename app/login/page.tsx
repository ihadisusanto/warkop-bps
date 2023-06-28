/* eslint-disable react-hooks/rules-of-hooks */
'use client';
import { useEffect, useState } from "react";
import Footer1st from "../components/footer1st/page";
import Header from "../components/header/page";
import { useRouter } from "next/navigation";
import axios from "axios";
import { MantineProvider } from "@mantine/core";
import { Notifications, notifications } from "@mantine/notifications";

export default function login(){
    interface Data{
        email:string,
        password:string
    }

    useEffect(() => {
        sessionStorage.setItem('errorEmailLogin',"")
        sessionStorage.setItem('errorPasswordLogin',"")
    })

    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();

    function handleSubmit(e:any){
        e.preventDefault();
        setIsLoading(true);
        const data :Data = {
            email:e.target.email.value,
            password:e.target.password.value
        }
        validation(data);
        if(sessionStorage.getItem('errorEmailLogin') === "" && sessionStorage.getItem('errorPasswordLogin') === ""){
            axios.post('/api/login',data)
            .then((res)=>{
                console.log(res);
                notifications.show({
                    title: 'Sukses',
                    message: 'Berhasil Login, menuju laman utama dalam 3 detik',
                    color: "green",
                    autoClose:3000
                })
                setTimeout(() => {
                    router.push('/')
                },3000)
            })
            .catch((err)=>{
                console.log(err);
                notifications.show({
                    title: 'Terjadi Kesalahan',
                    message: 'Email atau Password salah',
                    color: "red",
                    autoClose:false
                })
            })
            .finally(()=>{
                setIsLoading(false);
            })
        }else{
            setIsLoading(false);
            notifications.show({
                title: 'Terjadi Kesalahan',
                message: 'Email atau Password tidak boleh kosong',
                color: "red",
                autoClose:7000
            })
        }
    }

    const validation =(data:Data)=>{
        if(data.email === ""){
            // setErrorEmail("Email tidak boleh kosong")
            sessionStorage.setItem('errorEmailLogin',"Email tidak boleh kosong")
        }else{
            // setErrorEmail("")
            sessionStorage.setItem('errorEmailLogin',"")
        }

        if(data.password === ""){
            // setErrorPassword("Password tidak boleh kosong")
            sessionStorage.setItem('errorPasswordLogin',"Password tidak boleh kosong")
        }else{
            // setErrorPassword("")
            sessionStorage.setItem('errorPasswordLogin',"")
        }
    }

    return(
        <MantineProvider withNormalizeCSS withGlobalStyles>
        <Notifications/>
        <>
            <Header/>
            <div className="h-[80vh] mt-24 lg:px-16 lg:py-16 bg-base flex">
                <div className="bg-white mt-10 w-full lg:w-1/2 m-auto p-8">
                    <h3 className="text-center text-2xl font-bold text-secondaryBrown">Login</h3>                
                    <form onSubmit={handleSubmit}>
                        <div className="relative my-5 w-full lg:w-2/3 mx-auto">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <svg aria-hidden="true" className="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
                            </div>
                            <input type="text" id="email" name="email" className="bg-gray-200 border-none text-secondaryBrown text-sm rounded-lg focus:ring-2 focus:ring-secondaryBrown focus:outline-none block w-full pl-10 p-2.5 transition duration-300" placeholder="Nama pengguna "/>
                        </div>
                        <div className="relative my-5 w-full lg:w-2/3 mx-auto">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-shield-lock-fill" viewBox="0 0 16 16"> <path fillRule="evenodd" d="M8 0c-.69 0-1.843.265-2.928.56-1.11.3-2.229.655-2.887.87a1.54 1.54 0 0 0-1.044 1.262c-.596 4.477.787 7.795 2.465 9.99a11.777 11.777 0 0 0 2.517 2.453c.386.273.744.482 1.048.625.28.132.581.24.829.24s.548-.108.829-.24a7.159 7.159 0 0 0 1.048-.625 11.775 11.775 0 0 0 2.517-2.453c1.678-2.195 3.061-5.513 2.465-9.99a1.541 1.541 0 0 0-1.044-1.263 62.467 62.467 0 0 0-2.887-.87C9.843.266 8.69 0 8 0zm0 5a1.5 1.5 0 0 1 .5 2.915l.385 1.99a.5.5 0 0 1-.491.595h-.788a.5.5 0 0 1-.49-.595l.384-1.99A1.5 1.5 0 0 1 8 5z" fill="#6b7280"></path> </svg>
                            </div>
                            <input type="text" id="password" name="password" className="bg-gray-200 border-none text-secondaryBrown text-sm rounded-lg focus:ring-2 focus:ring-secondaryBrown focus:outline-none block w-full pl-10 p-2.5 transition duration-300" placeholder="Kata sandi"/>
                        </div>
                        <div className="relative my-5 w-full lg:w-2/3 mx-auto">
                            <button className={`bg-primary text-xl font-semibold text-slate-100 text-center hover:shadow-lg rounded-lg w-full py-2 transition duration-500 ${isLoading ? 'disabled opacity-50' : ''}`}>
                                {isLoading ? (
                                    <div role="status" className="flex items-center justify-center">
                                        <svg aria-hidden="true" className="inline w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-secondaryBrown" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                                            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                                        </svg>
                                        <p>Sedang Memproses...</p>
                                    </div>) 
                                    : 
                                    'Masuk'
                                }
                            </button>
                            <p className="text-slate-400 font-semibold text-sm my-5 text-center hover:underline"><a href="/forgetpass">Lupa kata sandi</a></p>
                            <p className="text-slate-400 font-semibold text-sm my-5 text-center">Belum memiliki akun? <a href="/register" className="text-secondaryBrown hover:underline">Daftar</a></p>
                        </div>
                    </form>
                </div>
            </div>
            <Footer1st/>
        </>
        </MantineProvider>
    )
}