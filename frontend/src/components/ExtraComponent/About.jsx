import styles from "./About.module.css";
import studentImage from "../../assets/studentPhoto.png";
import { useEffect, useRef } from "react";

const About=()=>{

    const refs = useRef([]);
    useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible);
          }
        });
      },
      { threshold: 0.3 }
    );

    refs.current.forEach((el) => el && observer.observe(el));

    return () => observer.disconnect();
  }, []);


    return(
        <>
            <section id="about" style={{background: 'linear-gradient(135deg, #1e3c72, #2a5298)'}}>
               <div className={`container-lg ${styles.CollegeAbout}`}>


                    <div ref={(el) => (refs.current[0] = el)} className={`${styles.studentImage} ${styles["from-left"]}`}>
                        <img src={studentImage} alt="studentImage"/>
                    </div>


                    <div ref={(el) => (refs.current[1] = el)} className={`${styles.aboutCollege} ${styles["from-right"]}`}>
                        <h3>ABOUT COLLEGE MANAGEMENT SYSTEM</h3>
                        <p>The College Management System is a modern web-based application designed to manage academic and administrative activities of a college in an efficient and organized manner.</p>
                        <hr className="my-4" />
                        <p>This system provides a centralized platform for administrators, faculty members, and students. It helps in managing courses, student records, fees, and results with role-based access control.</p>
                        <hr className="my-4" />
                        <h5>Admin</h5>
                        <p>Manages students, faculty, courses, fees, and overall system operations.</p>
                         
                         <hr className="my-4" />
                        <h5>Faculty</h5>
                        <p>Handles uploads results, and manages academic activities.</p>
                        
                        <hr className="my-4" />
                        <h5>Student</h5>
                        <p>Views profile details, courses, fees, and results.</p>

                        <hr className="my-4" />
                        <p>The system is built using modern technologies like React and Bootstrap, ensuring a responsive, user-friendly, and scalable interface suitable for real-world academic environments.</p>
                        
                    </div>
                </div>
            </section>
        </>
    )
}
export default About;