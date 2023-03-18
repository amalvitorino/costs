import ProjectForm from '../../project/ProjectForm'
import styles from './NewProject.module.css'
function NewProject(){
    return (
        <div className={styles.newproject_container}>
            <h1>Create project</h1>
            <p>create your project to next add services</p>
            <ProjectForm btnText="Create project"/>
        </div>
    )
}

export default NewProject