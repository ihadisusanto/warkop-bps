'use client';

import Image from "next/image";
import { useEffect } from "react";
import warkopLogo from "@/public/asset/Logo Warkop Header.png";
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
    });

    return(
        <header className="bg-transparent absolute w-full top-0 left-0 flex items-center z-10">
            <div className="container">
                <div className="flex items-center justify- relative">
                    <div className="flex items-center px-4">
                        <button id="hamburger" name="hamburger" type="button" className="block absolute left-4 lg:hidden">
                            <span className="hamburger-line transition duration-300 ease-in-out origin-top-left"></span>
                            <span className="hamburger-line transition duration-300 ease-in-out"></span>
                            <span className="hamburger-line transition duration-300 ease-in-out origin-bottom-left"></span>
                        </button>

                        <nav id="nav-menu" className="hidden absolute py-5 bg-white shadow-lg rounded-lg max-w-[250px] w-full left-4 top-full lg:block lg:static lg:bg-transparent lg:max-w-full lg:shadow-none lg:rounded-none">
                            <ul className="block lg:flex">
                                <li className="group">
                                    <a href="#home" className="text-base text-secondaryBrown py-2 mx-5 flex group-hover:text-primary">Beranda</a>
                                </li>
                                <li className="group">
                                    <a href="#about" className="text-base text-secondaryBrown py-2 mx-5 flex group-hover:text-primary">Jenis Kompetensi</a>
                                </li>
                                <li className="group">
                                    <a href="#portfolio" className="text-base text-secondaryBrown py-2 mx-5 flex group-hover:text-primary">FAQ</a>
                                </li>
                                <li className="group">
                                    <a href="#clients" className="text-base text-secondaryBrown py-2 mx-5 flex group-hover:text-primary">Pengumuman</a>
                                </li>
                                <div className="md:hidden">
                                    <hr/>
                                    <li className="group">
                                        <a href="#" className="text-base text-secondaryBrown py-2 mx-5 flex group-hover:text-primary">Login</a>
                                    </li>
                                    <li className="group">
                                        <a href="#" className="text-base text-secondaryBrown py-2 mx-5 flex group-hover:text-primary">Daftar</a>
                                    </li>
                                </div>
                            </ul>
                        </nav>
                    </div>
                    <div className="px-4">
                        <img src={warkopLogo.src} alt="Logo Warkop" className="scale-75"/>
                    </div>
                    <div className="hidden px-4 right-4">
                        <button className="bg-slate-100 text-secondaryBrown mr-4 py-3 px-8 rounded-md hover:text-primary hover:shadow-lg transition duration-500">Login</button>
                        <button className="bg-primary text-secondaryBrown mr-4 py-3 px-8 rounded-md hover:shadow-lg transition duration-500">Daftar</button>
                    </div>
                </div>
            </div>
        </header>
    )
}