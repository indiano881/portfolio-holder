import { useState } from "react";
//components
import Header from "./components/Header"
import MainContent from "./components/MainContent";
import Portfolio from "./components/Portfolio";
import SingleCard from "./components/SingleCard";
import Curriculum from "./components/Curriculum";
import Footer from "./components/Footer";
//data
import {projectArray} from "./data/data";
import davide from "./data/data";
//style
import "./global.css";




function App() {
  const [page, setPage] = useState("Home");
  const [singleProject, setSingleProject] =useState(null);
  

  return (
    <>
      <Header changePage={setPage} setSingleProject={setSingleProject}/>
      
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
