import styles from '../login/Login.module.css';
import {Link, useNavigate} from 'react-router-dom'
import { useForm } from "react-hook-form"
import toast from 'react-hot-toast';
import axios from 'axios'
const CreateNotice = () => {
  
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async(data) => {

    try {
        const res=await axios.post("https://college-management-system-cpo2.onrender.com/notice/create",data);
        console.log(res.data);
        if(res.data){
            toast.success("Notice Create Successfully!");
            reset();
            navigate('/admin/dashboard');
        }
    } catch (err) {
        toast.error(err.response?.data?.message || "Notice Create Error");
       console.log(err.response?.data);
       reset();
    }
  };
    return (
        <>
        <section className={styles.loginSection} >
            <div className={styles.loginForm}>  
                <div className={styles.heading}>
                    <h3>Create Notice</h3>
                </div>          
            <form action="" onSubmit={handleSubmit(onSubmit)}>
                    <div className={`form-floating mb-3 ${styles.formsValue}`} >
                        <input type="text" className="form-control" id="title" placeholder="Title" {...register("title", { required: true })}/>
                        <label htmlFor="title">Title</label>
                        {errors.title && <span className="text-warning">This field is required</span>}
                    </div>

                    <div className="form-floating mb-3" >
                            <textarea name="" id="message" className="form-control" placeholder="Message" style={{width:"95%",height:'10rem'}} {...register("message", { required: true })}></textarea>
                            <label htmlFor="message">Message</label>
                            {errors.message && <span className="text-warning">This field is required</span>}
                        </div>

                    <div className={`form-floating mb-3 ${styles.formsValue}`} >
                        <input type="date" className="form-control" id="date" placeholder="Date" {...register("date", { required: true })} />
                        <label htmlFor="date">Date</label>
                        {errors.date && <span className="text-warning">This field is required</span>}
                    </div>
                <div className={`form-floating mb-3 ${styles.buttons}`}>
                    <button type="submit" className="btn btn-primary w-100 py-3">Add New Notice</button>
                </div>

                <div className={`form-floating mb-3 ${styles.buttons}`}>
                    <Link to='/admin/dashboard' className="form-control btn btn-primary w-100 py-3">Admin page</Link>
                </div>
            </form>
            </div>
        </section>
        </>
    )
}
export default CreateNotice;
