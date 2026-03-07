import styles from './AllForms.module.css'

const AcademicDetails = ({ type,register,errors }) => {
    
     const generateYears = () => {
        const years = [];
        const start = 2010;
        const current = new Date().getFullYear();

        for (let i = start; i <= current + 1; i++) {
            years.push(`${i}-${(i + 1).toString().slice(-2)}`);
        }
        return years;
    };

    const passingYears = generateYears();
    return (
        <>
            <h4 className="mb-3 mt-4">Academic Details</h4>
            {type === "UG" && (
                <>

                    <div className={styles.formsData}>
                        <div className={`form-floating mb-3 ${styles.formsValue}`} >
                            <input type="text" className="form-control" id="tenthBoard" placeholder="10th Board Name" {...register("tenthBoard", { required: true })}/>
                            <label htmlFor='tenthBoard'>10th Board Name</label>
                            {errors.tenthBoard && <span className="text-warning">This field is required</span>}
                        </div>
                        <div className={`form-floating mb-3 ${styles.formsValue}`} >
                            <select id="tenthYear" className="form-select" {...register("tenthYear", { required: true })}>
                                <option value="">Select Year</option>
                                {passingYears.map((year, index) => (
                                    <option key={index} value={year}>{year}</option>
                                ))}
                            </select>
                            <label htmlFor='tenthYear'>10th Passing Year</label>
                            {errors.tenthYear && <span className="text-warning">This field is required</span>}
                        </div>
                        <div className={`form-floating mb-3 ${styles.formsValue}`} >
                            <input type="text" className="form-control" id="tenthPercentage" placeholder="10th Percentage"  {...register("tenthPercentage", { required: true })}/>
                            <label htmlFor='tenthPercentage'>10th Percentage</label>
                           {errors.tenthPercentage && <span className="text-warning">This field is required</span>}
                        </div>

                        <div className={`form-floating mb-3 ${styles.formsValue}`} >
                            <input type="text" className="form-control" id="twelfthBoard" placeholder="12th Board Name" {...register("twelfthBoard", { required: true })}/>
                            <label htmlFor='twelfthBoard'>12th Board Name</label>
                            {errors.twelfthBoard && <span className="text-warning">This field is required</span>}
                        </div>
                        <div className={`form-floating mb-3 ${styles.formsValue}`} >
                            <select id="twelfthYear" className="form-select" {...register("twelfthYear", { required: true })}>
                                <option value="">Select Year</option>
                                {passingYears.map((year, index) => (
                                    <option key={index} value={year}>{year}</option>
                                ))}
                            </select>
                            <label htmlFor='twelfthYear'>12th Passing Year</label>
                            {errors.twelfthYear && <span className="text-warning">This field is required</span>}
                        </div>
                        <div className={`form-floating mb-3 ${styles.formsValue}`} >
                            <input type="text" className="form-control" id="twelfthPercentage" placeholder="12th Percentage" {...register("twelfthPercentage", { required: true })}/>
                            <label htmlFor='twelfthPercentage'>12th Percentage</label>
                            {errors.twelfthPercentage && <span className="text-warning">This field is required</span>}
                        </div>
                    </div>
                </>
            )}

            {type === "FACULTY" && (
                <>
                    <div className={styles.formsData}>
                        <div className={`form-floating mb-3 ${styles.formsValue}`} >
                            <input type="text" className="form-control" id="highestQualification" placeholder="Highest Qualification"{...register("highestQualification", { required: true })}/>
                            <label htmlFor='highestQualification'>Highest Qualification</label>
                            {errors.highestQualification && <span className="text-warning">This field is required</span>}
                        </div>
                        <div className={`form-floating mb-3 ${styles.formsValue}`} >
                            <input type="text" className="form-control" id="experience" placeholder="Experience (In Years)" {...register("experience", { required: true })}/>
                            <label htmlFor='experience'>Experience (In Years)</label>
                            {errors.experience && <span className="text-warning">This field is required</span>}
                        </div>
                    </div>
                </>
            )}
        </>
    )
}

export default AcademicDetails;