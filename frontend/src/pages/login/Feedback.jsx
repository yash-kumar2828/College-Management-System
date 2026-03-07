import styles from './Login.module.css'
import {Link} from 'react-router-dom'
import { useForm } from "react-hook-form"
import toast from 'react-hot-toast';
import axios from 'axios'
const Feedback = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async(data) => {
    try {
        const res=await axios.post("http://localhost:3000/student/feedback",data);
        console.log(res.data);
        if(res.data){
            toast.success("Feedback Uploaded!");
            reset();
        }
    } catch (err) {
        reset();
        toast.error(err.response?.data?.message || "Login Error");
       console.log(err.response?.data);
    }
  };
    return (
        <>
        <section className={styles.loginSection} >
            <div className={styles.loginForm}>  
                <div className={styles.heading}>
                    <h3>Feedback Form</h3>
                </div>          
            <form action="" onSubmit={handleSubmit(onSubmit)}>
                    <div className={`form-floating mb-3 ${styles.formsValue}`} >
                        <input type="text" className="form-control" id="name" placeholder="Your Name" {...register("name", { required: true })}/>
                        <label htmlFor="name">Your Name</label>
                        {errors.name && <span className="text-warning">This field is required</span>}
                    </div>
                    <div className={`form-floating mb-3 ${styles.formsValue}`} >
                        <input type="email" className="form-control" id="email" placeholder="Your Email" {...register("email", { required: true })} />
                        <label htmlFor="email">Your Email</label>
                        {errors.email && <span className="text-warning">This field is required</span>}
                    </div>
                    <div className="form-floating mb-3" >
                            <textarea name="" id="message" className="form-control" placeholder="Message" style={{width:"90%",height:'10rem'}} {...register("message", { required: true })}></textarea>
                            <label htmlFor="message">Message</label>
                            {errors.message && <span className="text-warning">This field is required</span>}
                        </div>
                <div className={`form-floating mb-3 ${styles.buttons}`}>
                    <button type="submit" className="btn btn-primary w-100 py-3" >Submit</button>
                </div>

                <div className={`form-floating mb-3 ${styles.buttons}`}>
                    <Link to='/' className="form-control btn btn-primary w-100 py-3">Home Page</Link>
                </div>
            </form>
            </div>
        </section>
        </>
    )
}
export default Feedback;