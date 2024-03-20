import styles from "./curriculum.module.css"
import { getImageURL } from "../../utils/functions";

const Curriculum = () => {
    return (
        <div className={styles.curriculumContainer}>
           
            <div className={styles.curriculumHead}>
                <img className={styles.curriculumImg} src={getImageURL("davide.png")} alt="Davide" width="40%" />
                <h2>Davide Baldi</h2>
                <h2>Fullstack Developer</h2>
                <p>Enthusiastic and dedicated coding student. </p>
                <p>Proficient in HTML, CSS, JavaScript, Node, React, GIT and responsive design principles. </p>
                <p>Appassiate about “nerdy” stuff like Git (Yes, I love it!), regex, servers and in general back-end development.</p>
           </div>
           
           <h3>Email: d.baldi88@gmail.com</h3>
           <h3>phone: +46 (0)72 564 99 33</h3>
           <h2>Education</h2>
           <p>Lorem ipsum dolor sit amet.</p>
           <p>Lorem ipsum dolor sit amet.</p>
           <p>Lorem ipsum dolor sit amet.</p>
           <h2>Skills</h2>
           <p>Lorem ipsum dolor sit amet.</p>
           <p>Lorem ipsum dolor sit amet.</p>
           <p>Lorem ipsum dolor sit amet.</p>
        </div>
    )
}

export default Curriculum;