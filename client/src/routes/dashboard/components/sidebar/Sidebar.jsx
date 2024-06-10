import { AiFillSetting, AiFillSwitcher, AiOutlineLogout } from "react-icons/ai";

import { Link } from "react-router-dom";
import LogoutBtn from "../../../../components/LogoutBtn";

import "./sidebar.module.css";

function Sidebar() {
  return (
    <div>
      <aside className="w-32 bg-pinky flex flex-col h-screen gap-4 pt-12 text-pinky text-sm relative">
        <ul className="flex flex-col gap-4 flex-1">
          <Link
            to={"/dashboard"}
            className="flex gap-2 bg-white w-full items-center px-2 py-3"
          >
            <AiFillSwitcher className="w-6 h-6" /> <span>Dashboard</span>
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
