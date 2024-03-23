import styles from "./portfolio.module.css"
import Card from "../Card";

const Portfolio = ({targetArray, setSingleProject}) => {
    
    return (
        <div className={styles.portfolioContainer}>
            
            {targetArray.map((project, index)=> <Card key={index} {...project} setSingleProject={setSingleProject}/>)}
            
        </div>
    )
}

export default Portfolio;