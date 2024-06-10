import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import AuthContextProvider from "../context/AuthContext";

const Layout = () => {
  return (
    <div>
      <AuthContextProvider>
        <Navbar />
        <Outlet />
      </AuthContextProvider>
    </div>
  );
};

export default Layout;
