import Message from "../layout/Message"
import { useLocation } from "react-router-dom"
import styles from "./Projects.module.css"
import Container from "../layout/Container"
import LinkButton from '../layout/LinkButton'
import ProjectCard from "../../project/ProjectCard"
import { useState, useEffect } from "react"
import Loading from "../layout/Loading"


function Projects() {

    const [projects, setProjects] = useState([])
    const [removeLoading, setRemoveLoading] = useState(false)
    const [projectMessage, setProjectMessage] = useState('')

    const location = useLocation()

    let message = ""
    if (location.state) {
        message = location.state.message
    }


    useEffect(() => {
        setTimeout(() => {
            fetch('http://localhost:5000/projects', {
                method: 'GET',
                headers: {
                    'Content-type': 'applation/json'
                }
            }).then((resp) => resp.json())
                .then((data) => {
                    console.log(data)
                    setProjects(data)
                    setRemoveLoading(true)
                })
                .catch((err) => console.log(err))
        }, 700)
    }, [])

    function removeProject(id){
        fetch(`http://localhost:5000/projects/${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-type': 'applation/json'
                }
            }).then((resp) => resp.json())
                .then(() => {
                     setProjects(projects.filter((project) => project.id !==id))
                     setProjectMessage("Project removed successful")

                })
                .catch((err) => console.log(err))
    }

    return (
        <div className={styles.project_container}>
            <div className={styles.title_container}>
                <h1>My projects</h1>
                <LinkButton to="/Newproject" text="Create Project" />
            </div>
            {message && <Message msg={message} 
            type="success" />}
            {projectMessage && <Message msg={projectMessage} 
            type="success" />}
            <Container costumClass="start">
                {
                    projects.length > 0 &&
                    projects.map((project) => (
                        <ProjectCard
                            id={project.id}
                            name={project.name}
                            budjet={project.budjet}
                            category={project.category.name}
                            key={project.id}
                            handleRemove={removeProject}
                        />
                    ))
                }
                {
                    !removeLoading && <Loading />
                }
                {
                    removeLoading && projects.length === 0 && (
                        <p>Empty!!</p>
                    )
                }
            </Container>
        </div>
    )
}

export default Projects