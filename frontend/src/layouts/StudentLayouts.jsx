import { Outlet, Navigate } from "react-router-dom";
import StudentNavbar from '../pages/student/StudentNavbar.jsx';
import Footer from "../components/common/Footer.jsx";
import InTop from "../components/ExtraComponent/InTop.jsx";
import ScrollToTop from "../components/ExtraComponent/ScrollToTop.jsx";
import { Toaster } from "react-hot-toast";
const StudentLayout = () => {
  const role = localStorage.getItem("role");

  if (role !== "student") {
    return <Navigate to="/" replace />;
  }

  return (
    <>
      <InTop />
      <ScrollToTop />
      <StudentNavbar />
      <Outlet />
      <Footer />
      <Toaster />
    </>
  );
};

export default StudentLayout;
