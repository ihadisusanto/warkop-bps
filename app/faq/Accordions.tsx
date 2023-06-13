'use client'
import { useEffect } from "react";
import { Accordion } from "flowbite";
import type { AccordionOptions, AccordionItem, AccordionInterface } from "flowbite";

export default function Accordions(){
    useEffect(()=>{
        const accordionItems: AccordionItem[] = [
            {
                id: 'accordion-collapse-heading-1',
                triggerEl: document.querySelector('#accordion-collapse-heading-1')!,
                targetEl: document.querySelector('#accordion-collapse-body-1')!,
                active: false
            },
            {
                id: 'accordion-collapse-heading-2',
                triggerEl: document.querySelector('#accordion-collapse-heading-2')!,
                targetEl: document.querySelector('#accordion-collapse-body-2')!,
                active: false
            },
            {
                id: 'accordion-collapse-heading-3',
                triggerEl: document.querySelector('#accordion-collapse-heading-3')!,
                targetEl: document.querySelector('#accordion-collapse-body-3')!,
                active: false
            },
            {
                id: 'accordion-collapse-heading-4',
                triggerEl: document.querySelector('#accordion-collapse-heading-4')!,
                targetEl: document.querySelector('#accordion-collapse-body-4')!,
                active: false
            },
            {
                id: 'accordion-collapse-heading-5',
                triggerEl: document.querySelector('#accordion-collapse-heading-5')!,
                targetEl: document.querySelector('#accordion-collapse-body-5')!,
                active: false
            },
            {
                id: 'accordion-collapse-heading-6',
                triggerEl: document.querySelector('#accordion-collapse-heading-6')!,
                targetEl: document.querySelector('#accordion-collapse-body-6')!,
                active: false
            },
            {
                id: 'accordion-collapse-heading-7',
                triggerEl: document.querySelector('#accordion-collapse-heading-7')!,
                targetEl: document.querySelector('#accordion-collapse-body-7')!,
                active: false
            },
            {
                id: 'accordion-collapse-heading-8',
                triggerEl: document.querySelector('#accordion-collapse-heading-8')!,
                targetEl: document.querySelector('#accordion-collapse-body-8')!,
                active: false
            },
        ];
        
        // options with default values
        const options: AccordionOptions = {
            alwaysOpen: true,
            activeClasses: 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white',
            inactiveClasses: 'text-gray-500 dark:text-gray-400',
            onOpen: (item) => {
                console.log('accordion item has been shown');
                console.log(item);
            },
            onClose: (item) => {
                console.log('accordion item has been hidden');
                console.log(item);
            },
            onToggle: (item) => {
                console.log('accordion item has been toggled');
                console.log(item);
            },
        };
        
        /*
        * accordionItems: array of accordion item objects
        * options: optional
        */
        const accordion: AccordionInterface = new Accordion(accordionItems, options);
        
        // open accordion item based on id
        accordion.open('accordion-collapse-heading-1');
    })

    return(
        <div className="mt-5 lg:mt-10" id="accordion-collapse" data-accordion="collapse">
            <h2 className="border-b-2" id="accordion-collapse-heading-1">
                <button type="button" className="flex items-center justify-between w-full p-5 text-left text-secondaryBrown font-bold border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 hover:bg-gray-100" data-accordion-target="#accordion-collapse-body-1" aria-expanded="true" aria-controls="accordion-collapse-body-1">
                    <span className="text-sm lg:text-[16px] text-justify">Siapa saja yang dapat menjadi peserta di WARKOP?</span>
                    <svg data-accordion-icon className="w-6 h-6 shrink-0 text-primary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                </button>
            </h2>
            <div id="accordion-collapse-body-1" className="hidden border-b-2" aria-labelledby="accordion-collapse-heading-1">
                <div className="p-5 border border-b-0 border-gray-200">
                    <p className="mb-2 text-sm lg:text-[16px] text-secondaryBrown text-justify">Peserta adalah setiap pegawai BPS yang menggunakan layanan Warkop untuk meningkatkan kompetensinya. Siapapun pegawai BPS dapat menjadi peserta di Warkop terlepas dari tingkat jabatannya dan tingkat pendidikannya.</p>
                </div>  
            </div>

            <h2 className="mt-5 lg:mt-10 border-b-2" id="accordion-collapse-heading-2">
                <button type="button" className="flex items-center justify-between w-full p-5 text-left text-secondaryBrown font-bold border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 hover:bg-gray-100" data-accordion-target="#accordion-collapse-body-2" aria-expanded="false" aria-controls="accordion-collapse-body-2">
                <span className="text-sm lg:text-[16px] text-justify"> Bagaimana cara menjadi peserta di WARKOP?</span>
                <svg data-accordion-icon className="w-6 h-6 shrink-0 text-primary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                </button>
            </h2>
            <div id="accordion-collapse-body-2" className="hidden border-b-2" aria-labelledby="accordion-collapse-heading-2">
                <div className="p-5 border border-b-0 border-gray-200">
                    <p className="text-sm lg:text-[16px] mb-2 text-secondaryBrown">Untuk menjadi peserta di WARKOP dapat dilakukan dengan melakukan pendaftaran dengan klik <span className="font-bold">Daftar</span> pada bagian isian login. lalu mengisi formulir pendaftaran.</p>
                </div>
            </div>

            <h2 className="mt-5 lg:mt-10" id="accordion-collapse-heading-3">
                <button type="button" className="flex items-center justify-between w-full p-5 font-bold text-secondaryBrown text-left border border-gray-200 focus:ring-4 focus:ring-gray-200 hover:bg-gray-100" data-accordion-target="#accordion-collapse-body-3" aria-expanded="false" aria-controls="accordion-collapse-body-3">
                <span className="text-sm lg:text-[16px] text-justify">Apa itu platform WARKOP?</span>
                <svg data-accordion-icon className="w-6 h-6 shrink-0 text-primary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                </button>
            </h2>
            <div id="accordion-collapse-body-3" className="hidden" aria-labelledby="accordion-collapse-heading-3">
                <div className="p-5 border border-t-0 border-gray-200">
                    <p className="text-sm lg:text-[16px] text-justify mb-2 text-secondaryBrown">WARKOP merupakan platform pengembangan SDM dalam bentuk pelatihan nonklasikal yang menggabungkan berbagai metode pembelajaran inovatif dengan mengoptimalkan penggunaan teknologi informasi dan komunikasi. WARKOP merupakan bagian pengembangan kompetensi Sistem Pembelajaran Terpadu untuk melengkapi pembelajaran formal atau klasikal di kelas.</p>
                </div>
            </div> 

            <h2 className="mt-5 lg:mt-10" id="accordion-collapse-heading-4">
                <button type="button" className="flex items-center justify-between w-full p-5 font-bold text-secondaryBrown text-left border border-gray-200 focus:ring-4 focus:ring-gray-200 hover:bg-gray-100" data-accordion-target="#accordion-collapse-body-4" aria-expanded="false" aria-controls="accordion-collapse-body-4">
                    <span className="text-sm lg:text-[16px] text-justify">Fitur apa saja yang tersedia pada platform WARKOP?</span>
                    <svg data-accordion-icon className="w-6 h-6 shrink-0 text-primary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                </button>
            </h2>
            <div id="accordion-collapse-body-4" className="hidden" aria-labelledby="accordion-collapse-heading-4">
                <div className="text-secondaryBrown text-sm lg:text-[16px] text-justify p-5 border border-t-0 border-gray-200">
                    <ol className="list-decimal ml-3">
                        <li className="mb-2">
                            <p className="font-bold">Registrasi</p> 
                            <p>Menu ini merupakan administrasi pendaftaran peserta. Dasar pemikiran mengangkat menu Registrasi adalah sebagai pengganti pendaftaran pada kelas klasikal (tatap muka). Registrasi juga sebagai bahan untuk penyusunan database pegawai yang mengikuti pelatihan serta bahan penyusunan sertifikat sebagai bukti telah mengikuti pelatihan nonklasikal.</p>
                        </li>
                        <li className="mb-2">
                            <p className="font-bold">Beranda</p>
                            <p>Pada menu beranda berisi berbagai menu pengembangan kompetensi. Pada menu ini juga berisi berbagai informasi pengembangan kompetensi pegawai dan berbagai materi pengembangan kompetensi yang tersedia di WARKOP</p>
                        </li>
                        <li className="mb-2">
                            <p className="font-bold">Kompetensi</p>
                            <p>Menu ini memberi kesempatan pengguna untuk memilih kompetensi yang ingin ditingkatkan, yakni kompetensi teknis, kompetensi manajerial, dan kompetensi sosial kultural</p>
                        </li>
                        <li className="mb-2">
                            <p className="font-bold">Ruang Baca</p>
                            <p>Menu ini merupakan Perpustakaan virtual. Menu ini merupakan konsep perpustakaan yang memberikan cara bagi peserta dalam mengakses informasi dan pengetahuan secara elektronik. Perpustakaan virtual ini dapat dijangkau oleh ASN dengan mudah dari manapun mereka inginkan</p>
                        </li>
                        <li className="mb-2">
                            <p className="font-bold">FAQ</p>
                            <p>Menu FAQ (Frequently Asked Question) merupakan wadah Tanya – Jawab. Hasil dari tanya-jawab ini menjadi kumpulan informasi dan pengetahuan yang bisa digunakan secara bersama</p>
                        </li>
                    </ol>
                </div>
            </div>

            <h2 className="mt-5 lg:mt-10" id="accordion-collapse-heading-5">
                <button type="button" className="flex items-center justify-between w-full p-5 font-bold text-secondaryBrown text-left border border-gray-200 focus:ring-4 focus:ring-gray-200 hover:bg-gray-100" data-accordion-target="#accordion-collapse-body-5" aria-expanded="false" aria-controls="accordion-collapse-body-5">
                    <span className="text-sm lg:text-[16px] text-justify">Apa saja perangkat dan spesifikasi yang kompatibel dengan penggunaan platform WARKOP?</span>
                    <svg data-accordion-icon className="w-6 h-6 shrink-0 text-primary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                </button>
            </h2>
            <div id="accordion-collapse-body-5" className="hidden" aria-labelledby="accordion-collapse-heading-5">
                <div className="p-5 border border-t-0 text-secondaryBrown text-sm lg:text-[16px]  border-gray-200">
                    <p className="text-justify mb-2 ">Kamu bisa menggunakan perangkat elektronik seperti HP Smartphone, PC, Laptop ataupun perangkat lainnya. Pastikan kamu sudah mengecek beberapa hal berikut terkait kelancaran kamu dalam menggunakan platform WARKOP:</p>
                    <ol className="list-disc ml-3">
                        <li className="mb-1">Perangkat telah memiliki webcam sebagai bagian dari proses pembelajaran di WARKOP yang sebagain materi kompetensi membutuhkan Webinar</li>
                        <li className="mb-1">Jaringan internet yang mumpuni</li>
                        <li className="mb-1">Tersedia browser Google Chrome ataupun Mozilla firefox</li>
                    </ol>
                </div>
            </div>

            <h2 className="mt-5 lg:mt-10" id="accordion-collapse-heading-6">
                <button type="button" className="flex items-center justify-between w-full p-5 font-bold text-secondaryBrown text-left border border-gray-200 focus:ring-4 focus:ring-gray-200 hover:bg-gray-100" data-accordion-target="#accordion-collapse-body-6" aria-expanded="false" aria-controls="accordion-collapse-body-6">
                    <span className="text-sm lg:text-[16px] text-justify">Video dan Podcast tidak bisa diputar, apa yang harus saya lakukan?</span>
                    <svg data-accordion-icon className="w-6 h-6 shrink-0 text-primary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                </button>
            </h2>
            <div id="accordion-collapse-body-6" className="hidden" aria-labelledby="accordion-collapse-heading-6">
                <div className="p-5 border border-t-0 text-secondaryBrown text-sm lg:text-[16px]  border-gray-200">
                    <p className="text-justify mb-2">Pertama periksa dahulu koneksi internetnya, apabila masih tidak bisa, refresh kembali halaman website WARKOP dan coba kembali untuk mencoba video ataupun podcast yang kamu inginkan</p>
                </div>
            </div>

            <h2 className="mt-5 lg:mt-10" id="accordion-collapse-heading-7">
                <button type="button" className="flex items-center justify-between w-full p-5 font-bold text-secondaryBrown text-left border border-gray-200 focus:ring-4 focus:ring-gray-200 hover:bg-gray-100" data-accordion-target="#accordion-collapse-body-7" aria-expanded="false" aria-controls="accordion-collapse-body-7">
                    <span className="text-sm lg:text-[16px] text-justify">Siapa saja tutor atau pengampu materi di platform WARKOP?</span>
                    <svg data-accordion-icon className="w-6 h-6 shrink-0 text-primary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                </button>
            </h2>
            <div id="accordion-collapse-body-7" className="hidden" aria-labelledby="accordion-collapse-heading-7">
                <div className="p-5 border border-t-0 text-secondaryBrown text-sm lg:text-[16px]  border-gray-200">
                    <p className="text-justify mb-2">Pengampu materi komptensi di platform WARKOP adalah mereka yang telah mempunyai kompetensi di bidang tersebut, dapat berasal dari pihak internal maupun eksternal BPS</p>
                </div>
            </div>
            
            <h2 className="mt-5 lg:mt-10" id="accordion-collapse-heading-8">
                <button type="button" className="flex items-center justify-between w-full p-5 font-bold text-secondaryBrown text-left border border-gray-200 focus:ring-4 focus:ring-gray-200 hover:bg-gray-100" data-accordion-target="#accordion-collapse-body-8" aria-expanded="false" aria-controls="accordion-collapse-body-8">
                    <span className="text-sm lg:text-[16px] text-justify">Kemana saya bisa menghubungi layanan pelanggan WARKOP jika terjadi permasalahan terkait teknis penggunaan WARKOP?</span>
                    <svg data-accordion-icon className="w-6 h-6 shrink-0 text-primary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                </button>
            </h2>
            <div id="accordion-collapse-body-8" className="hidden" aria-labelledby="accordion-collapse-heading-8">
                <div className="p-5 border border-t-0 text-secondaryBrown text-sm lg:text-[16px]  border-gray-200">
                    <p className="text-justify mb-2 ">Kamu bisa menghubungi WARKOP melalui :</p>
                    <ol className="list-disc ml-3">
                        <li className="mb-1">Telepon: (021)7873782-83</li>
                        <li className="mb-1">Email : pusdiklat.noc@bps.go.id</li>
                        <li className="mb-1">Instagram : www.instagram.com/pusdiklat.bps</li>
                        <li className="mb-1">Twitter : https://twitter.com/pusdiklatBPS</li>
                    </ol>
                </div>
            </div>

        </div>

    )
}