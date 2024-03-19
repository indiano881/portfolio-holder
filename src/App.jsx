import { useState } from "react";
import "./global.css";
import Header from "./components/Header"
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";


function App() {
const [page, setPage] = useState("Home");  {/*setPage needs to go to child header */}

  return (
    <>
      <Header />
        {(page && page==="Home") && <MainContent />}
        {(page && page==="Portfolio") && <p>Portfolio </p>}
        {(page && page==="Curriculum") && <p>Curriculum </p>}
      
      <Footer />
    </>
  )
}

export default App
