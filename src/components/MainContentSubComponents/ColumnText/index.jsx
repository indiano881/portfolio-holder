import styles from "./columnText.module.css"

const ColummnText = ({name, surname, text1, text2, text3}) => {
    return (
        <div className={styles.columnText}>

            <h1 className={styles.mainText}>Hi! I Am <span className={styles.titleHead}>Fullstack </span> <span className={styles.titleHead}>Developer</span> {name} {surname}</h1>
            <div className={styles.mainText}> 
                <p className={styles.innerText}>{text1} </p>
                <p className={styles.innerText}>{text2} </p>
                <p className={styles.innerText}>{text3}</p>
            </div>
            <div className={styles.buttonContainer}>
                <button className={styles.hireMeBtn}>Hire me!</button>
            </div>

        </div>

    )
}

export default ColummnText;