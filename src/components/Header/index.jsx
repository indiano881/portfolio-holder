import styles from "./header.module.css"
import ButtonMenu from "../ButtonMenu";
import {getImageURL} from "../../utils/functions"



const Header = ({changePage, setSingleProject}) => {
    
    return (
        <header className={styles.header}>
            <div className={styles.name}>Davide</div>
                <ul className={styles.menu}>
                    
                    <ButtonMenu pageMenu={"Home"} changePage={changePage} setSingleProject={setSingleProject}/>
                    <ButtonMenu pageMenu={"Portfolio"} changePage={changePage} setSingleProject={setSingleProject}/>
                    <ButtonMenu pageMenu={"Curriculum"} changePage={changePage} setSingleProject={setSingleProject}/>
                </ul>
            <div>{/*placeholder for better design -in future will add "let s chat" functionality with AI*/}</div>
        </header>
    )
}

export default Header;