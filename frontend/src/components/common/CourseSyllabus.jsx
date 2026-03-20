import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ComingSoon from "../common/ComingSoon";
import OtherHeader from "../ExtraComponent/OtherHeader";
import axios from "axios";

const CourseSyllabus = () => {
  const { courseId } = useParams();

  const [course, setCourse] = useState(null);
  const [courseSyllabus, setCourseSyllabus] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const courseRes = await axios.get(`https://college-management-system-cpo2.onrender.com/admin/${courseId}`);
        setCourse(courseRes.data);

        const syllabusRes = await axios.get(`http://localhost:3000/syllabus/${courseId}`);
        setCourseSyllabus(syllabusRes.data);

      } catch (error) {
        console.log("Error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [courseId]);

  if (loading) {
    return <div className="text-center py-5">Loading...</div>;
  }

  if (!course) {
    return (
      <>
        <OtherHeader heading="Syllabus Page" firstLink="Home" secondLink="Syllabus" />
        <div className="container text-center py-5">
          <h4 className="text-danger">Page Not Found</h4>
        </div>
      </>
    );
  }

  if (!courseSyllabus) {
    return <ComingSoon title={course.name} />;
  }

  return (
    <>
      <OtherHeader heading="Syllabus Page" firstLink="Home" secondLink="Syllabus" />

      <div className="container py-4">
        <h3 className="fw-bold">{course.name}</h3>

        {courseSyllabus.semesters.map((sem) => (
          <div key={sem._id} className="card mb-3">

            <div className="card-header fw-bold">
              Semester {sem.semesterNumber}
            </div>

            <div className="card-body">
              <table className="table table-bordered text-center">

                <thead>
                  <tr>
                    <th>Code</th>
                    <th>Subject</th>
                    <th>Syllabus</th>
                  </tr>
                </thead>

                <tbody>
                  {sem.subjects.map((sub) => (
                    <tr key={sub._id}>
                      <td>{sub.code}</td>
                      <td>{sub.name}</td>
                      <td>
                        {sub.pdf?.startsWith("http") ? (
                          <Link to={sub.pdf} target="_blank" className="btn btn-sm btn-primary"> PDF</Link>
                        ) : (
                          <span className="text-muted">Not Available</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>

              </table>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default CourseSyllabus;
