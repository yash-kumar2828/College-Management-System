import { useState, useEffect } from "react";
import { BsGraphUpArrow } from "react-icons/bs";
import styles from "../Dashboards.module.css";
import OtherHeader from "../../components/ExtraComponent/OtherHeader";
import axios from "axios";

const StudentResult = () => {
  const [resultsData, setResultsData] = useState({});
  const [cgpa, setCgpa] = useState("0.00");
  const [selectedSemester, setSelectedSemester] = useState("1");
  const [loading, setLoading] = useState(true);

  const totalSemesters = 6;

  useEffect(() => {
    const fetchResults = async () => {
      try {
        const resultRes = await axios.get(
          "http://localhost:3000/course/studentResult", 
          { withCredentials: true },
        );

        setResultsData(resultRes.data);


        const dashboardRes = await axios.get(
          "http://localhost:3000/student/dashboard",
          { withCredentials: true },
        );

        setCgpa(dashboardRes.data.cgpa);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchResults();
  }, []);

  const currentResult = resultsData[Number(selectedSemester)];

  return (
    <>
      <OtherHeader
        heading="Student Result" firstLink="Dashboard" firstPath="/student/dashboard" secondLink="Results" />

      <section className={styles.profileSection}>
        <div className="container py-4">
          <h3 className="mb-4 fw-bold">
            <BsGraphUpArrow /> Student Results
          </h3>

          {loading && <p>Loading results...</p>}

          {/* Semester Selector */}
          <div className="mb-4">
            <label className="form-label fw-semibold">Select Semester</label>
            <select
              className="form-select w-25"
              value={selectedSemester}
              onChange={(e) => setSelectedSemester(e.target.value)}
            >
              {[...Array(totalSemesters)].map((_, i) => (
                <option key={i + 1} value={i + 1}> Semester {i + 1} </option>
              ))}
            </select>
          </div>

          {/* Result Card */}
          <div className="card shadow-sm">
            <div className="card-body">
              {currentResult ? (
                <>
                  <h5 className="mb-3"> SGPA :{" "} <span className="text-success">{currentResult.sgpa}</span>  </h5>

                  <table className="table table-bordered text-center">
                    <thead className="table-light">
                      <tr>
                        <th>Subject</th>
                        <th>Marks</th>
                        <th>Grade</th>
                      </tr>
                    </thead>
                    <tbody>
                      {currentResult.subjects.map((sub, index) => (
                        <tr key={index}>
                          <td>{sub.name}</td>
                          <td>{sub.marks}</td>
                          <td>{sub.grade}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </>
              ) : (
                !loading && (
                  <p className="text-warning fw-semibold"> Result not published for this semester</p>
                )
              )}
            </div>
          </div>

          {/* CGPA */}
          <div className="row justify-content-center mt-4">
            <div className="col-md-4">
              <div className="card text-center shadow-sm border-success">
                <div className="card-body">
                  <h6 className="text-muted"> Overall CGPA</h6>
                  <h2 className="fw-bold text-success">{cgpa}</h2>
                  <small className="text-muted">Till current semester</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default StudentResult;
