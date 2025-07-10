
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaCartPlus } from "react-icons/fa";
import { FaRegUserCircle } from "react-icons/fa";


 const Navbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navItem = (
    <>
        <Link
        to="/"
        className={`text-black hover:text-yellow-500 px-3 py-2 rounded-md text-sm font-medium ${
          location.pathname === "/"
            ? "bg-yellow-300 text-black"
            : "text-gray-100"
        }`}
      >
        Kids
      </Link>
      <Link
        to="/product"
        className={`text-black hover:text-yellow-500 px-3 py-2 rounded-md text-sm font-medium ${
          location.pathname === "/product"
            ? "bg-yellow-300 text-black"
            : "text-gray-100"
        }`}
      >
        Mens
      </Link>
      <Link
        to="/women"
        className={`text-black hover:text-yellow-500 px-3 py-2 rounded-md text-sm font-medium ${
          location.pathname === "/women"
            ? "bg-yellow-300 text-black"
            : "text-gray-100"
        }`}
      >
        Women
      </Link>
      <Link
        to="/admin/login"
        className={`text-black rounded-md text-sm font-medium ${
          location.pathname === "/admin/login"
            ? "bg-yellow-300 text-black p-2"
            : "text-gray-100"
        }`}
      >
        
      <FaRegUserCircle />
      </Link>
      <Link
        to="/cart"
        className={`text-black rounded-md text-sm font-medium ${
          location.pathname === "/cart"
            ? "bg-yellow-300 text-black p-2"
            : "text-gray-100"
        }`}
      >
         <FaCartPlus  />
      </Link>
    </>
  );
  return (
 
      <nav className=" bg-green-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex">
              <Link to="/">
                <span className="font-bold text-2xl text-white">MAKBUL </span>
                <span className="font-extrabold text-yellow-300">
                   AGRO
                </span>

              </Link>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {navItem}
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={toggleMenu}
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-black hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-black transition duration-150 ease-in-out"
              >
                <svg
                  className={`${isOpen ? "hidden" : "block"} h-6 w-6`}
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
                <svg
                  className={`${isOpen ? "block" : "hidden"} h-6 w-6`}
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className={`${isOpen ? "block" : "hidden"} md:hidden`}>
            <div className="px-2 pt-2 pb-3 sm:px-3">{navItem}</div>
          </div>
        </div>
      </nav>

  );
};

export default Navbar;