import { useContext, useEffect } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import Sidebar from "./components/sidebar/Sidebar";

function Dashboard() {
  const { admin } = useContext(AuthContext);
  const navigate = useNavigate();
  // console.log("admin: ", admin)
  useEffect(() => {
    if (!admin) {
      navigate("/login");
    }
  }, [admin]);
  return (
    <div className="flex">
      <Sidebar />
      <div className="px-8 pt-8">
        <h1 className="font-bold text-4xl text-center capitalize tracking-wide mb-2 text-zinc-800">Admin Dashboard</h1>
      </div>
    </div>
  );
}

export default Dashboard;
