import { useLocation } from 'react-router-dom'

import { useState, useEffect } from 'react'

import { Message } from '../layout/message.js'
import { Container } from '../layout/container.js'
import { Linkbutton } from '../layout/linkbutton.js'
import { ProjectCard } from '../project/projectcards.js'

import styles from './projects.module.css'

function Projects() {

    const [projects, setProjects] = useState([])

    const location = useLocation()
    let message = ''
    if (location.state) {
        message = location.state.message
    }

    useEffect(() => {
        fetch('http://localhost:5000/projects', {
            method: 'GET',
            headers: {
             'Content-Type': 'application/json',
            },
        })
            .then((resp) => resp.json())
            .then((data) => {
                console.log(data)
                setProjects(data)
            })
            .cath((err) => console.log(err))
    }, [])

    return (    
    <div className={styles.project_container}>
        <div className={styles.title_container}>
            <h1>Meus Projetos</h1>
            <Linkbutton to="/newproject" text="Criar Projeto" />
        </div>        
        {message && <Message type="success" msg={message}/> }
        <Container customClass="start">
            {projects.length > 0 &&
            projects.map((project) => 
                <ProjectCard name={project.name} />)}
        </Container>
    </div>
    )
}

export { Projects }