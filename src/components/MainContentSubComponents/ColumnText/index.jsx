import styles from "./columnText.module.css"

const ColummnText = () => {
    return (
        <div className={styles.columnText}>
            <h1 className={styles.mainText}>Hi! I Am <span className={styles.titleHead}>Fullstack </span> <span className={styles.titleHead}>Developer</span> Davide Baldi</h1>
            <div className={styles.mainText}> 
                <p className={styles.innerText} >Enthusiastic and dedicated coding student. </p>
                <p className={styles.innerText}>Proficient in HTML, CSS, JavaScript, Node, React, GIT and responsive design principles. </p>
                <p className={styles.innerText}>Appassiate about “nerdy” stuff like Git (Yes, I love it!), react, servers and in general back-end development.</p>
            </div>
            <div className={styles.buttonContainer}>
                <button className={styles.hireMeBtn}>Hire me!</button>
            </div>
            
        </div>

    )
}

export default ColummnText;