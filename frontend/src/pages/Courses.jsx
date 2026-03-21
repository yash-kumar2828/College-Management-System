import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import OtherHeader from "../components/ExtraComponent/OtherHeader";
import styles from "./Courses.module.css";

const Courses = () => {
  const sectionRef = useRef(null);

  const [visible, setVisible] = useState(false);
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  
  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get("https://college-management-system-cpo2.onrender.com/admin");
        setCourses(response.data);
      } catch (error) {
        console.error("Error fetching courses:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <OtherHeader heading="Courses" firstLink="Home" firstPath="/" secondLink="Courses"/>

      <section className={styles.courseSection}>
        <div className={`container-lg ${styles.courseContainer}`}>
          <h2>Courses</h2>

          <div ref={sectionRef} className={`d-flex flex-column ${ visible ? styles.show : "" } ${styles.allCourse}`}>
            <table className={styles.courseTable}>
              <thead>
                <tr>
                  <th>Sr. No</th>
                  <th>Name of Course</th>
                  <th>Course Duration</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>
                {loading ? (
                  <tr>
                    <td colSpan="4">Loading courses...</td>
                  </tr>
                ) : courses.length === 0 ? (
                  <tr>
                    <td colSpan="4">No courses available</td>
                  </tr>
                ) : (
                  courses.map((course, index) => (
                    <tr key={course._id}>
                      <td>{index + 1}</td>
                      <td>{course.name}</td>
                      <td>{course.duration}</td>
                      <td>
                        <Link to={`/courses/${course._id}`} className="btn btn-dark btn-sm" >View Syllabus </Link>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
};

export default Courses;
