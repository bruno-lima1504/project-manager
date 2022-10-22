import styles from './footer.module.css'
import { FaFacebook, FaInstagram, FaLinkedinIn } from 'react-icons/fa'

function Footer() {
    return (
        <footer className={styles.footer}>
            <ul className={styles.social_list}>
                <li>
                    <FaFacebook />
                </li>
                <li>
                    <FaInstagram />
                </li>
                <li>
                    <FaLinkedinIn />
                </li>
            </ul>
            <p className={styles.copy_right}>
                <span>Manager</span> &copy; 2022
            </p>
        </footer>
    )
}

export { Footer }