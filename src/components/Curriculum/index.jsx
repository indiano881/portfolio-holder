import styles from "./curriculum.module.css"
import { getImageURL } from "../../utils/functions";

const Curriculum = () => {
    return (
        <div className={styles.curriculumContainer}>
           <img src={getImageURL("davide.png")} alt="Davide" width="40%" />
        
        
        </div>
    )
}

export default Curriculum;