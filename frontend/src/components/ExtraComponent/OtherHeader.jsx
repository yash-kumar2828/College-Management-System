import { Link } from 'react-router-dom';
import collegeImage from '../..//assets/college.jpeg';
import styles from './OtherHeader.module.css';

function OtherHeader({heading,firstLink,firstPath,secondLink}){
    return(
        <>
        <section>
            <div className={styles.collegeImage}>
                <img src={collegeImage} alt="collgeImage" />
            </div>
            <div className={styles.headerPage}>
                <div className={styles.headingContent}>
                    <h1>{heading}</h1>
                </div>
                <div className={styles.pageLinks}>
                        <Link to={firstPath}>{firstLink}</Link>
                        <Link to='#'>{secondLink}</Link>
                </div>
            </div> 
        </section>
        </>
    )
};
export default OtherHeader;