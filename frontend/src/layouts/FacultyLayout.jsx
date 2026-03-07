import { Outlet, Navigate } from "react-router-dom";
import FacultyNavbar from '../pages/faculty/FacultyNavbar.jsx';
import Footer from "../components/common/Footer.jsx";
import InTop from "../components/ExtraComponent/InTop.jsx";
import ScrollToTop from "../components/ExtraComponent/ScrollToTop.jsx";
import { Toaster } from "react-hot-toast";

const FacultyLayout = () => {
  const role = localStorage.getItem("role");

  if (role !== "faculty") {
    return <Navigate to="/" replace />;
  }

  return (
    <>
      <InTop />
      <ScrollToTop />
      <FacultyNavbar />
      <Outlet />
      <Footer />
      <Toaster />
    </>
  );
};

export default FacultyLayout;
