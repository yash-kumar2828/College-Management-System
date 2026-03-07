import OtherHeader from "../../components/ExtraComponent/OtherHeader";
import styles from "../Dashboards.module.css";
import { GiGraduateCap } from "react-icons/gi";
import {FaRegIdCard } from "react-icons/fa";
import { FaBookOpenReader } from "react-icons/fa6";
import { RiMoneyRupeeCircleFill } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import StudentNotice from "./StudentNotice";

const StudentDashboard = () => {
  const [student, setStudent] = useState({}); 
  const navigate = useNavigate();
  useEffect(() => {
    const getDashboard = async () => {
      try {
        const res = await axios.get(
          "http://localhost:3000/student/dashboard",
          {
            withCredentials: true,
          },
        );

        setStudent(res.data);
      } catch (error) {
        console.log("Error:", error.response?.data);
      }
    };

    getDashboard();
  }, []);

  return (
    <>
      <OtherHeader heading="Student Dashboard" firstLink='Dashboard' firstPath='/student/dashboard' secondLink="Dashboard"/>

      <section className={styles.dashboardSection}>
        <div className={`container my-4 ${styles.dashboardContainer}`}>
          {/* PROFILE HEADER */}
          <div className="card mb-4 shadow-sm">
            <div className={`card-body ${styles.progileHeader}`}>
              <h4 className="card-title">Welcome, {student.fullname || "Loading..."}</h4>
              <p className="mb-1"> <GiGraduateCap /> Course: {student.course} </p>
              <p className="mb-0"> <FaRegIdCard /> Enrollment No: {student.enrollmentId} </p>
               <p className="mb-0"> <FaRegIdCard /> Roll No: {student.rollNumber} </p>
            </div>
          </div>

          {/* DASHBOARD CARDS */}
          <div className="row g-3 mb-4">

            <div className="col-md-6">
              <div className="card text-center shadow-sm">
                <div className={`card-body ${styles.cardCGPA}`}>
                  <h6> <FaBookOpenReader /> CGPA </h6>
                  <h4>{student.cgpa}</h4>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="card text-center shadow-sm">
                <div className={`card-body ${styles.cardFees}`}>
                  <h6> <RiMoneyRupeeCircleFill /> Fees </h6>
                  <h4>{student.feesStatus}</h4>
                </div>
              </div>
            </div>
          </div>

          <StudentNotice />
          
          {/* QUICK LINKS */}
          <div className="row g-3">
            <div className="col-md-6">
              <button className="btn btn-secondary w-100" onClick={() => navigate("/student/profile")} > Profile </button>
            </div>
            <div className="col-md-6">
              <Link to="/student/result" className="btn btn-success w-100">View Results</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default StudentDashboard;
