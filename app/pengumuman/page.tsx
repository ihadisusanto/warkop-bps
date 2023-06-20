import Footer1st from "../components/footer1st/page";
import Footer2nd from "../components/footer2nd/page";
import Header from "../components/header/page";
import ListPengumuman from "./listPengumuman";

export default function Pengumuman(){
    return(
        <>
            <Header title="Pengumuman"/>
            <ListPengumuman/>
            <Footer2nd/>
            <Footer1st/>
        </>
    )
}