import { useNavigate } from "react-router-dom";
import OtherHeader from "../../components/ExtraComponent/OtherHeader";
import styles from "../Dashboards.module.css";
import { useEffect, useState } from "react";
import axios from "axios";
import FacultySubject from "./FacultySubject";

const FacultyDashboard = () => {
  const [faculty, setFaculty] = useState();
  const navigate = useNavigate();
  useEffect(() => {
    const getDashboard = async () => {
      try {
        const res = await axios.get("https://college-management-system-cpo2.onrender.com/faculty/dashboard", {
          withCredentials: true,
        });
        console.log("Faculty API response:", res);
        setFaculty(res.data);
      } catch (error) {
        console.log("Error:", error.response?.data || error.message);
      }
    };

    getDashboard();
  }, []);
  return (
    <>
      <OtherHeader heading="Faculty Dashboard" firstLink="Dashboard" firstPath="/faculty/dashboard" secondLink="Dashboard"/>

      <section className={styles.dashboardSection}>
        <div className="container py-4">
          <div className="card mb-4 shadow-sm">
            <div className={`card-body ${styles.profileHeader}`}>
              <h3 className="fw-bold mb-1">
                Welcome, {faculty?.fullname || "Loading.."}
              </h3>
              <p className="text-muted mb-0">
                Faculty Id: {faculty?.facultyId || "N/A"}
              </p>
            </div>
          </div>
          <FacultySubject />
        </div>
      </section>
    </>
  );
};
export default FacultyDashboard;
