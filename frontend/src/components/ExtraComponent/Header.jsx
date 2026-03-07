import collegeImage from "../../assets/college.jpeg";
import styles from "./Header.module.css";

function Header() {
  return (
    <>
      <section id="home">
        <div className={styles.collegeImage}>
          <img src={collegeImage} alt="collgeImage" />
        </div>
      </section>
    </>
  );
}
export default Header;
