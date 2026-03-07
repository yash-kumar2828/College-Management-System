import { Outlet, Navigate } from "react-router-dom";
import AdminNavbar from '../pages/admin/AdminNavbar.jsx';
import Footer from "../components/common/Footer.jsx";
import InTop from "../components/ExtraComponent/InTop.jsx";
import ScrollToTop from "../components/ExtraComponent/ScrollToTop.jsx";
import {Toaster } from "react-hot-toast";

const AdminLayout = () => {
  const role = localStorage.getItem("role");

  if (role !== "admin") {
    return <Navigate to="/" replace />;
  }

  return (
    <>
      <InTop />
      <ScrollToTop />
      <AdminNavbar />
      <Outlet />
      <Footer />
      <Toaster />
    </>
  );
};

export default AdminLayout;
