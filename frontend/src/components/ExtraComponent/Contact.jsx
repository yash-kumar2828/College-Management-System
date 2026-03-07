import axios from 'axios'
import styles from './Contact.module.css'
import { useForm } from "react-hook-form"
import toast from 'react-hot-toast'

const Contact=()=>{
    const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm()

   const onSubmit = async(data) => {
    try {
        const res=await axios.post("http://localhost:3000/student/addContact",data);
        console.log(data);
        toast.success("Message Send Successfully!");
        reset();
    } catch (err) {
        toast.error(err.response?.data?.message || "Server Error");
        reset();
    }   
  }
    return(
        <>
        <section style={{background:'linear-gradient(135deg, #667eea, #764ba2)'}}>
            <div className={`container-lg ${styles.contactContainer}`}>
                <div className={styles.contactForm} >
                    <h5>Let’s Connect</h5>
                    <h1>Send Your Message</h1>
                    <form action="" onSubmit={handleSubmit(onSubmit)}>
                        <div className={styles.formsData}>
                            <div className={`form-floating mb-3 ${styles.formsValue}`} >
                                <input type="text" className="form-control" id="name" placeholder="Your Name"  {...register("name", { required: true })}/>
                                <label htmlFor="name">Your Name</label>
                                {errors.name && <span className="text-warning">This field is required</span>}
                            </div>
                             <div className={`form-floating mb-3 ${styles.formsValue}`} >
                                <input type="email" className="form-control" id="email" placeholder="Your Email" {...register("email", { required: true })}/>
                                <label htmlFor="email">Your Email</label>
                                {errors.email && <span className="text-warning">This field is required</span>}
                            </div>
                           <div className={`form-floating mb-3 ${styles.formsValue}`} >
                                <input type="text" className="form-control" id="number" placeholder="Your Phone" {...register("number", { required: true })}/>
                                <label htmlFor="number">Your Phone</label>
                                {errors.number && <span className="text-warning">This field is required</span>}
                            </div>
                             <div className={`form-floating mb-3 ${styles.formsValue}`} >
                                <input type="text" className="form-control" id="subject" placeholder="Subject"  {...register("subject", { required: true })}/>
                                <label htmlFor="subject">Subject</label>
                                {errors.subject && <span className="text-warning">This field is required</span>}
                            </div>
                        </div>
                        <div className="form-floating mb-3" >
                            <textarea name="" id="message" className="form-control" placeholder="Message" style={{width:"95%",height:'10rem'}} {...register("message", { required: true })}></textarea>
                            <label htmlFor="message">Message</label>
                            {errors.message && <span className="text-warning">This field is required</span>}
                        </div>
                        <div className={`form-floating mb-3 ${styles.submitButton}`}>
                            <button type="submit" className="btn btn-primary w-100 py-3">Send Message</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>    
        </>
    )
}

export default Contact;