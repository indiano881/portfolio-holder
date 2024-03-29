import styles from "./singleCard.module.css"
import {getImageURL} from "../../utils/functions"

const SingleCard = ({
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
    setSingleProject
    }) => {

        const handleClick = () => {
            
            setSingleProject(null)
            
        }
    return (
        <div className={styles.externalContainer}>
            <div className={styles.cardContainer}>
                <img className={styles.cardImg} src={getImageURL(image)} alt={title} width="40%"/>
                <h3 onClick={handleClick}>{title}</h3>
            
                <h3>{datum} </h3>
                <h4 className={styles.cardExternalText}>Category:  <span className={styles.cardInnerText}>{category}</span></h4>
                <h4 className={styles.cardExternalText}>Description: <span className={styles.cardInnerText}>{description}</span> </h4>
                <h4 className={styles.cardExternalText}>Design link: <a href={designLink} target="_blank" className={styles.cardInnerText}>{designLink} </a></h4>
                <h4 className={styles.cardExternalText}>Project link: <a href={projectLink} target="_blank" className={styles.cardInnerText}>{projectLink}</a> </h4>
                <h4 className={styles.cardExternalText}>What I learned: <span className={styles.cardInnerText}>{whatILearned} </span></h4>
                <h4 className={styles.cardExternalText}>Biggest struggle:<span className={styles.cardInnerText}> {biggestStruggle}</span> </h4>
                <h4 className={styles.cardExternalText}>Skills:<span className={styles.cardInnerText}> {skill1} -- {skill2} -- {skill3} </span></h4>
                <button className={styles.closeBtn} onClick={handleClick}>close</button>
            </div>
        </div>
    )
}

export default SingleCard;