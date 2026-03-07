import styles from '../Dashboards.module.css';
import { useState, useEffect } from "react";
import OtherHeader from "../../components/ExtraComponent/OtherHeader";
import axios from "axios";
import toast from 'react-hot-toast';

const UploadSyllabus = () => {

  const [courses, setCourses] = useState([]);
  const [courseId, setCourseId] = useState("");
  const [semesterNumber, setSemesterNumber] = useState("");
  const [code, setCode] = useState("");
  const [name, setName] = useState("");
  const [pdf, setPdf] = useState("");

  useEffect(() => {
    const fetchCourses = async () => {
      const res = await axios.get("http://localhost:3000/admin");
      setCourses(res.data);
    };
    fetchCourses();
  }, []);

  const handleUpload = async () => {
    if (!courseId || !semesterNumber || !code || !name || !pdf) {
      toast.success("Syllabus Upload Successfully!");
      return;
    }

    try {
      const res = await axios.post(`http://localhost:3000/syllabus/addSemester/${courseId}`,
        {
          semesterNumber: Number(semesterNumber),
          subjects: [
            {code,name, pdf }
          ]
        }
      );

      toast.success(res.data.message);
      setCode("");
      setName("");
      setPdf("");

    } catch (error) {
      toast.error(error.response?.data?.message || "Error");
    }
  };

  return (
    <>
      <OtherHeader heading="Upload Syllabus" firstLink="Dashboard" firstPath='/admin/dashboard' secondLink="Syllabus"/>

      <section className={styles.profileSection}>
        <div className="container py-4">
          <div className="card shadow-sm p-4">

            {/* Course */}
            <div className="mb-3">
              <label className="form-label fw-semibold">Select Course</label>
              <select className="form-select" onChange={(e) => setCourseId(e.target.value)}>
                <option value="">Select Course</option>
                {courses.map((c) => (
                  <option key={c._id} value={c._id}> {c.name} </option>
                ))}
              </select>
            </div>

            {/* Semester */}
            <div className="mb-3">
              <label className="form-label fw-semibold">Semester</label>
              <input type="number" className="form-control" value={semesterNumber} onChange={(e) => setSemesterNumber(e.target.value)}/>
            </div>

            {/* Subject Code */}
            <div className="mb-3">
              <label className="form-label fw-semibold">Subject Code</label>
              <input type="text" className="form-control" value={code} onChange={(e) => setCode(e.target.value)} />
            </div>

            {/* Subject Name */}
            <div className="mb-3">
              <label className="form-label fw-semibold">Subject Name</label>
              <input type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)} />
            </div>

            {/* PDF Link */}
            <div className="mb-3">
              <label className="form-label fw-semibold">PDF Link</label>
              <input type="text" className="form-control" placeholder="https://syllabus.com/file.pdf" value={pdf} onChange={(e) => setPdf(e.target.value)}  />
            </div>
            <button className="btn btn-primary" onClick={handleUpload}> Add Subject </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default UploadSyllabus;