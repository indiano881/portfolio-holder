import {useState} from "react";
import styles from "./portfolio.module.css"
import Card from "../Card";
import SingleCard from"../SingleCard"
import {projectArray} from "../../data/data.js"

const Portfolio = ({targetArray, setSingleProject}) => {
    
    return (
        <div className={styles.portfolioContainer}>
            
            {targetArray.map((project, index)=> <Card key={index} {...project} setSingleProject={setSingleProject}/>)}
            
        </div>
    )
}

export default Portfolio;