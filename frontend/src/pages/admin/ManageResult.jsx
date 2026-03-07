import styles from "../Dashboards.module.css";
import { useState, useEffect } from "react";
import OtherHeader from "../../components/ExtraComponent/OtherHeader";
import axios from "axios";

const ManageResult = () => {
  const [results, setResults] = useState([]);

  useEffect(() => {
    const getResult = async () => {
      try {
        const res = await axios.get("http://localhost:3000/course/allResult", {
          withCredentials: true,
        });
        setResults(res.data);
      } catch (error) {
        console.log("Error fetching results:", error.response?.data || error.message);
      }
    };
    getResult();
  }, []);

  return (
    <>
      <OtherHeader heading="Manage Results" firstLink="Dashboard" firstPath="/admin/dashboard" secondLink="Results" />

      <section className={styles.profileSection}>
        <div className="container py-4">
          <div className="card shadow-sm">
            <div className="card-body">
              <h4 className="fw-bold mb-3">Semester Results</h4>

              <table className="table table-bordered align-middle">
                <thead className="table-light text-center">
                  <tr>
                    <th>Roll no.</th>
                    <th>Name</th>
                    <th>Course</th>
                    <th>Semester</th>
                    <th>SGPA</th>
                  </tr>
                </thead>

                <tbody>
                  {results?.length > 0 ? (
                    results.map((res) =>
                      res.summary?.length > 0 ? (
                        res.summary.map((sem) => (
                          <tr key={res.rollNumber + sem.semester}>
                            <td>{res.rollNumber}</td>
                            <td>{res.fullname}</td>
                            <td>{res.course}</td>
                            <td>{sem.semester}</td>
                            <td>{sem.sgpa}</td>
                          </tr>
                        ))
                      ) : (
                        <tr key={res.rollNumber}>
                          <td>{res.rollNumber}</td>
                          <td>{res.fullname}</td>
                          <td>{res.course}</td>
                          <td colSpan={2}>No semesters found</td>
                        </tr>
                      )
                    )
                  ) : (
                    <tr>
                      <td colSpan={5}>No results found</td>
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

export default ManageResult;