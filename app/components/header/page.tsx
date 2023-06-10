'use client';

import Image from "next/image";
import { useEffect } from "react";
import warkopLogo from "@/public/asset/Logo Warkop Header.png";
import arrowDown from "@/public/asset/Arrow Down.png";
import bps from "@/public/asset/Login BPS Sign-On.png"
import login from "@/public/asset/Login Warkop Login Page.png"

export default function Header() {
    useEffect(() => {
        //navbar fixed
        window.onscroll = function(){
            const header = document.querySelector('header')!;
            const fixedNav = header.offsetTop; //jarak posisi header terhadap top nya
            if(window.scrollY > fixedNav){
                header.classList.add('navbar-fixed');
            }else{
                header.classList.remove('navbar-fixed');
            }
        }
        
        //Hamburger
        const hamburger = document.getElementById('hamburger')!;
        const navMenu = document.getElementById('nav-menu')!;
        hamburger.addEventListener('click',function(){
            hamburger.classList.toggle('hamburger-active');
            navMenu.classList.toggle('hidden');
        });

        //login
        const loginBtn = document.getElementById('loginBtn')!;
        const loginMenu = document.getElementById('login-menu')!;
        loginBtn.addEventListener('click',function(){
            loginMenu.classList.toggle('hidden');
        });

        //login-ch
        const loginCh = document.getElementById('login-ch')!;
        const loginDetails = document.getElementById('login-details')!;
        loginCh.addEventListener('click',function(){
            loginDetails.classList.toggle('hidden');
        })
    });

    return(
        <header className="bg-transparent absolute w-full top-0 left-0 flex items-center z-10">
            <div className="w-full">
                <div className="flex items-center justify-between relative">
                    <div className="flex items-center px-4">
                        <button id="hamburger" name="hamburger" type="button" className="block absolute left-4 lg:hidden">
                            <span className="hamburger-line transition duration-300 ease-in-out origin-top-left"></span>
                            <span className="hamburger-line transition duration-300 ease-in-out"></span>
                            <span className="hamburger-line transition duration-300 ease-in-out origin-bottom-left"></span>
                        </button>

                        <nav id="nav-menu" className="hidden absolute py-5 bg-white shadow-lg rounded-lg max-w-[200px] w-full left-4 top-full lg:block lg:static lg:bg-transparent lg:max-w-full lg:shadow-none lg:rounded-none">
                            <ul className="block lg:flex">
                                <li className="group">
                                    <a href="/" className="text-base text-secondaryBrown py-2 mx-5 flex group-hover:text-primary transition duration-400">Beranda</a>
                                </li>
                                <li className="group">
                                    <a href="/kompetensi" className="text-base text-secondaryBrown py-2 mx-5 flex group-hover:text-primary transition duration-400">Kompetensi</a>
                                </li>
                                <li className="group">
                                    <a href="/faq" className="text-base text-secondaryBrown py-2 mx-5 flex group-hover:text-primary transition duration-400">FAQ</a>
                                </li>
                                <li className="group">
                                    <a href="/pengumuman" className="text-base text-secondaryBrown py-2 mx-5 flex group-hover:text-primary transition duration-400">Pengumuman</a>
                                </li>
                                <div className="md:hidden">
                                    <hr/>
                                    <li className="group">
                                        <a id="login-ch" href="#" className="text-base text-secondaryBrown py-2 mx-5 flex group-hover:text-primary transition duration-400"><p>Login <img src={arrowDown.src} alt="" className="inline" /></p></a>
                                    </li>
                                    <div id="login-details" className="hidden pl-3">
                                        <li className="group">
                                            <a href="#" className="text-base text-secondaryBrown py-2 mx-5 flex group-hover:text-primary transition duration-400"><img src={bps.src} className="scale-80" alt="" /></a>
                                        </li>
                                        <li className="group">
                                            <a href="#" className="text-base text-secondaryBrown py-2 mx-5 flex group-hover:text-primary transition duration-400"><img src={login.src} className="scale-80" alt="" /></a>
                                        </li>
                                    </div>
                                    <li className="group">
                                        <a href="#" className="text-base text-secondaryBrown py-2 mx-5 flex group-hover:text-primary transition duration-400">Daftar</a>
                                    </li>
                                </div>
                            </ul>
                        </nav>
                    </div>
                    <div className="px-1 lg:mr-32">
                        <img src={warkopLogo.src} alt="Logo Warkop" className="scale-75"/>
                    </div>
                    <div className="hidden px-4 right-4 md:inline-block">
                        <button id="loginBtn" className="bg-slate-100 text-secondaryBrown mr-4 py-3 px-8 rounded-md hover:shadow-lg transition duration-500"><p>Login <img src={arrowDown.src} alt="" className="inline" /></p></button>
                        <button className="bg-primary text-secondaryBrown mr-4 py-3 px-8 rounded-md hover:shadow-lg transition duration-500">Daftar</button>
                        <div id="login-menu" className="hidden absolute bg-slate-100 shadow-lg rounded-lg max-w-[250px] w-full right-9 mt-3">
                            <ul className="block">
                                <li className="group hover:bg-primary transition duration-300">
                                    <a href="/sso" className="text-base text-secondaryBrown py-2 mx-4 flex group-hover:text-primary transition duration-400"><img src={bps.src} alt="BPS" className="inline"/></a>
                                </li>
                                <hr className="border-slate-300"/>
                                <li className="group  hover:bg-primary transition duration-300">
                                    <a href="/login" className="text-base text-secondaryBrown py-2 mx-4 flex group-hover:text-primary transition duration-400"><img src={login.src} alt="Login" className="inline"/></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}