import styles from "../Dashboards.module.css";
import { useEffect, useState } from "react";
import axios from "axios";
import OtherHeader from "../../components/ExtraComponent/OtherHeader";

const ManageStudentFees = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const res = await axios.get(
          "https://college-management-system-cpo2.onrender.com/student/fees",
          { withCredentials: true },
        );
        setStudents(res.data);
      } catch (error) {
        console.log(
          "Error fetching fee data:",
          error.response?.data || error.message,
        );
        setStudents([]);
      }
    };

    fetchStudents();
  }, []);

  return (
    <>
      <OtherHeader
        heading="Student Fee Status" firstLink="Dashboard" firstPath="/admin/dashboard" secondLink="Fees" />

      <section className={styles.profileSection}>
        <div className="container py-4">
          <div className="card shadow-sm">
            <div className="card-body">
              <h4 className="fw-bold mb-3">Fee Payment Status</h4>
              <table className="table table-bordered text-center align-middle">
                <thead className="table-light">
                  <tr>
                    <th>Roll</th>
                    <th>Name</th>
                    <th>Course</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {students.length > 0 ? (
                    students.map((student) => (
                      <tr key={student.roll}>
                        <td>{student.roll}</td>
                        <td>{student.name}</td>
                        <td>{student.course}</td>
                        <td>
                          {student.status === "Paid" ? (
                            <span className="badge bg-success">Paid</span>
                          ) : (
                            <span className="badge bg-danger">Pending</span>
                          )}
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="4" className="text-muted">
                        No fee records found
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

export default ManageStudentFees;
