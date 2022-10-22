import styles from './navbar.module.css'
import { Link } from 'react-router-dom'
import { Container } from './container' 
import logo from '../../img/logo125.png'


function Navbar() {
    return (
        <nav className={styles.navbar}>
            <Container>
                <Link to="/">
                    <img src={logo} alt="logotipo" />
                </Link>                
                <ul className={styles.list} >
                    <li className={styles.item}>
                        <Link to="/">Home</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to="/projects">Projects</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to="/contact">Contact</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to="/company">Company</Link>
                    </li>                   
                </ul>
            </Container>
        </nav>
    )
}

export { Navbar }