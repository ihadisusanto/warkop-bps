/* eslint-disable @next/next/no-img-element */
import logoBps from '@/public/asset/bps-logo.png'
import wave from "@/public/asset/wave.png";

export default function sso(){
    return(
        <div className="flex items-center justify-center h-screen">
            <div className="w-full h-auto md:w-1/2 md:h-1/2 rounded-lg bg-blue-500 shadow-xl mx-auto overflow-hidden md:flex">
                <div className="h-full w-full md:block md:w-2/5 bg-gradient-to-r from-blue1 to-blue2">
                    <img src={logoBps.src} alt="logo bps" className="md:py-8 w-4/5 mx-auto"/>
                    <div className="mx-auto md:mt-14 w-10/12">
                        <h3 className="uppercase text-white text-xl text-center md:text-justify">Single Sign-On BPS</h3>
                        <p className="font-thin text-white text-center md:text-justify">Enter your ID and Password to Continue</p>
                    </div>
                </div>
                <div className="bg-white w-full md:w-3/5 mx-auto">
                    <div className="mx-auto text-center md:mt-24 w-full md:w-4/5 p-10 md:p-0">
                        <p className="uppercase text-blue-900 text-lg font-bold">Sign In</p>
                        <p className="uppercase text-blue-900 text-sm font-semibold">to access application</p>
                        <form className='mt-4 block' action="">
                            <input className='rounded-full mb-5 w-full md:w-3/4 h-9 px-3 py-2 border shadow focus:outline-none focus:ring-1 focus:ring-sky-500 focus:border-sky-500' placeholder='Username'/>
                            <input className='rounded-full mb-5 w-full md:w-3/4 h-9 px-3 py-2 border shadow focus:outline-none focus:ring-1 focus:ring-sky-500 focus:border-sky-500' placeholder='Password'/>
                            <button type="submit" className='text-white w-full md:w-3/4 h-8 rounded-full bg-blue2 hover:bg-blue1'>Log In</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}