import { Link } from "react-router-dom";
import "./navbar.module.css"

function Navbar() {
  return (
    <header className="text-white pb-[15vh] ">
      <nav className="fixed bg-pinky w-full h-[15vh] flex my-auto justify-between items-center px-8 md:px-14 lg:px-40 shadow-md">
        <Link to={"/"}>
          <img src="/logo.jpg" className="w-16 h-16 rounded-full drop-shadow-md hover:scale-110 transition-all"/>
        </Link>
        <ul className="flex gap-8 sm:gap-28"> 
            <li><a href="#">test 1</a></li>
            <li><a href="#">test 2</a></li>
            <li><a href="#">test 3</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
