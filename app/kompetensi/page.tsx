import Footer1st from "../components/footer1st/page";
import Footer2nd from "../components/footer2nd/page";
import Header from "../components/header/page";
import arrowDown from "@/public/asset/Arrow Down.png";

export default function CompType() {
  return (
    <div>
        <Header/>
        <div className="mt-12 lg:mt-24 px-8 pt-16 pb-6">
            <h1 className="text-secondaryBrown font-bold uppercase text-4xl my-3">Daftar Menu Pembelajaran</h1>
            <p className="text-darkbrown text-justify">Warung Kompetensi Pegawai menyediakan berbagai Menu Pembelajaran yang bisa kalian ikuti. Selesaikan kelas anda dan dapatkan sertifikat kompetensi berbentuk digital</p>
        </div>
        <div className="mt-4 px-4 md:px-8 pb-6 md:flex justify-between items-center space-y-4 md:space-y-0">
            <div className="bg-gray-100 w-full md:w-1/3 p-3 flex justify-between items-center rounded-md cursor-pointer">
              <p className="text-gray-500">Jenis Kompetensi</p>
              <img src={arrowDown.src} alt="" className="inline" />
            </div>
            <div className="w-full md:w-2/5 flex justify-between items-center space-x-2">
              <input type="text" className="p-3 bg-gray-100 w-full border-none rounded-md" placeholder="Cari Menu Pembelajaran"/>
              <button className="bg-primary text-secondaryBrown py-3 px-7 rounded-md font-semibold">Cari</button>
            </div>
        </div>
        <div className="bg-base p-4 md:px-8 md:flex justify-between items-center space-x-4 space-y-4 md:space-y-0">
          <div className="w-full md:w-1/4 my-4 border border-gray-100 shadow-md rounded-b-md">
            <div className="w-full bg-primary text-secondaryBrown p-4 rounded-t-md font-bold">
              Urutkan Berdasarkan
            </div>
            <ul className="w-full p-4 pb-12 bg-white">
              <li className="flex space-x-1 text-secondaryBrown font-semibold">
                <input type="checkbox" className="mt-1 text-primary rounded-sm border-secondaryBrown"/>
                <p>Semua</p>
              </li>
              <li className="flex space-x-1 text-secondaryBrown font-semibold">
                <input type="checkbox" className="mt-1 text-primary rounded-sm border-secondaryBrown"/>
                <p>Terbaru</p>
              </li>
              <li className="flex space-x-1 text-secondaryBrown font-semibold">
                <input type="checkbox" className="mt-1 text-primary rounded-sm border-secondaryBrown"/>
                <p>Akan Datang</p>
              </li>
            </ul>
          </div>
        </div>
        <Footer2nd/>
        <Footer1st/>
    </div>
  )
}
