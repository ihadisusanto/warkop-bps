import Footer1st from "../components/footer1st/page";
import Header from "../components/header/page";

export default function login(){
    return(
        <>
            <Header/>
            <div className="h-[80vh] mt-24 lg:px-16 lg:py-16 bg-base flex">
                <div className="bg-white mt-10 w-full lg:w-1/2 m-auto p-8">
                    <h3 className="text-center text-2xl font-bold text-secondaryBrown">Login</h3>                
                    <div className="relative my-5 w-full lg:w-2/3 mx-auto">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <svg aria-hidden="true" className="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
                        </div>
                        <input type="text" id="email-address-icon" className="bg-gray-50 border border-gray-300 text-secondaryBrown text-sm rounded-lg focus:ring-2 focus:ring-secondaryBrown focus:outline-none block w-full pl-10 p-2.5 transition duration-300" placeholder="Nama pengguna atau alamat surel"/>
                    </div>
                    <div className="relative my-5 w-full lg:w-2/3 mx-auto">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-shield-lock-fill" viewBox="0 0 16 16"> <path fillRule="evenodd" d="M8 0c-.69 0-1.843.265-2.928.56-1.11.3-2.229.655-2.887.87a1.54 1.54 0 0 0-1.044 1.262c-.596 4.477.787 7.795 2.465 9.99a11.777 11.777 0 0 0 2.517 2.453c.386.273.744.482 1.048.625.28.132.581.24.829.24s.548-.108.829-.24a7.159 7.159 0 0 0 1.048-.625 11.775 11.775 0 0 0 2.517-2.453c1.678-2.195 3.061-5.513 2.465-9.99a1.541 1.541 0 0 0-1.044-1.263 62.467 62.467 0 0 0-2.887-.87C9.843.266 8.69 0 8 0zm0 5a1.5 1.5 0 0 1 .5 2.915l.385 1.99a.5.5 0 0 1-.491.595h-.788a.5.5 0 0 1-.49-.595l.384-1.99A1.5 1.5 0 0 1 8 5z" fill="#6b7280"></path> </svg>
                        </div>
                        <input type="text" id="password-icon" className="bg-gray-50 border border-gray-300 text-secondaryBrown text-sm rounded-lg focus:ring-2 focus:ring-secondaryBrown focus:outline-none block w-full pl-10 p-2.5 transition duration-300" placeholder="Kata sandi"/>
                    </div>
                    <div className="relative my-5 w-full lg:w-2/3 mx-auto">
                        <button className="bg-primary text-xl font-semibold text-slate-100 text-center hover:shadow-lg rounded-lg w-full py-2 transition duration-500">Login</button>
                        <p className="text-slate-400 font-semibold text-sm my-5 text-center hover:underline"><a href="/forgetpass">Lupa kata sandi</a></p>
                        <p className="text-slate-400 font-semibold text-sm my-5 text-center">Belum memiliki akun? <a href="/register" className="text-secondaryBrown hover:underline">Daftar</a></p>
                    </div>
                </div>
            </div>
            <Footer1st/>
        </>
    )
}