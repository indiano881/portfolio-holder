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
        <div>{/*placeholder for better design */}</div>


        </header>
    )
}

export default Header;