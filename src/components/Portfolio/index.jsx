import styles from "./portfolio.module.css"
import Card from "../Card";
import {projectArray} from "../../data/data.js"

const Portfolio = ({targetArray}) => {
    return (
        <div className={styles.portfolioContainer}>
            {/**inserire cards 
             * { category.map((item, index) => <MediumArticle key={index} {...item} />) }*/}
            {targetArray.map((project, index)=> <Card key={index} {...project}/>)}
        
        </div>
    )
}

export default Portfolio;