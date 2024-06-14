import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import AuthContextProvider from "../context/AuthContext";

const Layout = () => {

  const isHomeRotue= location.pathname === "/"
  return (
    <AuthContextProvider>
      <div className="flex flex-col min-h-screen">
        {!isHomeRotue && <Navbar />}
        <div className="flex-1">
          <Outlet />
        </div>
      </div>
    </AuthContextProvider>
  );
};

export default Layout;
