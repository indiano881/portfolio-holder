import styles from "./buttonMenu.module.css"

const ButtonMenu = ({pageMenu, changePage,setSingleProject }) => {
    const handleClick= () => {
        changePage(pageMenu);
        setSingleProject(null)
    }

    return (
        <li className={styles.buttonMenu} onClick={handleClick}>{pageMenu}</li>
    )
}

export default ButtonMenu;