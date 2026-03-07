import OtherHeader from '../../components/ExtraComponent/OtherHeader';
import styles from '../Dashboards.module.css';
import FacultyMam from '../../assets/FacultyMam.png';
import FacultySir from '../../assets/FacultySir.png';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';

const FacultyProfile = () => {

     const [faculty, setFaculty] = useState(null);

  useEffect(() => {
    const getProfile = async () => {
      try {
        const res = await axios.get("http://localhost:3000/faculty/dashboard", {
          withCredentials: true,
        });
        console.log("API Response:", res.data); 
        setFaculty(res.data);
      } catch (error) {
        console.log("Error:", error.response?.data);
      }
    };

    getProfile();
  }, []);
    const defaultAvatar =faculty?.gender === "Female"
            ? FacultyMam
            : FacultySir;

    return (
        <>
            <OtherHeader heading="Faculty Profile" firstLink="Dashboard" firstPath='/faculty/dashboard' secondLink="Profile" />
            <section className={styles.profileSection}>
                <div className="container py-4">
                    <div className="card shadow-sm">
                        <div className="card-body">

                            <div className="row align-items-center">
                                <div className="col-md-3 text-center">
                                    <img src={defaultAvatar} alt="Faculty" className="img-fluid rounded-circle mb-3" style={{ width: "150px", height: "150px", objectFit: "cover" }} />
                                </div>
                                <div className="col-md-9">
                                    <h3 className="fw-bold mb-1">{faculty?.fullname || "Loading.."}</h3>
                                    <p className="text-muted mb-2">Assistant Professor</p>

                                    <div className="row">
                                        <div className="col-md-6 mb-2">
                                            <strong>Faculty ID:</strong> {faculty?.facultyId}
                                        </div>

                                        <div className="col-md-6 mb-2">
                                            <strong>Email:</strong> {faculty?.email}
                                        </div>

                                        <div className="col-md-6 mb-2">
                                            <strong>Phone:</strong> {faculty?.mobile}
                                        </div>

                                        <div className="col-md-6 mb-2">
                                            <strong>Qualification:</strong> {faculty?.highestQualification}
                                        </div>

                                        <div className="col-md-6 mb-2">
                                            <strong>Experience:</strong> {faculty?.experience}
                                        </div>

                                        <div className="col-md-6 mb-2">
                                            <strong>Address:</strong> {faculty?.address}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default FacultyProfile;
