import styles from '../Dashboards.module.css';
import { Link} from "react-router-dom";
import OtherHeader from "../../components/ExtraComponent/OtherHeader";

const AdminDashboard = () => {
    return (
        <>
            <OtherHeader heading="Admin Dashboard" firstLink="Dashboard" firstPath='/admin/dashboard' secondLink="Dashboard" />

            <section className={styles.profileSection}>
                <div className="container py-4">
                    <h3 className="fw-bold mb-4">Admin Control Panel</h3>

                    <div className="row g-4">

                        {/* Manage Students */}
                        <div className="col-md-4">
                            <Link to="/admin/students" className="text-decoration-none">
                                <div className="card shadow-sm text-center p-4">
                                    <h5>Students List</h5>
                                    <p className="text-muted">Show All UG Students</p>
                                </div>
                            </Link>
                        </div>

                        {/* Manage Faculty */}
                        <div className="col-md-4">
                            <Link to="/admin/faculty" className="text-decoration-none">
                                <div className="card shadow-sm text-center p-4">
                                    <h5>Faculty List</h5>
                                    <p className="text-muted">Show All Faculty</p>
                                </div>
                            </Link>
                        </div>

                        {/* Manage Courses */}
                        <div className="col-md-4">
                            <Link to="/admin/courses" className="text-decoration-none">
                                <div className="card shadow-sm text-center p-4">
                                    <h5>Manage Courses</h5>
                                    <p className="text-muted">Add Subjects & Delete Subject</p>
                                </div>
                            </Link>
                        </div>

                        {/* Fees Management */}
                        <div className="col-md-4">
                            <Link to="/admin/studentFees" className="text-decoration-none">
                                <div className="card shadow-sm text-center p-4">
                                    <h5>Fees Management</h5>
                                    <p className="text-muted">Track Student Payments</p>
                                </div>
                            </Link>
                        </div>

                        {/* Upload Syllabus */}
                        <div className="col-md-4">
                            <Link to="/admin/syllabus" className="text-decoration-none">
                                <div className="card shadow-sm text-center p-4">
                                    <h5>Upload Syllabus</h5>
                                    <p className="text-muted">Upload / Update PDF</p>
                                </div>
                            </Link>
                        </div>

                        {/* upload results */}
                        <div className="col-md-4">
                            <Link to="/admin/results" className="text-decoration-none">
                                <div className="card shadow-sm text-center p-4">
                                    <h5>Student Results</h5>
                                    <p className="text-muted">All Student Result</p>
                                </div>
                            </Link>
                        </div>
                        
                        {/* Update fees  */}
                        <div className="col-md-4">
                            <Link to="/admin/updateFee" className="text-decoration-none">
                                <div className="card shadow-sm text-center p-4">
                                    <h5>Update Fees</h5>
                                    <p className="text-muted">Update Fee Paid / Painding</p>
                                </div>
                            </Link>
                        </div>

                        {/* create notice  */}
                         <div className="col-md-4">
                            <Link to="/login/createNotice" className="text-decoration-none">
                                <div className="card shadow-sm text-center p-4">
                                    <h5>Update Notice</h5>
                                    <p className="text-muted">Update / Manage Notice</p>
                                </div>
                            </Link>
                        </div>

                        {/* COntact List  */}
                        <div className="col-md-4">
                            <Link to="/admin/contactList" className="text-decoration-none">
                                <div className="card shadow-sm text-center p-4">
                                    <h5>Contact List</h5>
                                    <p className="text-muted">See the all Contact List</p>
                                </div>
                            </Link>
                        </div>


                        {/* Add Admin  */}
                        <div className="col-md-4">
                            <Link to="/login/addAdmin" className="text-decoration-none">
                                <div className="card shadow-sm text-center p-4">
                                    <h5>Add Admin</h5>
                                    <p className="text-muted">Add Admin</p>
                                </div>
                            </Link>
                        </div>

                        {/* View Feedback  */}
                        <div className="col-md-4">
                            <Link to="/admin/viewFeedback" className="text-decoration-none">
                                <div className="card shadow-sm text-center p-4">
                                    <h5>Feedback</h5>
                                    <p className="text-muted">View Feedback</p>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default AdminDashboard;
