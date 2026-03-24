import OtherHeader from '../../components/ExtraComponent/OtherHeader'
import { useForm } from "react-hook-form";
import AcademicDetails from './AcademicDetails';
import styles from './AllForms.module.css';
import ContactDetails from './ContactDetails';
import Declaration from './Declaration';
import PersonalDetails from './PersonalDetails';
import SubmitButton from './SubmitButton';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const FacultyForm=()=>{
    
    const navigate=useNavigate();
    const {
        register,
        handleSubmit, 
        reset,
        formState: { errors },
      } = useForm()
    
       const onSubmit = async(data) => {
        try {
            const res=await axios.post("http://localhost:3000/faculty/register",data)
            console.log(res.data);
            navigate("/login/facultyData",{
            state:{
                facultyId:res.data.facultyId,
                password:res.data.password,
            }
        })
        reset();
            
        } catch (error) {
            toast.error(err.response?.data?.message || "Server Error");
            reset();
        }
        console.log(data);
        reset();    
      }

    return(
        <>
            <OtherHeader heading='Faculty Form' firstLink='Home' firstPath='/' secondLink='Faculty Form'/>
            <section style={{ background: 'linear-gradient(135deg, #11998e, #38ef7d)' }}>
                <div className={styles.admissionForm} >
                    <form action="" onSubmit={handleSubmit(onSubmit)}>
                        <PersonalDetails register={register} errors={errors} />
                        <ContactDetails register={register} errors={errors} />
                        <AcademicDetails type="FACULTY" register={register} errors={errors} />
                        <Declaration register={register} errors={errors} />
                        <SubmitButton />
                    </form>
                </div>
            </section>
        </>
    )
}

export default FacultyForm