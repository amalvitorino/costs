import styles from './Select.module.css'


function Select({ text, name, options, handleonChange, value }) {
    return (
        <div className={styles.form_control}>
            <label htmlFor={name}>{text}</label>
            <select name={name} id={name} onChange={handleonChange} value = {value || ''}>
                <option value="" key="">Select option</option>
                {
                    options.map(
                        (option) => (
                            <option value={option.id} key={option.id}>{option.name}</option>
                        )
                    )
                }
            </select>
        </div>
    )
}
export default Select