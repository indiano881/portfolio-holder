import styles from "./columnPicture.module.css"
import {getImageURL} from "../../../utils/functions"

const ColumnPicture = () => {
    return (
        <div className={styles.columnPictureContainer}>
                <p>column picture part</p>
                <img src={getImageURL("davideLarge.jpeg")} width="100%"/>

        </div>

    )
}

export default ColumnPicture;