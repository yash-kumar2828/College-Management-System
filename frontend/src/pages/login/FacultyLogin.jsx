import { useForm } from "react-hook-form";
import styles from "./Login.module.css";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";
const FacultyLogin = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const res = await axios.post(
        "https://college-management-system-cpo2.onrender.com/faculty/login",
        data,
        {
          withCredentials: true,
        },
      );
      if (res.data) {
        localStorage.setItem("role", res.data.role);
        toast.success("Login Successfully!");
        reset();
        navigate("/faculty/dashboard");
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
            <h3>Faculty Login</h3>
          </div>
          <form action="" onSubmit={handleSubmit(onSubmit)}>
            <div className={`form-floating mb-3 ${styles.formsValue}`}>
              <input
                type="text"
                className="form-control"
                id="facultyId"
                placeholder="Your Faculty ID"
                {...register("facultyId", { required: true })}
              />
              <label htmlFor="facultyId">Your Faculty ID</label>
              {errors.facultyId && (
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
export default FacultyLogin;
