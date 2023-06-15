import iconAccount from '@/public/asset/Icon Membuat akun.png';
import iconClass from '@/public/asset/Icon Pilih Kelas.png';
import iconKompentensi from '@/public/asset/Icon Pilih Kompetensi.png';
import iconSertifikat from '@/public/asset/Icon Sertifikat Digital.png';
/* eslint-disable @next/next/no-img-element */
export default function Card(){
    return(
        <div className="container bg-base lg:px-32 text-secondaryBrown">
            <h3 className="text-secondaryBrown font-bold text-center lg:text-3xl lg:pt-8 text-xl mb-14">Bagaimana Cara Menggunakan Warkop?</h3>
            <div className='flex flex-wrap'>
                <div className="w-full lg:w-1/4 px-4">
                    <div className='bg-white rounded-lg shadow-md mb-10 py-8 hover:shadow-lg hover:-translate-y-2 transition duration-300'>
                        <img src={iconAccount.src} alt="buat akun" className='mx-auto'/>
                        <div className='py-8 px-6'>
                            <h3 className='text-center text-xl font-bold mb-2'>Membuat Akun</h3>
                            <p className='text-center'>Daftarkan alamat email anda. Nikmati berbagai menu kompetensi yang tersedia</p>
                        </div>
                    </div>
                </div>
                <div className="w-full lg:w-1/4 px-4">
                    <div className='bg-white rounded-lg shadow-md mb-10 py-8 hover:shadow-lg hover:-translate-y-2 transition duration-300'>
                        <img src={iconKompentensi.src} alt="buat akun" className='mx-auto'/>
                        <div className='py-8 px-6'>
                            <h3 className='text-center text-secondaryBrown text-xl font-bold mb-2'>Pilih Kompetensi</h3>
                            <p className='text-center'>Lakukan pendaftaran pada menu kompetensi yang dipilih, lalu tunggu konfirmasi kelas.</p>
                        </div>
                    </div>
                </div>
                <div className="w-full lg:w-1/4 px-4">
                    <div className='bg-white rounded-lg shadow-md mb-10 py-8 hover:shadow-lg hover:-translate-y-2 transition duration-300'>
                        <img src={iconClass.src} alt="buat akun" className='mx-auto'/>
                        <div className='py-8 px-6'>
                            <h3 className='text-center text-secondaryBrown text-xl font-bold mb-2'>Pilih Kelas</h3>
                            <p className='text-center'>Setiap kelas memiliki berbagai jenis metode pembelajaran online yang dapat diakses kapanpun</p>
                        </div>
                    </div>
                </div>
                <div className="w-full lg:w-1/4 px-4">
                    <div className='bg-white rounded-lg shadow-md mb-10 py-8 hover:shadow-lg hover:-translate-y-2 transition duration-300'>
                        <img src={iconSertifikat.src} alt="buat akun" className='mx-auto'/>
                        <div className='py-8 px-6'>
                            <h3 className='text-center text-secondaryBrown text-xl font-bold mb-2'>Sertifikat Digital</h3>
                            <p className='text-center'>Selesaikan kelas dan dapatkan sertifikat kompetensi berbentuk digital!</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}