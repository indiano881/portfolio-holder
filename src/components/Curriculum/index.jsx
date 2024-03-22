import styles from "./curriculum.module.css"
import { getImageURL } from "../../utils/functions";

const Curriculum = ({name, surname, email, phone, skills, educationMain, educationSubtitle, languages, text1, text2, text3, image, title}) => {
    return (
        <div className={styles.curriculumContainer}>
           
            <div className={styles.curriculumHead}>
                <img className={styles.curriculumImg} src={getImageURL(image)} alt={name} width="40%" />
                <div className={styles.textHead}>
                    <h2>{name} {surname}</h2>
                    <h2>{title}</h2>
                    <p>{text1} </p>
                    <p>{text2} </p>
                    <p>{text3}</p>
                </div>
                
            </div>

            <div className={styles.textMain}>
                <div className={styles.leftOrTopText}>
                    <h4>Email: {email}</h4>
                    <h4>phone: {phone}</h4>
                    <h4>Programming skills: <span className={styles.innerText}>{skills}</span></h4>
                </div>
                <div className={styles.rightOrBelowText}>
                <h2>Education</h2>
                <h4>{educationMain}</h4>
                <p>{educationSubtitle}</p>
                <p>Lorem ipsum dolor sit amet.</p>
                <p>Lorem ipsum dolor sit amet.</p>
                <h4>Languages: <span className={styles.innerText}>{languages}</span></h4>
                

                </div>
                
           </div>
           
           
        </div>
    )
}

export default Curriculum;