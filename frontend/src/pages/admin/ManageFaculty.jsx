import styles from "../Dashboards.module.css";
import { useState } from "react";
import OtherHeader from "../../components/ExtraComponent/OtherHeader";
import { useEffect } from "react";
import axios from "axios";

const ManageFaculty = () => {
  const [faculty, setFaculty] = useState([]);
      useEffect(()=>{
          const getFaculty=async()=>{
              try {
                  const res=await axios.get("http://localhost:3000/faculty/allFaculty",{
                      withCredentials:true,
                  });
                  console.log(res.data);
                  setFaculty(res.data);
              } catch (error) {
                  console.log("Error:", error.response?.data);
              }
          };
          getFaculty(); 
      },[])

  return (
    <>
      <OtherHeader heading="Manage Faculty" firstLink="Dashboard" firstPath='/admin/dashboard'  secondLink="Faculty"/>

      <section className={styles.profileSection}>
        <div className="container py-4">
          <div className="card shadow-sm">
            <div className="card-body">

              <h4 className="fw-bold mb-3">Faculty List</h4>

              <table className="table table-bordered text-center align-middle">
                <thead className="table-light">
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Phone No.</th>
                    <th>Qualification</th>
                    <th>Address</th>
                  </tr>
                </thead>

                <tbody>
                  {faculty.length > 0 ? (
                    faculty.map((f) => (
                      <tr key={f.facultyId}>
                        <td>{f?.facultyId}</td>
                        <td>{f?.fullname}</td>
                        <td>{f?.mobile}</td>
                        <td>{f?.highestQualification}</td>
                        <td>{f?.address}</td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="5" className="text-muted"> No faculty found</td>
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

export default ManageFaculty;
