import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaCartPlus, FaRegUserCircle } from "react-icons/fa";
import { CartContext } from "../../provider/CartProvider";

const Navbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
   const { cartData } = useContext(CartContext);
    

  const navItems = (
    <>
    <Link
        to="/"
        className={`block px-3 py-2 rounded-md text-sm font-medium ${
          location.pathname === "/"
            ? "bg-yellow-300 text-black"
            : "text-gray-100 hover:text-yellow-500"
        }`}
        aria-label="User Login"
      >
        Home
    </Link>
      <Link
        to="/shop"
        className={`block px-3 py-2 rounded-md text-sm font-medium ${
          location.pathname === "/shop"
            ? "bg-yellow-300 text-black"
            : "text-gray-100 hover:text-yellow-500"
        }`}
        aria-label="User Login"
      >
        Shop
      </Link>
      <Link
        to="/admin/login"
        className={`block px-3 py-2 rounded-md text-sm font-medium ${
          location.pathname === "/admin/login"
            ? "bg-yellow-300 text-black"
            : "text-gray-100 hover:text-yellow-500"
        }`}
        aria-label="User Login"
      >
        <FaRegUserCircle size={20} />
      </Link>
      <Link
        to="/cart"
        className={`block px-3 py-2 rounded-md text-sm font-medium ${
          location.pathname === "/cart"
            ? "bg-yellow-300 text-black"
            : "text-gray-100 hover:text-yellow-500"
        }`}
        aria-label="Cart"
      >
        <div className="relative inline-block">
          <FaCartPlus size={24} />
          {cartData.length > 0 && (
            <span className="absolute -top-3 -right-3 bg-white text-red-600 text-xs font-bold px-1.5 py-0.5 rounded-full">
              {cartData.length}
            </span>
          )}
        </div>
      </Link>
    </>
  );

  return (
    <nav className="bg-green-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/">
              <span className="font-bold text-2xl text-white">MAK</span>
              <span className="font-extrabold text-yellow-300">Fashion</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-4">{navItems}</div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              aria-label="Toggle menu"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-100 hover:text-black hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-green-600 focus:ring-white"
            >
              {!isOpen ? (
                <svg
                  className="block h-6 w-6"
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
              ) : (
                <svg
                  className="block h-6 w-6"
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
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-2 pt-2 pb-3 space-y-1 bg-green-600">
          {navItems}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
