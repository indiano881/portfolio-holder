import styles from "./curriculum.module.css";
import { useState } from "react";

const Curriculum = () => {
    const handleClick = () => {
        setPage("Curriculum")
      }

    return (
        <div className={styles.portfolioContainer}>
            <p>Curriculum</p>
            
        </div>

    )
}

export default Curriculum;