import styles from './Select.module.css'


function Select({ text, name, option, handleonChange, value }) {
    return (
        <div className={styles.form_control}>
            <label htmlFor={name}>{text}</label>
            <select name={name} id={name}>
                <option value="" key="">Select option</option>
            </select>
        </div>
    )
}
export default Select