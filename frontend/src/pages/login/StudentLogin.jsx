import styles from "./Login.module.css";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import axios from "axios";
const StudentLogin = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const studentInfo = {
      enrollmentId: data.enrollmentId,
      password: data.password,
    };
    try {
      const res = await axios.post(
        "https://college-management-system-cpo2.onrender.com/student/login",
        studentInfo,
        {
          withCredentials: true,
        },
      );
      if (res.data) {
        localStorage.setItem("role", res.data.role);
        toast.success("Login Successfully!");
        reset();
        navigate("/student/dashboard");
      }
    } catch (err) {
      reset();
      toast.error(err.response?.data?.message || "Login Error");
      console.log(err.response?.data);
    }
  };

  return (
    <>
      <section className={styles.loginSection}>
        <div className={styles.loginForm}>
          <div className={styles.heading}>
            <h3>Student Login</h3>
          </div>
          <form action="" onSubmit={handleSubmit(onSubmit)}>
            <div className={`form-floating mb-3 ${styles.formsValue}`}>
              <input
                type="text"
                className="form-control"
                id="enrollmentId"
                placeholder="Your Enrollment No."
                {...register("enrollmentId", { required: true })}
              />
              <label htmlFor="enrollmentId">Your Enrollment No.</label>
              {errors.enrollmentId && (
                <span className="text-warning">This field is required</span>
              )}
            </div>
            <div className={`form-floating mb-3 ${styles.formsValue}`}>
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Your Password"
                {...register("password", { required: true })}
              />
              <label htmlFor="password">Your Password</label>
              {errors.password && (
                <span className="text-warning">This field is required</span>
              )}
            </div>
            <div className={`form-floating mb-3 ${styles.buttons}`}>
              <button type="submit" className="btn btn-primary w-100 py-3">
                Login
              </button>
            </div>

            <div className={`form-floating mb-3 ${styles.buttons}`}>
              <Link to="/" className="form-control btn btn-primary w-100 py-3">
                Home Page
              </Link>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};
export default StudentLogin;
