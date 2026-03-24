import styles from '../Dashboards.module.css';
import { useEffect, useState } from "react";
import OtherHeader from "../../components/ExtraComponent/OtherHeader";
import axios from 'axios';

const ManageStudents = () => {
    const [students, setStudents] = useState([]);
    useEffect(()=>{
        const getStudent=async()=>{
            try {
                const res=await axios.get("http://localhost:3000/student/",{
                    withCredentials:true,
                });
                console.log(res.data);
                setStudents(res.data);
            } catch (error) {
                console.log("Error:", error.response?.data);
            }
        };
        getStudent(); 
    },[])



    return (
        <>
            <OtherHeader heading="Manage Students" firstLink="Dashboard" firstPath='/admin/dashboard' secondLink="Students"  />
            <section className={styles.profileSection}>
                <div className="container py-4">
                    <div className="card shadow-sm">
                        <div className="card-body">

                            <h4 className="fw-bold mb-3">Student List</h4>

                            <table className="table table-bordered text-center align-middle">
                                <thead className="table-light">
                                    <tr>
                                        <th>Roll</th>
                                        <th>Name</th>
                                        <th>Mobile No.</th>
                                        <th>Course</th>
                                        <th>Address</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {students.length > 0 ? (
                                        students.map((stu) => (
                                            <tr key={stu.rollNumber}>
                                                <td>{stu.rollNumber}</td>
                                                <td>{stu.fullname}</td>
                                                <td>{stu.mobile}</td>
                                                <td>{stu.course}</td>
                                                <td>{stu.address}</td>
                                            </tr>
                                        ))
                                    ) : (
                                        <tr>
                                            <td colSpan="6" className="text-muted"> No students found  </td>
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

export default ManageStudents;
