import { useState } from "react";
import styles from "./header.module.css"
import ButtonMenu from "../ButtonMenu";


const Header = ({changePage}) => {
    

    return (
        <header className={styles.header}>
            <div className={styles.name}>Davide</div>
            <ul className={styles.menu}>
                <ButtonMenu pageMenu={"Home"} changePage={changePage}/>
                <ButtonMenu pageMenu={"Portfolio"} changePage={changePage}/>
                <ButtonMenu pageMenu={"Curriculum"} changePage={changePage}/>
            </ul>
        <button>Let´s chat</button>


        </header>
    )
}

export default Header;