import { Link, useNavigate } from "react-router-dom";
import "./navbar.module.css";
import { CgSearch } from "react-icons/cg";
import { useState } from "react";
import apiRequest from "../../lib/apiRequest";

function Navbar() {
  const navigate = useNavigate();
  const [searchInput, setSearchInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search/${searchInput}`);
    // location.reload()
    setSearchInput("");
  };
  return (
    <header>
      <nav className="bg-pinky w-full h-[15vh] flex my-auto justify-between items-center px-4 md:px-14 lg:px-40 shadow-md">
        <Link to={"/"} reloadDocument={true}>
          <img
            src="/logo.jpg"
            className="w-20 h-20 rounded-full drop-shadow-md hover:scale-110 transition-all"
          />
        </Link>
        <form onSubmit={handleSubmit}>
          <div className="w-[250px] md:w-[350px] flex items-center bg-white gap-4 h-fit py-2 px-4 rounded-full">
            <input
              type="text"
              placeholder="Search..."
              className="w-[90%] md:flex-1 text-sm md:text-base"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
            />
            <button
              type="submit"
              className="cursor-pointer transition-all p-2 pr-[10px] rounded-full flex justify-center items-center text-white bg-pinky hover:bg-darkPruple "
            >
              <CgSearch className="w-3 h-3 md:w-5 md:h-5 " />
            </button>
          </div>
        </form>
      </nav>
    </header>
  );
}

export default Navbar;
