import { Link } from "react-router-dom";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-2 left-0 right-0 bg-white bg-opacity-70 shadow-lg z-50 border-b border-gray-200">
      <div className="container mx-auto px-6 flex justify-between items-center h-16">
        {/* Logo */}
        <h3 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-400">
          Travel
        </h3>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-8 text-xl text-gray-700 font-semibold">
          <NavLinks />
        </div>

        {/* Mobile Icon */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Links */}
      {isOpen && (
        <div className="md:hidden bg-white px-6 pb-4 shadow-lg rounded-b-lg">
          <div className="flex flex-col gap-4 text-lg font-semibold text-gray-700">
            <NavLinks />
          </div>
        </div>
      )}
    </nav>
  );
};

// Reusable navigation links component
const NavLinks = () => (
  <>
    <Link
      to="/"
      className="hover:text-blue-600 relative after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-blue-600 after:left-0 after:-bottom-1 hover:after:w-full after:transition-all after:duration-300"
    >
      Home
    </Link>
    <Link
      to="/gallery"
      className="hover:text-blue-600 relative after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-blue-600 after:left-0 after:-bottom-1 hover:after:w-full after:transition-all after:duration-300"
    >
      Gallery
    </Link>
    <Link
      to="/contact"
      className="hover:text-blue-600 relative after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-blue-600 after:left-0 after:-bottom-1 hover:after:w-full after:transition-all after:duration-300"
    >
      Contact
    </Link>
    <Link
      to="/about"
      className="hover:text-blue-600 relative after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-blue-600 after:left-0 after:-bottom-1 hover:after:w-full after:transition-all after:duration-300"
    >
      About
    </Link>
    <Link
      to="/login"
      className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-4 py-2 rounded-md shadow hover:text-blue-600 transition duration-300 text-center"
    >
      Login
    </Link>
  </>
);

export default Navbar;
