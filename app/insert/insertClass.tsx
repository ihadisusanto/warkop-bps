export default function insertClass(){
    return(
        <>
            <div className="h-auto mt-24 lg:px-16 lg:py-16 bg-base flex">
                <div className="bg-white mt-10 w-full lg:w-1/2 m-auto p-8">
                    <h3 className="text-center text-2xl font-bold text-secondaryBrown">INSERT CLASS</h3>
                    <form action="">
                        <div className="relative mt-3 w-full lg:w-2/3 mx-auto">
                            <label className="font-semibold text-secondaryBrown" htmlFor="judul">Judul Kelas</label>
                            <input type="text" id="judul" className="bg-gray-50 border border-gray-300 text-secondaryBrown text-sm rounded-lg focus:ring-2 focus:ring-secondaryBrown focus:outline-none block w-full pl-4 p-2.5 transition duration-300" placeholder=""/>
                        </div>
                        <div className="relative mt-3 w-full lg:w-2/3 mx-auto">
                            <label className="font-semibold text-secondaryBrown" htmlFor="diklat">Diklat</label>
                            <input type="text" id="diklat" className="bg-gray-50 border border-gray-300 text-secondaryBrown text-sm rounded-lg focus:ring-2 focus:ring-secondaryBrown focus:outline-none block w-full pl-4 p-2.5 transition duration-300" placeholder=""/>
                        </div>
                        <div className="relative mt-3 w-full lg:w-2/3 mx-auto">
                            <label className="font-semibold text-secondaryBrown" htmlFor="jam">Jumlah Jam</label>
                            <input type="number" id="jam" className="bg-gray-50 border border-gray-300 text-secondaryBrown text-sm rounded-lg focus:ring-2 focus:ring-secondaryBrown focus:outline-none block w-full pl-4 p-2.5 transition duration-300" placeholder=""/>
                        </div>
                        <div className="relative mt-3 w-full lg:w-2/3 mx-auto">
                            <label className="font-semibold text-secondaryBrown" htmlFor="tgl_mulai">Tanggal Mulai</label>
                            <input type="text" id="tgl_mulai" className="bg-gray-50 border border-gray-300 text-secondaryBrown text-sm rounded-lg focus:ring-2 focus:ring-secondaryBrown focus:outline-none block w-full pl-4 p-2.5 transition duration-300" placeholder=""/>
                        </div>
                        <div className="relative mt-3 w-full lg:w-2/3 mx-auto">
                            <label className="font-semibold text-secondaryBrown" htmlFor="tgl_selesai">Tanggal Selesai</label>
                            <input type="text" id="tgl_selesai" className="bg-gray-50 border border-gray-300 text-secondaryBrown text-sm rounded-lg focus:ring-2 focus:ring-secondaryBrown focus:outline-none block w-full pl-4 p-2.5 transition duration-300" placeholder=""/>
                        </div>
                        <div className="relative mt-3 w-full lg:w-2/3 mx-auto">
                            <label className="font-semibold text-secondaryBrown" htmlFor="teacher">Teacher</label>
                            <input type="text" id="teacher" className="bg-gray-50 border border-gray-300 text-secondaryBrown text-sm rounded-lg focus:ring-2 focus:ring-secondaryBrown focus:outline-none block w-full pl-4 p-2.5 transition duration-300" placeholder=""/>
                        </div>
                        <div className="relative mt-3 w-full lg:w-2/3 mx-auto">
                            <label className="font-semibold text-secondaryBrown" htmlFor="manager">Manager</label>
                            <input type="text" id="manager" className="bg-gray-50 border border-gray-300 text-secondaryBrown text-sm rounded-lg focus:ring-2 focus:ring-secondaryBrown focus:outline-none block w-full pl-4 p-2.5 transition duration-300" placeholder=""/>
                        </div>
                        <div className="relative mt-3 w-full lg:w-2/3 mx-auto">
                            <label className="font-semibold text-secondaryBrown" htmlFor="status">Status</label>
                            <input type="text" id="status" className="bg-gray-50 border border-gray-300 text-secondaryBrown text-sm rounded-lg focus:ring-2 focus:ring-secondaryBrown focus:outline-none block w-full pl-4 p-2.5 transition duration-300" placeholder=""/>
                        </div>
                        <div className="relative mt-3 w-full lg:w-2/3 mx-auto">
                            <label className="font-semibold text-secondaryBrown" htmlFor="poster">Poster Link</label>
                            <input type="text" id="poster" className="bg-gray-50 border border-gray-300 text-secondaryBrown text-sm rounded-lg focus:ring-2 focus:ring-secondaryBrown focus:outline-none block w-full pl-4 p-2.5 transition duration-300" placeholder=""/>
                        </div>
                        <div className="relative mt-3 w-full lg:w-2/3 mx-auto">
                            <label className="font-semibold text-secondaryBrown" htmlFor="pesan">Pesan</label>
                            <textarea id="pesan" className="bg-gray-50 border h-32 border-gray-300 text-secondaryBrown text-sm rounded-lg focus:ring-2 focus:ring-secondaryBrown focus:outline-none block w-full pl-4 p-2.5 transition duration-300" placeholder=""/>
                        </div>
                        <div className="relative my-5 w-full lg:w-2/3 mx-auto">
                            <button type="submit" className="bg-primary text-lg font-semibold text-slate-100 text-center hover:shadow-lg rounded-lg w-full py-2 transition duration-500">Tambah Kelas</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}