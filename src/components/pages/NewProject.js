import { useNavigate  } from 'react-router-dom'
import ProjectForm from '../../project/ProjectForm'
import styles from './NewProject.module.css'
function NewProject() {

    const history = useNavigate()

    function creatPost(project) {
        //initialize cost and services
        project.cost = 0
        project.services = []

        fetch('http://localhost:5000/projects', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(project)
        }).then(
            (resp => resp.json())
        ).then((data) => {
            //console.log(data)
            //redirect
            history('/projects', {state:{message: 'preoject creat successful'}})
        }
        ).catch(
            err => console.log(err)
        )
    }


    return (
        <div className={styles.newproject_container}>
            <h1>Create project</h1>
            <p>create your project to next add services</p>
            <ProjectForm handleSubmit={creatPost} btnText="Create project" />
        </div>
    )
}

export default NewProject