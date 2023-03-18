import Input from '../form/Input'
import Select from '../form/Select'
import SubmitButton from '../form/SubmitButton'
import styles from './ProjectForm.module.css'

function ProjectForm({btnText}) {
    return (
        <form className={styles.form}>
            <Input
                type={"text"}
                text={"project name"}
                name={"name"}
                placeholder={"insert project name"}
            />
            <Input
                type={"number"}
                text={"project Orçamento"}
                name={"budjet"}
                placeholder={"insert orcamento"}
            />
           <Select name={"category_id"} text={"Select the category"}/>
            <SubmitButton text={btnText}/>
        </form>
    )
}
export default ProjectForm