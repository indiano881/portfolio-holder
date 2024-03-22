import styles from "./card.module.css"
import {getImageURL} from "../../utils/functions"

const Card = ({
    title, 
    datum, 
    description, 
    designLink, 
    projectLink, 
    whatILearned, 
    biggestStruggle, 
    category, 
    skill1, 
    skill2, 
    skill3,
    image,
    imageSmall,
    setSingleProject
    }) => {
        const handleClick = () => {
            console.log(title)
            setSingleProject(title)
            
        }
    return (
        <div className={styles.cardContainer}>
            <img className={styles.cardImg} src={getImageURL(imageSmall)} alt={title} width="40%"/>
            <h3 className={styles.title} onClick={handleClick}>{title}</h3>
            <h3>{datum} </h3>
            <h4 className={styles.cardExternalText}>Category:  <span className={styles.cardInnerText}>{category}</span></h4>
            <h4 className={styles.cardExternalText}>Description: <span className={styles.cardInnerText}>{description}</span> </h4>
            <h4 className={styles.cardExternalText}>Skills:<span className={styles.cardInnerText}> {skill1} -- {skill2} -- {skill3} </span></h4>
        </div>

    )
}

export default Card;