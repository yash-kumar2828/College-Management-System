import styles from './AllForms.module.css'
import { useEffect, useState } from 'react';
import axios from 'axios';

const CourseSelection = ({register, errors }) => {

  const [courses, setCourses] = useState([]);

  useEffect(()=>{
    const getCourse=async()=>{
      try {
        const res=await axios.get("http://localhost:3000/admin/");
        setCourses(res.data);
      } catch (error) {
        console.log(error);
      }
    }
    getCourse();
  },[]);

  return (
    <>
      <h4 className="mb-3 mt-4">Course Selection</h4>

      <div className={`form-floating mb-3 ${styles.courseValue}`}>
        <select className="form-select" id="course" {...register("course", { required: true })}>
          <option value="">Select Course</option>
          {courses.map((course,index) => (
            <option key={`${course.code}-${index}`} value={course.code}>{course.name}</option>
          ))}
        </select>
        <label htmlFor="course">Course Applied For</label>
        {errors.course && <span className="text-warning">This field is required</span>}
      </div>
    </>
  );
};

export default CourseSelection;
