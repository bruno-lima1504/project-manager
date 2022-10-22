import { useEffect, useState } from "react"
import { Input } from "../form/input"
import { Select } from "../form/select"
import { Submitebutton } from "../form/submitebutton"
import styles from "./projectform.module.css"



function ProjectForm({ btnText }) {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/categories', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((resp) => resp.json())
            .then((data) => {
                setCategories(data)
            })
            .catch((err) => console.log(err))

    }, [])

    return (
        <form className={styles.form}>
            <Input
                type="text"
                text="Nome do projeto"
                name="name"
                placeholder="Insira o nome do projeto"
            />
            <Input
                type="number"
                text="Orçamento do projeto"
                name="budget"
                placeholder="Insira o orçamento total"
            />
            <Select
                name="category_id"
                text="Selecione a categoria"
                options={categories} />
            <Submitebutton text={btnText} />
        </form>
    )
}

export { ProjectForm }