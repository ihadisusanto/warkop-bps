import Footer1st from "../components/footer1st/page";
import Footer2nd from "../components/footer2nd/page";
import Header from "../components/header/page";
import ListCourse from "./listCourse";

export default function Kompetensi() {
  return (
    <>
      <Header title="Kompetensi"/>
      <ListCourse/>
      <Footer2nd/>
      <Footer1st/>
    </>
  )
}
