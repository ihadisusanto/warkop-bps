export default function insertEmail(){
    return(
                <div className="h-[80vh] mt-24 lg:px-16 lg:py-16 bg-base flex">
                    <div className="bg-white mt-10 w-full lg:w-1/2 m-auto p-8">
                        <h3 className="text-center text-2xl font-bold text-secondaryBrown">Reset Kata Sandi</h3>                
                        <div className="relative my-5 w-full lg:w-2/3 mx-auto">
                            <p className="text-slate-500 text-justify text-sm lg:text-base lg:text-slate-500">Untuk mereset kata sandi Anda, silahkan masukkan nama pengguna atau alamat surel Anda di bawah. Kami akan mengirimkan surel ke alamat surel Anda yang berisi instruksi untuk mendapatkan akses akun Anda kembali.</p>
                        </div>
                        <div className="relative my-5 w-full lg:w-2/3 mx-auto">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <svg aria-hidden="true" className="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
                            </div>
                            <input type="text" id="email-address-icon" className="bg-gray-50 border border-gray-300 text-secondaryBrown text-sm rounded-lg focus:ring-2 focus:ring-secondaryBrown focus:outline-none block w-full pl-10 p-2.5 transition duration-300" placeholder="Nama pengguna atau alamat surel"/>
                        </div>
                        <div className="relative my-5 w-full lg:w-2/3 mx-auto">
                            <button className="bg-primary text-lg font-semibold text-slate-100 text-center hover:shadow-lg rounded-lg w-full py-2 transition duration-500">Kirim</button>
                        </div>
                    </div>
                </div>
    )
}