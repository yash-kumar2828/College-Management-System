import styles from './ScrollToTop.module.css';
import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";


const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 150) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    visible && (
      <button className={styles.buttons} onClick={scrollToTop}><FaArrowUp /></button>
    )
  );
};

export default ScrollToTop;
