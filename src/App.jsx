import { useState } from "react";
import "./global.css";
import Header from "./components/Header"
import MainContent from "./components/MainContent";
import Portfolio from "./components/Portfolio";
import Curriculum from "./components/Curriculum";
import Footer from "./components/Footer";
import ButtonMenu from "./components/ButtonMenu";


function App() {
  const [page, setPage] = useState("Home"); {/*default choiche, convert to null */}

  return (
    <>
      <Header />
      {page && <ButtonMenu updatePage={setPage} />}
      {page && <ButtonMenu updatePage={setPage} />}
      {page && <ButtonMenu updatePage={setPage} />}
      <Footer />
    </>
  )
}
{/*{favoritColor && <SingleColor color={favoritColor} />} */}
{/*<ChooseColor param="red" updateFunction={setFavoriteColor}/> */}
export default App
