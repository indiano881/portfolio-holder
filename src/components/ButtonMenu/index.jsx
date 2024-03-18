import { useState } from "react"

const ButtonMenu= ({page, updatePage}) => {
    const handleClick = () => {
        updatePage(page)
    }
    return (
        <>
            <button onClick={handleClick}>{page}</button>
        </>
    )
}
export default ButtonMenu;