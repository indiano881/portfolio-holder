import styles from "./card.module.css"


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
    skill3}
    ) => {
    return (
        <div className={styles.cardContainer}>
            <h3>{title}</h3>
            {/**INSERT IMAGE */}
            <h3>{datum} </h3>
            <h3>Category: {category}</h3>
            <h4>Description: {description} </h4>
            <h4>Design link: {designLink} </h4>
            <h4>Project link: {projectLink} </h4>
            <h4>What I learned: {whatILearned} </h4>
            <h4>Biggest struggle: {biggestStruggle} </h4>
            <h4>Skills: {skill1}{skill2}{skill3}</h4>
        </div>

    )
}

export default Card;