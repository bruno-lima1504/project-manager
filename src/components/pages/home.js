import styles from './home.module.css'
import fundo from '../../img/fundo1.png'
import { Linkbutton } from '../layout/linkbutton'

function Home() {
    return (
        <section className={styles.home_container}>
            <h1>Bem-vindo ao <span>Manager</span></h1>
            <p>Comece a gerenciar os seus projetos agora mesmo!</p>
            <Linkbutton to="/newproject" text="Criar Projeto" />
            <img src={ fundo } alt="manager"></img>
        </section>
    )
}

export { Home }