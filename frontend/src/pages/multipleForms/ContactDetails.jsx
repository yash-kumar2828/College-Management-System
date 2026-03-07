import styles from './AllForms.module.css'

const ContactDetails = ({register, errors}) => {
      
    return (
        <>
            <h4 className="mb-3 mt-4">Contact Details</h4>

            <div className={styles.formsData}>
                <div className={`form-floating mb-3 ${styles.formsValue}`} >
                    <input type="text" className="form-control" id="mobile" placeholder="Mobile Number"{...register("mobile", { required: true })} />
                    <label htmlFor='mobile'>Mobile Number</label>
                    {errors.mobile && <span className="text-warning">This field is required</span>}
                </div>
                <div className={`form-floating mb-3 ${styles.formsValue}`} >
                    <input type="email" className="form-control" id="email" placeholder="Email ID" {...register("email", { required: true })}/>
                    <label htmlFor='email'>Email ID</label>
                    {errors.email && <span className="text-warning">This field is required</span>}
                </div>
                <div className="form-floating mb-3">
                    <textarea className={`form-control ${styles.addressTextarea}`} id="address" {...register("address", { required: true })}></textarea>
                    <label htmlFor='address'>Address</label>
                    {errors.address && <span className="text-warning">This field is required</span>}
                </div>
                <div className={`form-floating mb-3 ${styles.formsValue}`} >
                    <input type="text" className="form-control" id="city" placeholder="City" {...register("city", { required: true })} />
                    <label htmlFor='city'>City</label>
                    {errors.city && <span className="text-warning">This field is required</span>}
                </div>
                <div className={`form-floating mb-3 ${styles.formsValue}`} >
                    <input type="text" className="form-control" id="state" placeholder="State" {...register("state", { required: true })}/>
                    <label htmlFor='state'>State</label>
                    {errors.state && <span className="text-warning">This field is required</span>}
                </div>
                <div className={`form-floating mb-3 ${styles.formsValue}`} >
                    <input type="text" className="form-control" id="pincode" placeholder="Pincode" {...register("pincode", { required: true })}/>
                    <label htmlFor='pincode'>Pincode</label>
                    {errors.pincode && <span className="text-warning">This field is required</span>}
                </div>
            </div>

        </>
    )
}

export default ContactDetails;