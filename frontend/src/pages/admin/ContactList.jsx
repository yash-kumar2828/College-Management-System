import styles from '../Dashboards.module.css';
import { useEffect, useState } from "react";
import OtherHeader from "../../components/ExtraComponent/OtherHeader";
import axios from 'axios';

const ContactList = () => {
    const [students, setStudents] = useState([]);
    useEffect(()=>{
        const getStudent=async()=>{
            try {
                const res=await axios.get("http://localhost:3000/student/allContact",{
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
            <OtherHeader heading="Contact List" firstLink="Dashboard" firstPath='/admin/dashboard' secondLink="Contact List"  />
            <section className={styles.profileSection}>
                <div className="container py-4">
                    <div className="card shadow-sm">
                        <div className="card-body">
                            <h4 className="fw-bold mb-3">Student List</h4>
                            <table className="table table-bordered text-center align-middle">
                                <thead className="table-light">
                                    <tr>
                                        <th>Serial Number</th>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Number</th>
                                        <th>Subject</th>
                                        <th>Message</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {students.length > 0 ? (
                                        students.map((stu,index) => (
                                            <tr key={index}>
                                                <td>{index+1}</td>
                                                <td>{stu.name}</td>
                                                <td>{stu.email}</td>
                                                <td>{stu.number}</td>
                                                <td>{stu.subject}</td>
                                                <td>{stu.message}</td>
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

export default ContactList;
