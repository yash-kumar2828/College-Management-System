import styles from './Login.module.css'
import {Link, useNavigate} from 'react-router-dom'
import { useForm } from "react-hook-form"
import toast from 'react-hot-toast';
import axios from 'axios'
const AdminLogin = () => {

  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async(data) => {
    const adminInfo={
        adminId:data.adminId,
        password:data.password
    }
    try {
        const res=await axios.post("http://localhost:3000/admin/login",adminInfo);
        console.log(res.data);
        if(res.data){
            toast.success("Login Successfully!");
            reset();
            navigate('/admin/dashboard');
        }
    } catch (err) {
        reset();
        toast.error(err.response?.data?.message || "Login Error");
       console.log(err.response?.data);
    }
    localStorage.setItem('role', 'admin');
  };
    return (
        <>
        <section className={styles.loginSection} >
            <div className={styles.loginForm}>  
                <div className={styles.heading}>
                    <h3>Admin Login</h3>
                </div>          
            <form action="" onSubmit={handleSubmit(onSubmit)}>
                    <div className={`form-floating mb-3 ${styles.formsValue}`} >
                        <input type="text" className="form-control" id="adminId" placeholder="our Admin ID" {...register("adminId", { required: true })}/>
                        <label htmlFor="adminId">Your Admin ID</label>
                        {errors.adminId && <span className="text-warning">This field is required</span>}
                    </div>
                    <div className={`form-floating mb-3 ${styles.formsValue}`} >
                        <input type="password" className="form-control" id="password" placeholder="Your Password" {...register("password", { required: true })} />
                        <label htmlFor="password">Your Password</label>
                        {errors.password && <span className="text-warning">This field is required</span>}
                    </div>
                <div className={`form-floating mb-3 ${styles.buttons}`}>
                    <button type="submit" className="btn btn-primary w-100 py-3" >Login</button>
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
export default AdminLogin;