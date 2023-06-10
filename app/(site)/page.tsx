import ChatSys from "../components/chatstuff/page"
import Footer2nd from "../components/footer2nd/page"
import Header from "../components/header/page"
import Card from "./components/card"
import Video from "./components/video"

export default function Home() {
  return (
    <>
    <Header/>
    <div className="my-12 lg:mt-24 px-8 pt-16 pb-6">
      <h4 className="text-darkbrown text-2xl font-semibold">Selamat Datang di</h4>
      <h1 className="text-secondaryBrown font-bold uppercase text-4xl my-3">Warung Kompetensi Pegawai</h1>
      <p className="text-darkbrown text-justify"><strong>Menyajikan berbagai menu pengembangan kompetensi </strong>dengan memadukan media digital dan teknologi daring, keterbatasan pegawai dalam mengembangkan kompetensi karena jarak dan waktu dapat diminimalkan. Sesuai dengan namanya, Warkop menyediakan berbagai menu pembelajaran pengembangan kompetensi yang dapat dipilih oleh `pelanggan`.</p>
    </div>
    <div>
      <h3 className="text-secondaryBrown font-bold text-center text-3xl mt-20">Pengenalan WARKOP</h3>
    </div>
    <Video/>
    <Card/>
    <Footer2nd/>
    <ChatSys/>
    </>
  )
}
