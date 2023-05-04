import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toast";
const MainLayout = () => {
  return (
    <div>
      <ToastContainer delay={3000} />
      <Outlet />
    </div>
  );
};

export default MainLayout;
