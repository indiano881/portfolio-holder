import styles from "./columnText.module.css"

const ColummnText = () => {
    return (
        <div className={styles.columnText}>
            <h1>Hi! I Am <span className={styles.titleHead}>Fullstack Developer</span>Davide Baldi</h1>

            <p> Designing user interfaces for over 7 years as a product designer</p>

            <button>Hire Me</button>


        </div>

    )
}

export default ColummnText;