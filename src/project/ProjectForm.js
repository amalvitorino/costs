import Input from '../form/Input'
import Select from '../form/Select'
import SubmitButton from '../form/SubmitButton'
import styles from './ProjectForm.module.css'
import { useEffect, useState } from 'react'

function ProjectForm({ handleSubmit, btnText, projectData }) {

    const [categories, setCategories] = useState([])
    const [project, setProject] = useState(projectData || {})

    useEffect(() => {
        fetch("http://localhost:5000/categories", {
            method: "GET",
            headers: {
                'content-Type': 'application/json'
            },
        })
            .then((resp) => resp.json())
            .then((data) => {
                setCategories(data)
            })
            .catch((err) => console.log(err))
    }, [])


    const submit = (e) => {
        e.preventDefault()
        //console.log(project)
        handleSubmit(project)
    }

    function handleChange(e) {
        setProject({ ...project, [e.target.name]: e.target.value })
    }

    function handleCategory(e) {
        setProject({
            ...project,
            category: {
                id: e.target.value,
                name: e.target.options[e.target.selectedIndex].text
            }
        })
    }


    return (
        <form onSubmit={submit} className={styles.form}>
            <Input
                type={"text"}
                text={"project name"}
                name={"name"}
                placeholder={"insert project name"}
                handleonChange={handleChange}
                value={project.name ? project.name : ''}
            />
            <Input
                type={"number"}
                text={"project Orçamento"}
                name={"budjet"}
                placeholder={"insert orcamento"}
                handleonChange={handleChange}
                value={project.budjet ? project.budjet : ''}
            />
            <Select
                name={"category_id"}
                text={"Select the category"}
                options={categories}
                handleonChange={handleCategory}
                value={project.category ? project.category.id : ''}
            />

            <SubmitButton text={btnText} />
        </form>
    )
}
export default ProjectForm