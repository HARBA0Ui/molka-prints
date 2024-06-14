import { AiFillSetting, AiFillSwitcher, AiOutlineLogout } from "react-icons/ai";
import { CgMathPlus } from "react-icons/cg";

import { Link } from "react-router-dom";
import LogoutBtn from "../../../../components/LogoutBtn";

import "./sidebar.module.css";

function Sidebar() {
  return (
    <div>
      <aside className="w-32 bg-pinky flex flex-col fixed top-[15vh] bottom-0 gap-4 pt-12 text-pinky text-sm">
        <ul className="flex flex-col gap-4 flex-1">
          <Link
            to={"/dashboard"} reloadDocument={true}
            className="flex gap-2 bg-white w-full items-center px-2 py-3"
          >
            <AiFillSwitcher className="w-6 h-6" /> <span>Dashboard</span>
          </Link>
          <Link
            to="/dashboard/create"
            className="flex gap-2 bg-white w-full items-center px-2 py-3"
          >
            <CgMathPlus className="w-6 h-6" /> <span>Create</span>
          </Link>
          <Link
            to={"/dashboard/settings"}
            className="flex gap-2 bg-white w-full items-center px-2 py-3"
          >
            <AiFillSetting className="w-6 h-6" /> <span>Settings</span>
          </Link>
        </ul>
        <LogoutBtn btnClassName="flex gap-2 bg-darkPruple text-white items-center px-2 py-3 sticky bottom-0 w-full">
          <AiOutlineLogout className="w-6 h-6" /> <span>Logout</span>
        </LogoutBtn>
      </aside>
    </div>
  );
}

export default Sidebar;
