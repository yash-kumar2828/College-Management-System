import { useLocation, useNavigate } from "react-router-dom";

const FacultyData = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const {  facultyId, password } = location.state || {};

    if (!facultyId) {
        return (
            <div className="d-flex flex-column justify-content-center align-items-center vh-100">
                <h2>No Data Found</h2>
                <button className="btn btn-primary mt-2" onClick={() => navigate("/")}>
                    Go Home
                </button>
            </div>
        );
    }

    return (
        <div className="container d-flex flex-column align-items-center justify-content-center min-vh-100 px-3">
            <div className="card shadow-lg w-100" style={{ maxWidth: "420px" }}>
                
                <div className="card-header text-center fw-bold fs-5">
                    Registration Successful
                </div>

                <div className="card-body text-center">
                   

                    <h6 className="text-muted">Faulty ID</h6>
                    <p className="fs-5 fw-bold text-primary">{facultyId}</p>

                    <h6 className="text-muted mt-3">Password</h6>
                    <p className="fs-5 fw-bold text-danger">{password}</p>

                    <button className="btn btn-success w-100 mt-3" onClick={() => navigate("/login/facultyLogin")}>Go to Login</button>

                    <button className="btn btn-success w-100 mt-3" onClick={() => navigate("/")}>Go to Home</button>
                </div>
            </div>

            <div className="alert alert-primary text-center mt-3 w-100" style={{ maxWidth: "420px" }}>
                Please save this ID & Password for login.
            </div>

        </div>
    );
};

export default FacultyData;
