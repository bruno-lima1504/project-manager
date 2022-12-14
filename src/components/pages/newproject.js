import { ProjectForm } from '../project/projectform'
import styles from './newproject.module.css'
import { useNavigate } from 'react-router-dom'

function NewProject() {

    const navigate = useNavigate()

    function createPost(project) {

        //initialize cost and services
        project.cost = 0
        project.services = []

        fetch('http://localhost:5000/projects', {
            method: "POST",
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(project)
        })
            .then((resp) => resp.json())
            .then((data) => {
                console.log(data)
             navigate('/projects', {state: {message: 'Projeto criado com sucesso!'}})   
        })
        .catch((err) => console.log(err))
    }


    return (    

    <div className={styles.newproject_container}>
        <h1>Criar seu projeto</h1>
        <p>Crie seu projeto para depois adicionar os seus serviços</p>
        <ProjectForm handleSubmit={createPost} btnText="Criar Projeto" />
    </div>
    )
}

export { NewProject }