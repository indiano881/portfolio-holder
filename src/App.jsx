import { useState } from "react";
import "./global.css";
import Header from "./components/Header"
import MainContent from "./components/MainContent";
import Portfolio from "./components/Portfolio";
import Curriculum from "./components/Curriculum";
import Footer from "./components/Footer";
import {projectArray} from "./data/data";
import davide from "./data/data";




function App() {
  const [page, setPage] = useState("Home");  {/*setPage needs to be called from child-header */}
  
  

  return (
    <>
      <Header changePage={setPage}/>
      
        {page==="Home" && <MainContent />}
        {page==="Portfolio" &&  <Portfolio targetArray={projectArray}/>}
        {page==="Curriculum" && <Curriculum {...davide}/>}
      
      <Footer />
    </>
  )
}

export default App
