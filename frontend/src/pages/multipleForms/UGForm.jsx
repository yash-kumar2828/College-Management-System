import OtherHeader from '../../components/ExtraComponent/OtherHeader';
import AcademicDetails from './AcademicDetails';
import ContactDetails from './ContactDetails';
import styles from './AllForms.module.css';
import PersonalDetails from './PersonalDetails';
import SubmitButton from './SubmitButton';
import Declaration from './Declaration';
import CourseSelection from './CourseSelection';
import { useForm } from "react-hook-form";
import axios from 'axios';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const UGForm = () => {

    const navigate=useNavigate();
 
     const {
        register,
        handleSubmit, 
        reset,
        formState: { errors },
      } = useForm()
    

const onSubmit = async (data) => {
    try {
        const res = await axios.post("http://localhost:3000/student/register", data);
        console.log(res.data);
        toast.success("Registration Successfully!");
        navigate("/login/studentData",{
            state:{
                rollNumber:res.data.rollNumber,
                enrollmentId:res.data.enrollmentId,
                password:res.data.password,
            }
        })
        reset();
    } catch (err) {
        toast.error(err.response?.data?.message || "Server Error");
        reset();
    }
};


    return (
        <>
            <OtherHeader heading='Under Graduation Form' firstLink='Home' firstPath="/" secondLink='Under Graduation Form' />
            <section style={{ background: 'linear-gradient(135deg, #11998e, #38ef7d)' }}>
                <div className={styles.admissionForm} >
                    <form action="" onSubmit={handleSubmit(onSubmit)}>
                        <PersonalDetails register={register} errors={errors} />
                        <ContactDetails register={register} errors={errors} />
                        <AcademicDetails type="UG" register={register} errors={errors} />
                        <CourseSelection register={register} errors={errors} />
                        <Declaration register={register} errors={errors} />
                        <SubmitButton />
                    </form>
                </div> 
            </section>
        </>
    )
}
export default UGForm;