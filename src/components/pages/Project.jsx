import { useParams } from "react-router-dom"
import styles from "./Project.module.css"
import { useState, useEffect } from "react"

function Project() {


    const { id } = useParams()
    //console.log(id)
    const [project, setProject] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/projects/${id}`, {
            method: 'GET',
            headers: {
                'Content-type': 'applation/json'
            }
        }).then((resp) => resp.json())
            .then((data) => {
                setProject(data)
            })
            .catch((err) => console.log(err))
    }, [])

    return (
        <div>
            <p>{project.name}</p>
        </div>
    )
}

export default Project