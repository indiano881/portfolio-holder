import styles from "./header.module.css"
import { useState } from "react";


const Header = (page, changePage) => {
    const handleClick= () => {
        changePage(page) //became setPage("Home")
    }

    return (
        <header className={styles.header}>
            <p className={styles.name}>Davide</p>
            <ul className={styles.menu}>
                <li><button onClick={()=>handleClick("Home")}>Home</button></li>
                <li><button onClick={()=>handleClick("Portfolio")}>Portfolio</button></li>
                <li><button onClick={()=>handleClick("Curriculum")}>CV</button></li>
                
            </ul>
        <button className={styles.chat}>Let´s chat</button>


        </header>
    )
}

export default Header;