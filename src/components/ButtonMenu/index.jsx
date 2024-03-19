import styles from "./buttonMenu.module.css"

const ButtonMenu = ({pageMenu}, {changePage}) => {
    const handleClick= () => {

    }

    return (
        <li onClick={handleClick}>{pageMenu}</li>
    )
}

export default ButtonMenu;