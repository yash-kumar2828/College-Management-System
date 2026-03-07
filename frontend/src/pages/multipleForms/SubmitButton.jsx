import styles from './AllForms.module.css'

const SubmitButton = () => {
    return (
        <>
            <div className={`form-floating mb-3 ${styles.submitButton}`}>
                <button type="submit" className="btn btn-primary w-100 py-3">Submit</button>
            </div>
        </>
    )
}
export default SubmitButton