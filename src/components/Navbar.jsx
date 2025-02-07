import Themebtn from "./Themebtn";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="dark">
      <header className="w-full bg-white drop-shadow-md ">
        <div className="flex justify-between items-center text-black py-6 px-8">
          <div className="flex-grow-0">
            <a href="/" className="text-xl font-bold">
              VITGARA
            </a>
          </div>
          <ul className="hidden xl:flex items-center gap-12 font-semibold text-base">
            <li>
              <Themebtn />
            </li>
            <li className="p-2 hover:bg-sky-400 hover:text-white rounded-md transition-all cursor-pointer">
              <Link to="/fav">Wishlist</Link>
            </li>
            <li className="p-2 hover:bg-sky-400 hover:text-white rounded-md transition-all cursor-pointer">
              <Link to="/">Home</Link>
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
}

export default Navbar;
