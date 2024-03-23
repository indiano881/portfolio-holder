import styles from "./mainContent.module.css"
import ColummnText from "../MainContentSubComponents/ColumnText";
import ColumnPicture from "../MainContentSubComponents/ColumnPicture";
import davide from "../../data/data"

const MainContent = () => {
    return (    
        <div className={styles.mainContent}>
            <ColummnText {...davide}/>
            <ColumnPicture />
        </div>
    )
}

export default MainContent