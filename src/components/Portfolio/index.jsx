import styles from "./portfolio.module.css";
import { useState } from "react";

const Portfolio = (setPage) => {
    const handleClick = () => {
        setPage("Portfolio")
      }

    return (
        <div className={styles.portfolioContainer}>
            <p>Portfolio</p>
            
        </div>

    )
}

export default Portfolio;