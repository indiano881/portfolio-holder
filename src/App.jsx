import { useState } from "react";
import "./global.css";
import Header from "./components/Header"
import MainContent from "./components/MainContent";
import Portfolio from "./components/Portfolio";
import Curriculum from "./components/Curriculum";
import Footer from "./components/Footer";
import {projectArray} from "./data/data"



function App() {
  const [page, setPage] = useState("Home");  {/*setPage needs to go to child header */}

  return (
    <>
      <Header changePage={setPage}/>
        {(page && page==="Home") && <MainContent />}
        {(page && page==="Portfolio") && <Portfolio targetArray={projectArray}/>}
        {(page && page==="Curriculum") && <Curriculum />}
      
      <Footer />
    </>
  )
}

export default App
