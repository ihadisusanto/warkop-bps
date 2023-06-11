'use client'

import { useState, useEffect } from "react";

export default function ChatSys() {
    useEffect(() => {
        const chatBtn = document.getElementById('chatbtn')!;
        const chatExit1 = document.getElementById('chatout1')!;
        const chatExit2 = document.getElementById('chatout2')!;
        const chatDiv1 = document.getElementById('chatdiv1')!;
        const chatDiv2 = document.getElementById('chatdiv2')!;
        const liveChat = document.getElementById('livechat')!;
        const warBot = document.getElementById('warbot')!;

        chatBtn.addEventListener('click',function(){
            chatDiv1.classList.toggle('hidden');
            chatExit1.classList.toggle('hidden');
        });
        chatExit1.addEventListener('click',function(){
            chatExit1.classList.toggle('hidden');
            chatDiv1.classList.toggle('hidden');
        })
        chatExit2.addEventListener('click',function(){
            chatExit2.classList.toggle('hidden');
            chatDiv2.classList.toggle('hidden');
        })
        liveChat.addEventListener('click',function(){
            chatDiv2.classList.toggle('hidden');
            chatDiv1.classList.toggle('hidden');
            chatExit2.classList.toggle('hidden');
            chatExit1.classList.toggle('hidden');
        })
        warBot.addEventListener('click',function(){
            chatDiv1.classList.toggle('hidden');
            chatDiv2.classList.toggle('hidden');
            chatExit1.classList.toggle('hidden');
            chatExit2.classList.toggle('hidden');
        })
    });
    return (
        <div>
            <button id="chatbtn" className="fixed bg-primary p-1 rounded-md bottom-8 right-8">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-12 h-12">
                    <path fillRule="evenodd" d="M5.337 21.718a6.707 6.707 0 01-.533-.074.75.75 0 01-.44-1.223 3.73 3.73 0 00.814-1.686c.023-.115-.022-.317-.254-.543C3.274 16.587 2.25 14.41 2.25 12c0-5.03 4.428-9 9.75-9s9.75 3.97 9.75 9c0 5.03-4.428 9-9.75 9-.833 0-1.643-.097-2.417-.279a6.721 6.721 0 01-4.246.997z" clipRule="evenodd" />
                </svg>
            </button>
            <button id="chatout1" className="hidden fixed bg-primary p-1 rounded-md bottom-8 right-8">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-12 h-12">
                    <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z" clipRule="evenodd" />
                </svg>
            </button>
            <button id="chatout2" className="hidden fixed bg-primary p-1 rounded-md bottom-8 right-8">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-12 h-12">
                    <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z" clipRule="evenodd" />
                </svg>
            </button>
            <div id="chatdiv1" className="hidden fixed shadow-lg max-w-[300px] w-full right-8 bottom-24 bg-white rounded-md border-x border-t border-gray-100">
                <div className="text-sm text-secondaryBrown px-4 flex justify-center space font-semibold">
                    <button className="py-3 px-3 bg-primary">
                        Warbot
                    </button>
                    <button id="livechat" className="py-3 px-3">
                        Live Chat
                    </button>
                </div>
                <div className="bg-yellow-50 pt-4 px-4 pb-6 text-xs space-y-3">
                    <div className="flex">
                        <p className="bg-white p-2 w-full ml-8 text-right rounded-md">Hallo, butuh bantuan?</p>
                        <div className="p-1 h-6 bg-primary ml-2 rounded-sm">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-4 h-4">
                                <path fillRule="evenodd" d="M5.337 21.718a6.707 6.707 0 01-.533-.074.75.75 0 01-.44-1.223 3.73 3.73 0 00.814-1.686c.023-.115-.022-.317-.254-.543C3.274 16.587 2.25 14.41 2.25 12c0-5.03 4.428-9 9.75-9s9.75 3.97 9.75 9c0 5.03-4.428 9-9.75 9-.833 0-1.643-.097-2.417-.279a6.721 6.721 0 01-4.246.997z" clipRule="evenodd" />
                            </svg>
                        </div>
                    </div>
                    <div className="flex">
                        <div className="p-1 h-6 bg-primary mr-2 rounded-sm">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-4 h-4">
                                <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clipRule="evenodd" />
                            </svg>
                        </div>
                        <p className="bg-white p-2 w-full mr-8 text-right rounded-md">Bagaimana cara mengikuti suatu kursus?</p>
                    </div>
                    <div className="flex">
                        <p className="bg-white p-2 w-full ml-8 text-right rounded-md">Kamu bisa melihat langkah-langkah cara menggunakan Warkop pada halaman beranda.</p>
                        <div className="p-1 h-6 bg-primary ml-2 rounded-sm">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-4 h-4">
                                <path fillRule="evenodd" d="M5.337 21.718a6.707 6.707 0 01-.533-.074.75.75 0 01-.44-1.223 3.73 3.73 0 00.814-1.686c.023-.115-.022-.317-.254-.543C3.274 16.587 2.25 14.41 2.25 12c0-5.03 4.428-9 9.75-9s9.75 3.97 9.75 9c0 5.03-4.428 9-9.75 9-.833 0-1.643-.097-2.417-.279a6.721 6.721 0 01-4.246.997z" clipRule="evenodd" />
                            </svg>
                        </div>
                    </div>
                    <div className="flex">
                        <p className="bg-white p-2 w-full ml-8 text-right rounded-md">Jika belum terjawab, silahkan menggunakanmenu live chat. Terima kasih!</p>
                        <div className="p-1 h-6 bg-primary ml-2 rounded-sm">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-4 h-4">
                                <path fillRule="evenodd" d="M5.337 21.718a6.707 6.707 0 01-.533-.074.75.75 0 01-.44-1.223 3.73 3.73 0 00.814-1.686c.023-.115-.022-.317-.254-.543C3.274 16.587 2.25 14.41 2.25 12c0-5.03 4.428-9 9.75-9s9.75 3.97 9.75 9c0 5.03-4.428 9-9.75 9-.833 0-1.643-.097-2.417-.279a6.721 6.721 0 01-4.246.997z" clipRule="evenodd" />
                            </svg>
                        </div>
                    </div>
                </div>
                <div className="p-2 bg-primary flex rounded-b-md ">
                    <input type="text" className="text-left text-xs font-light w-full rounded-l-md p-2 focus:outline-none" placeholder="Kirim Pesan"/>
                    <button className="bg-white p-1 rounded-r-md">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-6 h-6 fill-primary">
                            <path d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z" />
                        </svg>
                    </button>
                </div>
            </div>

            <div id="chatdiv2" className="hidden fixed shadow-lg max-w-[300px] w-full right-8 bottom-24 bg-white rounded-md border-x border-t border-gray-100">
                <div className="text-sm text-secondaryBrown px-4 flex justify-center space font-semibold">
                    <button id="warbot" className="py-3 px-3">
                        Warbot
                    </button>
                    <button className="py-3 px-3 bg-primary">
                        Live Chat
                    </button>
                </div>
                <div className="bg-yellow-50 p-4 text-xs rounded-b-md">
                    <div className="bg-primary p-4 space-y-3 rounded-md">
                        <input type="text" placeholder="* Nama" className="font-light p-2 w-full rounded-md focus:outline-none"/>
                        <input type="text" placeholder="* Email" className="font-light p-2 w-full rounded-md focus:outline-none"/>
                        <textarea placeholder="* Pesan" className="font-light p-2 w-full h-[133px] resize-none rounded-md focus:outline-none"></textarea>
                        <button className="bg-white flex w-full justify-center p-2 rounded-md">
                            <p className="font-semibold mr-1">Kirim</p>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-4 h-4  fill-secondaryBrown">
                                <path d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
  )
}
