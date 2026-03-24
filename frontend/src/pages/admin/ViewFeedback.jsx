import styles from '../Dashboards.module.css';
import { useEffect, useState } from "react";
import OtherHeader from "../../components/ExtraComponent/OtherHeader";
import axios from 'axios';

const ViewFeedback = () => {
    const [feedback, setFeedback] = useState([]);
    useEffect(()=>{
        const getFeedback=async()=>{
            try {
                const res=await axios.get("http://localhost:3000/student/getFeedback");
                console.log(res.data);
                setFeedback(res.data);
            } catch (error) {
                console.log("Error:", error.response?.data);
            }
        };
        getFeedback(); 
    },[])
    return (
        <>
            <OtherHeader heading="View Feedback" firstLink="Dashboard" firstPath='/admin/dashboard' secondLink="Feedback"  />
            <section className={styles.profileSection}>
                <div className="container py-4">
                    <div className="card shadow-sm">
                        <div className="card-body">
                            <h4 className="fw-bold mb-3">Feedback List</h4>
                            <table className="table table-bordered text-center align-middle">
                                <thead className="table-light">
                                    <tr>
                                        <th>Serial No.</th>
                                        <th>Name</th>
                                        <th>Gmail</th>
                                        <th>Message</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {feedback.length > 0 ? (
                                        feedback.map((feed,index) => (
                                            <tr key={index}>
                                                <td>{index+1}</td>
                                                <td>{feed.name}</td>
                                                <td>{feed.email}</td>
                                                <td>{feed.message}</td>
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
export default ViewFeedback;
