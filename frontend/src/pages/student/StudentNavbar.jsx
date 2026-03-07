import styles from '../../components/common/Navbar.module.css';
import logo from '../../assets/logo.png';
import { Link } from "react-router-dom";
import toast from 'react-hot-toast';
const StudentNavbar = () => {

    const handleLogout=()=>{
        localStorage.removeItem("role");
        toast.success("Logout Successfully!");
        }

    return (
        <>
            <nav
                className={`navbar navbar-expand-lg bg-body-tertiary sticky-top ${styles.navbarContent}`}>
                <div className="container-fluid">
                    <div className={styles.logo}>
                        <img src={logo} alt="" />
                    </div>
                    <button className="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className={`collapse navbar-collapse ${styles.navbarCollapse}`} id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item"><Link to="/student/dashboard" className={`nav-link ${styles.navLink}`}>Dashboard</Link></li>
                            <li className="nav-item"><Link to="/student/profile" className={`nav-link ${styles.navLink}`}>Profile</Link></li>
                            <li className="nav-item"><Link to="/student/result" className={`nav-link ${styles.navLink}`}>Results</Link></li>
                            <li className="nav-item"><Link to="/" onClick={handleLogout} className={`nav-link ${styles.navLink}`}>Logout</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}
export default StudentNavbar;