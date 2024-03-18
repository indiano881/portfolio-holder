import styles from "./mainContent.module.css"
import ColummnText from "../MainContentSubComponents/ColumnText"

const MainContent = () => {
    return (    
        <div className={styles.mainContent}>
            <p>placeholder main content</p>
            <ColummnText />

        </div>
    )
}

export default MainContent