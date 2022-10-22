import { ProjectForm } from '../project/projectform'
import styles from './newproject.module.css'

function NewProject() {
    return (    

    <div className={styles.newproject_container}>
        <h1>Criar seu projeto</h1>
        <p>Crie seu projeto para depois adicionar os seus serviços</p>
        <ProjectForm btnText="Criar Projeto" />
    </div>
    )
}

export { NewProject }