import { useState, useEffect } from "react";
import styles from "../Dashboards.module.css";
import OtherHeader from "../../components/ExtraComponent/OtherHeader";
import axios from "axios";
import toast from "react-hot-toast";

const FacultyUploadResult = () => {
  const [courses, setCourses] = useState([]);
  const [courseId, setCourseId] = useState("");
  const [semester, setSemester] = useState("");
  const [subjects, setSubjects] = useState([]);
  const [selectedSubject, setSelectedSubject] = useState(null);
  const [students, setStudents] = useState([]);
  const [results, setResults] = useState({});
  const selectedCourse = courses.find((c) => c._id === courseId);

  const getGrade = (marks) => {
    if (marks >= 90) return "O";
    if (marks >= 80) return "A+";
    if (marks >= 70) return "A";
    if (marks >= 60) return "B";
    if (marks >= 50) return "C";
    if (marks >= 40) return "P";
    return "F";
  };

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const res = await axios.get("https://college-management-system-cpo2.onrender.com/admin");
        setCourses(res.data);
      } catch (err) { console.error(err); }
    };
    fetchCourses();
  }, []);

  useEffect(() => {
    if (!courseId || !semester) return;
    const fetchSubjects = async () => {
      try {
        const res = await axios.get(`http://localhost:3000/syllabus/${courseId}/${semester}`);
        setSubjects(res.data.data.subjects);
      } catch (err) { console.error(err); setSubjects([]); }
    };
    fetchSubjects();
  }, [courseId, semester]);

  useEffect(() => {
    if (!courseId) return;
    const fetchStudents = async () => {
      try {
        const res = await axios.get(`http://localhost:3000/student/students/${courseId}`);
        setStudents(res.data);
      } catch (err) { console.error(err); }
    };
    fetchStudents();
  }, [courseId]);

  const handleMarksChange = (rollNumber, value) => {
    setResults(prev => ({
      ...prev,
      [rollNumber]: {
        marks: value,
        grade: getGrade(Number(value)),
      }
    }));
  };

  const handleSubmit = async () => {
    if (!selectedSubject) return alert("Select subject");
    if (!semester) return alert("Select semester");
    try {
      for (let stu of students) {
        const data = results[stu.rollNumber];
        if (!data?.marks) {
          toast.error(`Enter marks for ${stu.fullname}`);
          return;
        }
        await axios.post("http://localhost:3000/course/result", {
          rollNumber: stu.rollNumber,
          subject: selectedSubject.name,
          marks: Number(data.marks),
          semester,
        });
      }
      toast.success("Result uploaded/updated");
      setResults({});
      setSelectedSubject(null);
    } catch (err) {
      console.error(err);
      toast.error("Upload Failed");
    }
  };

  return (
    <>
      <OtherHeader heading="Upload Result" firstLink="Dashboard" firstPath="/faculty/dashboard" secondLink="Upload Result" />

      <section className={styles.dashboardSection}>
        <div className="container py-4">
          {/* Course */}
          <select className="form-select mb-3" value={courseId}
            onChange={(e) => { setCourseId(e.target.value); setSelectedSubject(null); setResults({}); }}>
            <option value="">Select Course</option>
            {courses.map(c => <option key={c._id} value={c._id}>{c.name}</option>)}
          </select>
          {/* Semester */}
          <select className="form-select mb-3" value={semester}
            onChange={(e) => { setSemester(e.target.value); setSelectedSubject(null); setResults({}); }}>
            <option value="">Select Semester</option>
            {[1,2,3,4,5,6].map(sem => <option key={sem} value={sem}>Sem {sem}</option>)}
          </select>
          {/* Subject */}
          <select className="form-select mb-4" value={selectedSubject?.code || ""}
            onChange={(e) => { const sub = subjects.find(s => s.code === e.target.value); setSelectedSubject(sub); setResults({}); }}>
            <option value="">Select Subject</option>
            {subjects.map(sub => <option key={sub.code} value={sub.code}>{sub.name}</option>)}
          </select>
          {/* Table */}
          {selectedSubject && (
            <div className="card">
              <div className="card-body">
                <h5>{selectedCourse?.name} | Sem {semester}</h5>
                <table className="table table-bordered text-center">
                  <thead>
                    <tr>
                      <th>Roll</th>
                      <th>Name</th>
                      <th>Marks</th>
                      <th>Grade</th>
                    </tr>
                  </thead>
                  <tbody>
                    {students.map(stu => (
                      <tr key={stu.rollNumber}>
                        <td>{stu.rollNumber}</td>
                        <td>{stu.fullname}</td>
                        <td>
                          <input type="number" className="form-control" value={results[stu.rollNumber]?.marks || ""}
                            onChange={(e) => handleMarksChange(stu.rollNumber, e.target.value)} />
                        </td>
                        <td>{results[stu.rollNumber]?.grade || "--"}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <button className="btn btn-success" onClick={handleSubmit}>Submit</button>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
};
export default FacultyUploadResult;
