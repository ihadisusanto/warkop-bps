import ChatSys from "../components/chatstuff/page"
import Footer2nd from "../components/footer2nd/page"
import Header from "../components/header/page"

export default function Home() {
  return (
    <>
    <Header/>
    <div className="min-h-full"
      >
      <ChatSys/>
    </div>
    <Footer2nd/>
    </>
  )
}
