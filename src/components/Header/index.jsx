import { useState } from "react";
import styles from "./header.module.css"
import ButtonMenu from "../ButtonMenu";


const Header = () => {


    return (
        <header className={styles.header}>
            <div className={styles.name}>Davide</div>
            <ul className={styles.menu}>
                <ButtonMenu pageMenu={"Home"}/>
                <ButtonMenu pageMenu={"Portfolio"}/>
                <ButtonMenu pageMenu={"Curriculum"}/>
            </ul>
        <button>Let´s chat</button>


        </header>
    )
}

export default Header;