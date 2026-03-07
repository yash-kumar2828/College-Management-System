import styles from './Footer.module.css'
import {Link, useLocation, useNavigate} from 'react-router-dom'
import { FaCopyright,FaEnvelope,FaPhone,FaShare,FaLinkedin,FaGithub,FaYoutube, FaAngleRight } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Footer=()=>{
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
    return(
        <>
        <footer> 
            <div className={styles.footersContent}>
                    <div className={`container-lg ${styles.footerContainer}`}>
                        <div className={styles.importantLinks}>
                            <h3>Contact Info</h3>
                            <div className={styles.allLinks}>
                                <div className={styles.links}>
                                    <Link to="" className={styles.contactLinks}> <FaEnvelope className={styles.icons}/>   Email: yk5708428@gmail.com</Link>
                                </div>
                                <div className={styles.links}>
                                    <Link to="" className={styles.contactLinks}> <FaPhone className={styles.icons}/> Phone: 7631659415</Link>
                                </div>

                                <div className={styles.socialMedia}>
                                     <FaShare className={styles.share}/> 
                                     <div className={styles.social}>
                                        <Link to=""><FaLinkedin className={styles.socialLinks}/></Link>
                                    </div>
                                    <div className={styles.social}>
                                        <Link to=""><FaGithub className={styles.socialLinks}/></Link>
                                    </div>
                            
                                    <div className={styles.social}>
                                        <Link to=""><FaYoutube className={styles.socialLinks}/></Link>
                                    </div>
                                    <div className={styles.social}>
                                        <Link to=""><FaSquareXTwitter className={styles.socialLinks}/></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.importantLinks}>
                            <h3>Useful Links</h3>
                            <div className={styles.allLinks}>
                                <div className={styles.links}>
                                    <Link to="/" className={styles.contactLinks}> <FaAngleRight className={styles.arrow}/> Home</Link>
                                </div>
                                <div className={styles.links}>
                                    <Link to="/" className={styles.contactLinks} onClick={(e) => scrollToSection(e, "about")}> <FaAngleRight className={styles.arrow}/> About</Link>
                                </div>
                                <div className={styles.links}>
                                    <Link to="/courses" className={styles.contactLinks}> <FaAngleRight className={styles.arrow}/> Courses</Link>
                                </div>
                                <div className={styles.links}>
                                    <Link to="/form/facultyForm" className={styles.contactLinks}> <FaAngleRight className={styles.arrow}/> Faculty</Link>
                                </div> 
                                <div className={styles.links}>
                                    <Link to="/" className={styles.contactLinks} onClick={(e) => scrollToSection(e, "contact")}> <FaAngleRight className={styles.arrow} /> Contact</Link>
                                </div>   
                                    <div className={styles.links}>
                                    <Link to="/login/adminLogin" className={styles.contactLinks}> <FaAngleRight className={styles.arrow}/> Login (For Admin)</Link>
                                </div>
                                
                            </div>
                        </div>    
                    </div>
                </div>

                <div className={styles.developerInfo}>
                    <div className={`container-lg ${styles.developer}`}>
                        <div className={styles.developerDetail}>
                            <span><i className='fas fa-copyright text-light me-2'></i>
                           <FaCopyright /> 2026 College Management System. All right reserved. </span>  
                        </div>
                        <div className={styles.developerDetail}>
                            <span>Developed By Yash Kumar </span>
                        </div>
                    </div>
                </div>
            </footer>    
        </>
    )
}
export default Footer;