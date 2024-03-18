import ButtonMenu from "../ButtonMenu";
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
                <li><ButtonMenu page={"Home"} updatePage={handleClick} /></li>
                <li><ButtonMenu page={"Portfolio"} updatePage={handleClick} /></li>
                <li><ButtonMenu page={"Curriculum"} updatePage={handleClick} /></li>
                
            </ul>
        <button className={styles.chat}>Let´s chat</button>


        </header>
    )
}

export default Header;