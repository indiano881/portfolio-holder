import styles from "./buttonMenu.module.css"
import { useState } from "react"

const ButtonMenu = ({pageMenu, changePage}) => {
    const handleClick= () => {
        console.log("Changing page to:", pageMenu);
        changePage(pageMenu);
    }

    return (
        <li><button onClick={handleClick}>{pageMenu}</button></li>
    )
}

export default ButtonMenu;