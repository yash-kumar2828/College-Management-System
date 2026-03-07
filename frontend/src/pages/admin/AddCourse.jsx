import styles from '../login/Login.module.css'
import {Link, useNavigate} from 'react-router-dom'
import { useForm } from "react-hook-form"
import toast from 'react-hot-toast';
import axios from 'axios'
const AddCourse = () => {

  
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async(data) => {
    const courseInfo={
        id:data.id,
        name:data.name,
        departmentId:data.departmentId,
        duration:data.duration,
        totalSemesters:data.totalSemesters,
        type:data.type
    }
    try {
        const res=await axios.post("http://localhost:3000/admin/create",courseInfo);
        console.log(res.data);
        toast.success("Courses added successfully!");
        reset();
    } catch (err) {
        toast.error(err.response?.data?.message || "Add Admin Error");
       console.log(err.response?.data);
       reset();
    }
  };
    return (
        <>
        <section className={styles.loginSection} >
            <div className={styles.loginForm}>   
                <div className={styles.heading}>
                    <h3>Add New Course</h3>
                </div>          
            <form action="" onSubmit={handleSubmit(onSubmit)}>
                    <div className={`form-floating mb-3 ${styles.formsValue}`} >
                        <input type="text" className="form-control" id="id" placeholder="Course Id" {...register("id", { required: true })}/>
                        <label htmlFor="id">Course Id</label>
                        {errors.fullname && <span className="text-warning">This field is required</span>}
                    </div>

                    <div className={`form-floating mb-3 ${styles.formsValue}`} >
                        <input type="text" className="form-control" id="name" placeholder="Course Name" {...register("name", { required: true })}/>
                        <label htmlFor="name">Course Name</label>
                        {errors.name && <span className="text-warning">This field is required</span>}
                    </div>

                    <div className={`form-floating mb-3 ${styles.formsValue}`} >
                        <input type="text" className="form-control" id="departmentId" placeholder="Department Id" {...register("departmentId", { required: true })} />
                        <label htmlFor="departmentId">Department Id</label>
                        {errors.departmentId && <span className="text-warning">This field is required</span>}
                    </div>

                    <div className={`form-floating mb-3 ${styles.formsValue}`} >
                        <input type="text" className="form-control" id="duration" placeholder="Total Duration" {...register("duration", { required: true })} />
                        <label htmlFor="duration">Total Duration</label>
                        {errors.duration && <span className="text-warning">This field is required</span>}
                    </div>

                    <div className={`form-floating mb-3 ${styles.formsValue}`} >
                        <input type="number" className="form-control" id="totalSemesters" placeholder="Total Semesters" {...register("totalSemesters", { required: true })} />
                        <label htmlFor="totalSemesters">Total Semesters</label>
                        {errors.totalSemesters && <span className="text-warning">This field is required</span>}
                    </div>



                    <div className={`form-floating mb-3 ${styles.formsValue}`}>
                        <select className="form-select" id="type" {...register("type", { required: true })}>
                            <option value="">Select Type</option>
                            <option>UG</option>
                            <option>PG</option>
                        </select>
                        <label htmlFor='type' >Course Type</label>
                        {errors.type && <span className="text-warning">This field is required</span>}
                    </div>



                <div className={`form-floating mb-3 ${styles.buttons}`}>
                    <button type="submit" className="btn btn-primary w-100 py-3">Add New Admin</button>
                </div>

                <div className={`form-floating mb-3 ${styles.buttons}`}>
                    <Link to='/admin/dashboard' className="form-control btn btn-primary w-100 py-3">Admin Page</Link>
                </div>
            </form>
            </div>
        </section>
        </>
    )
}
export default AddCourse;