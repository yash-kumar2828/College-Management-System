import styles from './AllForms.module.css'
const PersonalDetails = ({register, errors}) => {
     
    return (
        <>
            <h4 className="mb-3">Personal Details</h4>
            <div className={styles.formsData}>
                <div className={`form-floating mb-3 ${styles.formsValue}`} >
                    <input type="text" className="form-control" id="fullname" placeholder="Full Name" {...register("fullname", { required: true })}/>
                    <label htmlFor="fullname">Full Name</label>
                    {errors.fullname && <span className="text-warning">This field is required</span>}
                </div>
                <div className={`form-floating mb-3 ${styles.formsValue}`} >
                    <input type="text" className="form-control" id="fatherName" placeholder="Father's Name" {...register("fatherName", { required: true })} />
                    <label htmlFor="fatherName">Father's Name</label>
                    {errors.fatherName && <span className="text-warning">This field is required</span>}
                </div>
                <div className={`form-floating mb-3 ${styles.formsValue}`} >
                    <input type="date" className="form-control" id="dob" placeholder="Date of Birth" {...register("dob", { required: true })}/>
                    <label htmlFor="dob">Date of Birth</label>
                    {errors.dob && <span className="text-warning">This field is required</span>}
                </div>
                <div className={`form-floating mb-3 ${styles.formsValue}`}>
                    <select className="form-select" id="gender" {...register("gender", { required: true })}>
                        <option value="">Select Gender</option>
                        <option>Female</option>
                        <option>Male</option>
                        <option>Other</option>
                    </select>
                    <label htmlFor='gender' >Gender</label>
                    {errors.gender && <span className="text-warning">This field is required</span>}
                </div>

                <div className={`form-floating mb-3 ${styles.formsValue}`} >
                    <input type="text" className="form-control" id="nationality" placeholder="Nationality" {...register("nationality", { required: true })}/>
                    <label htmlFor='nationality'>Nationality</label>
                    {errors.nationality && <span className="text-warning">This field is required</span>}
                </div>

                <div className={`form-floating mb-3 ${styles.formsValue}`}>
                    <select className="form-select" id="category" {...register("category", { required: true })}>
                        <option value="">Select Category</option>
                        <option>GEN</option>
                        <option>OBC</option>
                        <option>SC</option>
                        <option>ST</option>
                    </select>
                    <label htmlFor='category'>Category</label>
                    {errors.category && <span className="text-warning">This field is required</span>}
                </div>
            </div>
        </>
    )
}
export default PersonalDetails;