import { useEffect } from "react";
import Footer1st from "../components/footer1st/page";
import Footer2nd from "../components/footer2nd/page";
import Header from "../components/header/page";
import Accordions from "./Accordions";

export default function faq() {
    return(
        <>
            <Header/>
            <div className="h-auto mt-24 w-full p-5 lg:p-10">
                <p className="text-secondaryBrown text-xl lg:text-3xl font-bold uppercase">Frequently Asked Questions</p>
                <p className="text-secondaryBrown text-sm lg:text-lg text-justify">Jika masih terdapat pertanyaan yang ingin diajukan, silakan gunakan fitur <span className="font-bold">Chatbot</span> atau <span className="font-bold">Live Chat</span> yang tersedia pada website</p>
                <Accordions/>
            </div>
            <Footer2nd/>
            <Footer1st/>
        </>
    )
}