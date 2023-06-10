import Image from "next/image"
import FtImg from "@/public/asset/Logo Warkop Footer.png"

export default function Footer2nd() {
    return (
        <div className="bg-gray-900 w-full flex justify-between text-start py-10 px-4 lg:px-20 lg:text-sm text-xs mt-auto">
            <Image src={FtImg} alt="Gambar Footer"className="mt-12 md:mt-0 md:w-[150px] w-[110px] md:h-[150px] h-[110px]"/>
            <ul>
                <li className="text-primary font-semibold mb-3">Link Terkait</li>
                <li className="text-white font-light mb-1"><a href="https://bps.go.id" className="flex hover:text-primary"><p className="text-primary mr-2">&gt;</p>Badan Pusat Statistik</a></li>
                <li className="text-white font-light mb-1"><a href="https://pusdiklat.bps.go.id" className="flex hover:text-primary"><p className="text-primary mr-2">&gt;</p>Pusat Pendidikan dan Pelatihan BPS</a></li>
                <li className="text-white font-light mb-1"><a href="https://lan.go.id/" className="flex hover:text-primary"><p className="text-primary mr-2">&gt;</p>Lembaga Administrasi Negara</a></li>
                <li className="text-white font-light mb-1"><a href="https://www.menpan.go.id/site/" className="flex hover:text-primary"><p className="text-primary mr-2">&gt;</p>Kementrian Pendayagunaan dan Aparatur Negara</a></li>
                <li className="text-white font-light mb-1"><a href="#" className="flex hover:text-primary"><p className="text-primary mr-2">&gt;</p>Dokumentasi: Progress Report Warkop</a></li>
            </ul>
            <ul>
                <li className="text-primary font-semibold mb-3">Hubungi Kami</li>
                <li className="text-white font-light lg:flex mb-1">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 mr-2">
                        <path fill-rule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd" />
                    </svg>
                    Jl. Raya Jagakarsa 70, Lenteng Agung, Jakarta 12620
                </li>
                <li className="text-white font-light lg:flex mb-1">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 mr-2">
                        <path fill-rule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clip-rule="evenodd" />
                    </svg>
                    Telp: (021) 7873781-83
                </li>
                <li className="text-white font-light lg:flex mb-1">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 mr-2">
                        <path fillRule="evenodd" d="M7.875 1.5C6.839 1.5 6 2.34 6 3.375v2.99c-.426.053-.851.11-1.274.174-1.454.218-2.476 1.483-2.476 2.917v6.294a3 3 0 003 3h.27l-.155 1.705A1.875 1.875 0 007.232 22.5h9.536a1.875 1.875 0 001.867-2.045l-.155-1.705h.27a3 3 0 003-3V9.456c0-1.434-1.022-2.7-2.476-2.917A48.716 48.716 0 0018 6.366V3.375c0-1.036-.84-1.875-1.875-1.875h-8.25zM16.5 6.205v-2.83A.375.375 0 0016.125 3h-8.25a.375.375 0 00-.375.375v2.83a49.353 49.353 0 019 0zm-.217 8.265c.178.018.317.16.333.337l.526 5.784a.375.375 0 01-.374.409H7.232a.375.375 0 01-.374-.409l.526-5.784a.373.373 0 01.333-.337 41.741 41.741 0 018.566 0zm.967-3.97a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75H18a.75.75 0 01-.75-.75V10.5zM15 9.75a.75.75 0 00-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 00.75-.75V10.5a.75.75 0 00-.75-.75H15z" clipRule="evenodd" />
                    </svg>
                    Fax: (021) 7873955,7875497
                </li>
                <li className="text-white font-light lg:flex mb-1">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 mr-2">
                        <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                        <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                    </svg>
                    E-mail:&ensp;<a href="pusdiklat.bps.go.id">pusdiklat.bps.go.id</a>
                </li>
            </ul>
        </div>
    )
}