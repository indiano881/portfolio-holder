import { useState } from "react";
import "./global.css";
import Header from "./components/Header"
import MainContent from "./components/MainContent";
import Portfolio from "./components/Portfolio";
import Curriculum from "./components/Curriculum";
import Footer from "./components/Footer";


function App() {
  const [page, setPage] = useState(null); {/*default choiche, convert to null */}

  return (
    <>
      <Header />
      {page==="Home" && <MainContent updateFunction={setPage}/>}
      {page==="Portfolio" && <Portfolio updateFunction={setPage}/>}
      {page==="Curriculum" && <Curriculum updateFunction={setPage}/>}
      <Footer />
    </>
  )
}

export default App
