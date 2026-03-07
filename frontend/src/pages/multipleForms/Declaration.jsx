import styles from './AllForms.module.css';

const Declaration = ({ register, errors }) => {
    
    return (
        <>
            <div className={`form-check my-4 ${styles.checkboxContainer}`}>
                <input className="form-check-input" type="checkbox" id="declaration" {...register("declaration", { required: true })} />
                <label className="form-check-label" htmlFor="declaration">I hereby declare that all the information provided by me in this form is true and correct to the best of my knowledge. I understand that if any information is found false, my form may be cancelled.</label>
                {errors.declaration && <span className="text-warning">This field is required</span>}
            </div>
        </>
    )
}

export default Declaration;