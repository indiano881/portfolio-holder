import styles from "./header.module.css"


const Header = () => {
    return (
        <header className={styles.header}>
            <div>Davide</div>
            <ul className={styles.menu}>
                <li>Home</li>
                <li>Works</li>
                <li>About</li>
                <li>Projects</li>
                <li>Services</li>
            </ul>
        <button>Let´s chat</button>/


        </header>
    )
}

export default Header;