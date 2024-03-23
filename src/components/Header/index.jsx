import { useState } from "react";
import styles from "./header.module.css"
import ButtonMenu from "../ButtonMenu";


const Header = ({changePage, setSingleProject}) => {
    

    return (
        <header className={styles.header}>
            <div className={styles.name}>Davide</div>
            <ul className={styles.menu}>
                <ButtonMenu pageMenu={"Home"} changePage={changePage} setSingleProject={setSingleProject}/>
                <ButtonMenu pageMenu={"Portfolio"} changePage={changePage} setSingleProject={setSingleProject}/>
                <ButtonMenu pageMenu={"Curriculum"} changePage={changePage} setSingleProject={setSingleProject}/>
            </ul>
        <div>{/*placeholder for better design */}</div>


        </header>
    )
}

export default Header;