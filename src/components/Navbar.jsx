import Themebtn from "./Themebtn";
import { Link } from "react-router-dom";
import { ThemeProvider, useTheme } from "../context/ThemeContext";

function Navbar() {
  const { isDarkMode } = useTheme();
  return (
    <div className={`${isDarkMode && "dark"}`}>
      <header className="w-full bg-white drop-shadow-md fixed top-0 left-0 right-0 z-10 dark:bg-gray-800">
        <div className="flex justify-between items-center text-black py-6 px-8 dark:text-white">
          <div className="flex-grow-0">
            <Link to="/" className="text-xl font-bold">
              <img
                src="https://vitraga.com/Logo.svg"
                alt="VITGARA"
                className="h-10 w-40"
              />
            </Link>
          </div>
          <ul className="hidden xl:flex items-center gap-12 font-semibold text-base dark:text-white">
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
