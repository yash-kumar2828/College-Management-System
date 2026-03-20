import OtherHeader from "../../components/ExtraComponent/OtherHeader";
import MaleLogo from "../../assets/StudentLogo1.png";
import FemaleLogo from "../../assets/StudentLogo2.png";
import styles from "../Dashboards.module.css";
import { GiGraduateCap } from "react-icons/gi";
import { MdCall } from "react-icons/md";
import { FaBookOpenReader } from "react-icons/fa6";
import { RiMoneyRupeeCircleFill } from "react-icons/ri";
import { useEffect, useState } from "react";
import axios from "axios";

const StudentProfile = () => {
  const [student, setStudent] = useState(null);

  useEffect(() => {
    const getDashboard = async () => {
      try {
        const res = await axios.get("https://college-management-system-cpo2.onrender.com/student/dashboard", {
          withCredentials: true,
        });
        console.log("API Response:", res.data); 
        setStudent(res.data);
      } catch (error) {
        console.log("Error:", error.response?.data);
      }
    };

    getDashboard();
  }, []);

  const profilePhoto = student?.gender === "Female" ? FemaleLogo : MaleLogo;

  return (
    <>
      <OtherHeader heading="Student Profile" firstLink="Dashboard" firstPath="/student/dashboard" secondLink="Profile" />

      <section className={styles.profileSection}>
        <div className="container my-4">
          {/* Profile */}
          <div className="card shadow-sm mb-4">
            <div className={`card-body d-flex align-items-center ${styles.welcomeCard}`} >
              <div className="me-4">
                <img src={profilePhoto} alt="profile" width="100" />
              </div>
              <div>
                <h4 className="mb-1"> Welcome, {student?.fullname || "Loading..."} </h4>
                <p className="mb-0 text-muted"> {student?.course} | {student?.enrollmentId} </p>
              </div>
            </div>
          </div>

          {/* Basic Info*/}
          <div className={`card shadow-sm mb-4 ${styles.basicInfoCard}`}>
            <div className="card-header fw-bold">
              <GiGraduateCap /> Basic Information
            </div>
            <div className="card-body row">
              <div className="col-md-6">
                <b>Course:</b> {student?.course}
              </div>
              <div className="col-md-6 mt-2">
                <b>Gender:</b> {student?.gender}
              </div>
            </div>
          </div>

          {/* Contact Info*/}
          <div className="card shadow-sm mb-4">
            <div className="card-header fw-bold">
              <MdCall /> Contact Information
            </div>
            <div className="card-body row">
              <div className="col-md-6">
                <b>Email:</b> {student?.email}
              </div>
              <div className="col-md-6">
                <b>Phone:</b> {student?.mobile}
              </div>
              <div className="col-md-12 mt-2">
                <b>Address:</b> {student?.address}
              </div>
            </div>
          </div>

          {/* Academic Info */}
          <div className="row g-3 mb-4">
            <div className="col-md-12">
              <div className="card text-center shadow-sm">
                <div className={`card-body ${styles.cardCGPA}`}>
                  <h6> <FaBookOpenReader /> CGPA </h6>
                  <h4>{student?.cgpa}</h4>
                </div>
              </div>
            </div>
          </div>

          {/* Fee Info */}
          <div className={`card shadow-sm mb-4 ${styles.cardFees}`}>
            <div className="card-header fw-bold">
              <RiMoneyRupeeCircleFill /> Fees Information
            </div>
            <div className="card-body row">
              <div className="col-md-3">
                <b>Status:</b>{" "}
                <span className={`badge ${
                    student?.feesStatus === "Paid" ? "bg-success" : "bg-warning"
                  }`}
                >
                  {student?.feesStatus}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default StudentProfile;
