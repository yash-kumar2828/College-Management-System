import styles from "../Dashboards.module.css";
import { useState } from "react";
import OtherHeader from "../../components/ExtraComponent/OtherHeader";
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import toast from 'react-hot-toast';

const ManageCourses = () => {
  const [courses, setCourses] = useState([]);

  useEffect(()=>{
    const getCourse=async()=>{
      try {
        const res=await axios.get("https://college-management-system-cpo2.onrender.com/admin/");
        setCourses(res.data);
      } catch (error) {
        console.log(error);
      }
    }
    getCourse();
  },[]);

  const handleDelete=async(id)=>{
    try {
      await axios.delete(`https://college-management-system-cpo2.onrender.com/${id}`);
      toast.success("Course deleted");
    } catch (error) {
      console.log(error);
      toast.error("Delete failed");
    }
  }

  return (
    <>
      <OtherHeader heading="Manage Courses" firstLink="Dashboard" firstPath='/admin/dashboard'secondLink="Courses" />

      <section className={styles.profileSection}>
        <div className="container py-4">
          <div className="card shadow-sm">
            <div className="card-body">

              <div className="d-flex justify-content-between align-items-center mb-3">
                <h4 className="fw-bold">Course List</h4>
                <Link className="btn btn-primary" to="/login/addCourse">
                   Add Course
                </Link>
              </div>

              <table className="table table-bordered text-center align-middle">
                <thead className="table-light">
                  <tr>
                    <th>ID</th>
                    <th>Course Name</th>
                    <th>Type</th>
                    <th>Duration</th>
                    <th>Semesters</th>
                    <th>Action</th>
                  </tr>
                </thead>

                <tbody>
                  {courses.length > 0 ? (
                    courses.map((course,index) => (
                      <tr key={course.id}>
                        <td>{index+1}</td>
                        <td>{course.name}</td>
                        <td>{course.type}</td>
                        <td>{course.duration}</td>
                        <td>{course.totalSemesters}</td>

                        <td>
                          <button className="btn btn-sm btn-danger" onClick={() => handleDelete(course._id)}> Delete</button>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="7" className="text-muted">
                        No courses found
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>

            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ManageCourses;
