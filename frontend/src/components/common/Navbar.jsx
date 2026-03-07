import styles from "./Navbar.module.css";
import logo from '../../assets/logo.png'
import { Link, useLocation, useNavigate} from "react-router-dom";
import { VscTriangleDown } from "react-icons/vsc";


const Navbar=()=> {

  const navigate = useNavigate();
  const location = useLocation();
  const scrollToSection = (e, id) => {
    e.preventDefault();

    if (location.pathname !== "/") {
      navigate("/", { state: { scrollTo: id } });
    } else {
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <>
      <nav
        className={`navbar navbar-expand-lg bg-body-tertiary sticky-top ${styles.navbarContent}`}
      >
        <div className="container-fluid">
          <div className={styles.logo}>
            <img src={logo} alt="" />
          </div>
          <button className="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={`collapse navbar-collapse ${styles.navbarCollapse}`} id="navbarSupportedContent">
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item"><Link to="/" className={`nav-link active ${styles.navLink}`}>Home</Link></li>
                <li className="nav-item"><Link to="/" className={`nav-link active ${styles.navLink}`} onClick={(e) => scrollToSection(e, "about")}>About</Link></li>
                <li className="nav-item"><Link to="/courses" className={`nav-link active ${styles.navLink}`}>Courses</Link></li>
                <li className="nav-item"><Link to="/form/underGraduateForm" className={`nav-link active ${styles.navLink}`} >Admissions</Link> </li>
                <li className="nav-item"><Link to="/form/facultyForm" className={`nav-link active ${styles.navLink}`}>Faculty</Link></li>
                <li className="nav-item"><Link to="/" className={`nav-link active ${styles.navLink}`} onClick={(e) => scrollToSection(e, "contact")}>Contact</Link></li>
                <li className="nav-item dropdown"><Link className={`nav-link  ${styles.navLink}`} to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"> Login <VscTriangleDown /></Link>
                  <ul className="dropdown-menu dropdown-menu-end">
                    <li><Link className="dropdown-item" to="/login/studentLogin">Student Login</Link></li>
                    <li><Link className="dropdown-item" to="/login/facultyLogin">Faculty Login</Link></li>
                    <li><Link className="dropdown-item" to="/login/adminLogin">Admin Login</Link></li>
                  </ul>
                </li>
                <li className="nav-item"><Link to="/login/feedback" className={`nav-link active ${styles.navLink}`} >Feedback</Link></li>
              </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
export default Navbar;
