import React, { useState } from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full border-b border-gray-400">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-5 py-5 md:px-10">
        <img src="./images/logo.png" alt="logo" className="w-32 md:w-auto" />

        <div className="hidden md:flex items-center gap-10 font-medium">
          <Link to="/">Home</Link>
          <Link to="/recipes">Recipes</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/about-us">About Us</Link>
        </div>

        <div className="hidden md:flex gap-5 text-xl">
          <i className="ri-facebook-fill cursor-pointer hover:text-blue-600"></i>
          <i className="ri-twitter-fill cursor-pointer hover:text-sky-500"></i>
          <i className="ri-instagram-fill cursor-pointer hover:text-pink-500"></i>
        </div>

        <button
          className="md:hidden text-3xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <i className={menuOpen ? "ri-close-line" : "ri-menu-line"}></i>
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden flex flex-col items-center gap-5 py-5 border-t border-gray-300 font-semibold ">
          <Link to="/" onClick={() => setMenuOpen(false)}>
            Home
          </Link>
          <Link to="/recipes" onClick={() => setMenuOpen(false)}>
            Recipes
          </Link>
          <Link to="/blog" onClick={() => setMenuOpen(false)}>
            Blog
          </Link>
          <Link to="/contact" onClick={() => setMenuOpen(false)}>
            Contact
          </Link>
          <Link to="/about-us" onClick={() => setMenuOpen(false)}>
            About Us
          </Link>

          <div className="flex gap-6 text-xl pt-2">
            <i className="ri-facebook-fill"></i>
            <i className="ri-twitter-fill"></i>
            <i className="ri-instagram-fill"></i>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Nav;
