import { useState } from "react";
import "./global.css";
import Header from "./components/Header"
import MainContent from "./components/MainContent";
import Portfolio from "./components/Portfolio";
import Curriculum from "./components/Curriculum";
import Footer from "./components/Footer";
import {projectArray} from "./data/data";
import davide from "./data/data";
import SingleCard from "./components/SingleCard";




function App() {
  const [page, setPage] = useState("Home");  {/*setPage needs to be called from child-header */}
  const [singleProject, setSingleProject] =useState(null)
  

  return (
    <>
      <Header changePage={setPage}/>
      
        {page==="Home" && <MainContent />}

        {(page==="Portfolio" && singleProject===null) &&  <Portfolio targetArray={projectArray} setSingleProject={setSingleProject}/>}

        {(page==="Portfolio" && singleProject) && 

          projectArray.filter(item=> item.title === singleProject).map((item,index)=> <SingleCard key={index} {...item} setSingleProject={setSingleProject}/> )
        
        }

        {page==="Curriculum" && <Curriculum {...davide}/>}
      
      <Footer />
    </>
  )
}

export default App
