export default function Confirmation(){
    return(
                <div className="h-[80vh] mt-24 lg:px-16 lg:py-16 bg-base flex">
                    <div className="bg-white mt-10 w-full lg:w-1/2 m-auto p-8">
                        <h3 className="text-center text-2xl font-bold text-secondaryBrown">Reset Kata Sandi</h3>                
                        <div className="relative my-5 w-full lg:w-2/3 mx-auto">
                            <p className="text-slate-500 text-justify text-sm lg:text-base lg:text-slate-500">Jika Anda memasukkan nama pengguna atau alamat surel yang benar, seharusnya surel dikirimkan kepada Anda.
Berisi instruksi mudah untuk mengonfirmasi dan menyelesaikan perubahan kata sandi ini. Jika Anda masih mengalami kesulitan, silakan menghubungi administrator situs.</p>
                        </div>
                        <div className="relative my-5 w-full lg:w-2/3 mx-auto">
                            <button className="bg-primary text-lg font-semibold text-slate-100 text-center hover:shadow-lg rounded-lg w-full py-2 transition duration-500">Lanjutkan</button>
                        </div>
                    </div>
                </div>
    )
}