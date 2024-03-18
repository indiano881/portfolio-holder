import styles from "./mainContent.module.css"
import ColummnText from "../MainContentSubComponents/ColumnText";
import ColumnPicture from "../MainContentSubComponents/ColumnPicture";

const MainContent = () => {
    return (    
        <div className={styles.mainContent}>
            
            <ColummnText />
            <ColumnPicture />

        </div>
    )
}

export default MainContent