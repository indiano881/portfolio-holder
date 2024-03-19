import { useState } from "react";
import styles from "./header.module.css"
import ButtonMenu from "../ButtonMenu";


const Header = () => {
    const [page, setPage] = useState("Home");  {/*setPage needs to go to child header */}

    return (
        <header className={styles.header}>
            <div className={styles.name}>Davide</div>
            <ul className={styles.menu}>
                <ButtonMenu pageMenu={"Home"} changePage={setPage}/>
                <ButtonMenu pageMenu={"Portfolio"} changePage={setPage}/>
                <ButtonMenu pageMenu={"Curriculum"} changePage={setPage}/>
            </ul>
        <button>Let´s chat</button>


        </header>
    )
}

export default Header;