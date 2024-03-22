import {useState} from "react";
import styles from "./portfolio.module.css"
import Card from "../Card";
import SingleCard from"../SingleCard"
import {projectArray} from "../../data/data.js"

const Portfolio = ({targetArray}) => {
    const [singleProject, setSingleProject] =useState(null)
    return (
        <div className={styles.portfolioContainer}>
            
            {singleProject===null && targetArray.map((project, index)=> <Card key={index} {...project} setSingleProject={setSingleProject}/>)}
            
            {singleProject && projectArray.filter(item=> item.title === singleProject).map((item,index)=> <SingleCard key={index} {...item} setSingleProject={setSingleProject}/> )}
        </div>
    )
}

export default Portfolio;