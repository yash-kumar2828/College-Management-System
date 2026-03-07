import { useState } from "react";
import { useNavigate } from "react-router-dom";

const FacultySubject=()=>{
    const [faculty, setFaculty] = useState();
  const navigate = useNavigate();
    return(
        <>
        <div>
            <h3 className="fw-bold mb-3">Assigned Subjects</h3>
          <div className="row">
            {faculty?.assignedCourses?.length > 0 ? (
              faculty.assignedCourses.map((sub, index) => (
                <div key={index} className="col-md-6 mb-3">
                  <div className="card shadow-sm h-100">
                    <div className="card-body">
                      <h5 className="fw-semibold mb-2">{sub.subjectName}</h5>
                      <p className="mb-1">
                        Course: <strong>{sub.course}</strong>
                      </p>
                      <p className="mb-1">Semester: {sub.semester}</p>
                      <p className="text-muted mb-3">
                        {" "}
                        Subject Code: {sub.subjectCode}{" "}
                      </p>
                      <div className="d-flex gap-2">
                        <button className="btn btn-success" onClick={() => navigate("/faculty/uploadResult", { state: sub })}>{" "}Upload Result</button>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-muted">No subjects assigned</p>
            )}
          </div>
          </div>
        </>
    )
}

export default FacultySubject;