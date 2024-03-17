import styles from "./footer.module.css"




const Footer = () => {
    return (
        <footer className={styles.footer}>
            <h4>© Davide Baldi - FEA23 - 31/03/2024</h4>
            <div className={styles.newsletterContainer}>
                <p className={styles.newsletterMessage}>Subscribe my Newsletter</p>
                <span className={styles.newsletterArrow}>&#8594;</span>
            </div>
            
        </footer>
    )
}

export default Footer;