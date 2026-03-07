import { Toaster } from "react-hot-toast";
import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div className="auth-wrapper">
      
      <Outlet />
      <Toaster />
    </div>
  );
};

export default AuthLayout;
