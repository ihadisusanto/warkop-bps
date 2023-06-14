'use client';
import { useEffect,useState } from "react";
import { Modal } from 'flowbite'
import type { ModalOptions, ModalInterface } from 'flowbite'
import Link from "next/link";

const insertEmail = () =>{
    // eslint-disable-next-line react-hooks/rules-of-hooks
    let email = "";
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        const $modalElement: HTMLElement = document.querySelector('#popup-modal')!;

        const modalOptions: ModalOptions = {
            placement: 'bottom-right',
            backdrop: 'dynamic',
            backdropClasses: 'bg-gray-900 bg-opacity-50 fixed inset-0 z-40',
            closable: true,
            onHide: () => {
                console.log('modal is hidden');
            },
            onShow: () => {
                console.log('modal is shown');
            },
            onToggle: () => {
                console.log('modal has been toggled');
            }
        }

        const modal: ModalInterface = new Modal($modalElement, modalOptions);
        // modal.show();        
    
        const inputEmail = document.getElementById('inputEmail')!;
        const confirmation = document.getElementById('confirmation')!;
        const sendButton = document.getElementById('sendBtn')!;
        sendButton.addEventListener('click',function(){
            inputEmail.classList.add('hidden');
            confirmation.classList.remove('hidden');
        })
        
        const emailCatcher = document.getElementById('emailCatcher')!;
        emailCatcher.addEventListener('click',function(){
            console.log(email);
        })
    });
    
    function listenEvent(event:any){
        email = event.target.value;
    }

    return(
        <>
            <div id="inputEmail" className="h-[80vh] mt-24 lg:px-16 lg:py-16 bg-base flex">
                <div className="bg-white mt-10 w-full lg:w-1/2 m-auto p-8">
                    <h3 className="text-center text-2xl font-bold text-secondaryBrown">Reset Kata Sandi</h3>                
                    <div className="relative my-5 w-full lg:w-2/3 mx-auto">
                        <p className="text-slate-500 text-justify text-sm lg:text-base lg:text-slate-500">Untuk mereset kata sandi Anda, silahkan masukkan nama pengguna atau alamat surel Anda di bawah. Kami akan mengirimkan surel ke alamat surel Anda yang berisi instruksi untuk mendapatkan akses akun Anda kembali.</p>
                    </div>
                    <form action="">
                        <div className="relative mt-5 w-full lg:w-2/3 mx-auto">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <svg aria-hidden="true" className="w-5 mb-6 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
                            </div>
                            <input onChange={listenEvent} type="email" id="email-address-icon" className="bg-gray-50 border border-gray-300 text-secondaryBrown text-sm rounded-lg focus:ring-2 focus:ring-secondaryBrown focus:outline-none block w-full pl-10 p-2.5 transition duration-300 invalid:text-red-700 invalid:focus:ring-red-700 invalid:focus:border-red-700 peer" placeholder="Masukkan alamat surel"/>
                            <p className="text-sm m-1 text-red-700 invisible peer-invalid:visible">Invalid email</p>
                        </div>
                        <div className="relative my-5 w-full lg:w-2/3 mx-auto">
                            <button type="button" id="emailCatcher" data-modal-target="popup-modal" data-modal-toggle="popup-modal" className="bg-primary text-lg font-semibold text-slate-100 text-center hover:shadow-lg rounded-lg w-full py-2 transition duration-500">Kirim</button>
                        </div>
                    </form>
                </div>
            </div>

            <div id="confirmation" className="hidden h-[80vh] mt-24 lg:px-16 lg:py-16 bg-base">
                <div className="bg-white mt-10 w-full lg:w-1/2 m-auto p-8">
                    <h3 className="text-center text-2xl font-bold text-secondaryBrown">Reset Kata Sandi</h3>                
                    <div className="relative my-5 w-full lg:w-2/3 mx-auto">
                        <p className="text-slate-500 text-justify text-sm lg:text-base lg:text-slate-500">
                            Jika Anda memasukkan nama pengguna atau alamat surel yang benar, seharusnya surel dikirimkan kepada Anda. Berisi instruksi mudah untuk mengonfirmasi dan menyelesaikan perubahan kata sandi ini. Jika Anda masih mengalami kesulitan, silakan menghubungi administrator situs.
                        </p>
                    </div>
                    <div className="relative my-5 w-full lg:w-2/3 mx-auto">
                        <button className="bg-primary text-lg font-semibold text-slate-100 text-center hover:shadow-lg rounded-lg w-full py-2 transition duration-500"><Link href="/login">Lanjutkan</Link></button>
                    </div>
                </div>
            </div>

            <div id="popup-modal" tabIndex={-1} className="fixed top-0 left-0 right-0 z-50 hidden p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
                <div className="relative w-full max-w-md max-h-full">
                    <div className="relative bg-white rounded-lg shadow">
                        <button type="button" className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center" data-modal-hide="popup-modal">
                            <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                            <span className="sr-only">Close modal</span>
                        </button>
                        <div className="p-6 text-center">
                            <svg aria-hidden="true" className="mx-auto mb-4 text-secondaryBrown w-14 h-14" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                            <h3 className="mb-5 text-lg font-normal text-secondaryBrown">Apakah Anda yakin email yang anda masukkan sudah benar?</h3>
                            <button id="sendBtn" data-modal-hide="popup-modal" type="button" className="text-white bg-primary hover:shadow-lg focus:ring-4 focus:outline-none font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2 transition duration-300">
                                Yakin
                            </button>
                            <button data-modal-hide="popup-modal" type="button" className="text-secondaryBrown bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:shadow-lg focus:z-10">Tidak</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default insertEmail;