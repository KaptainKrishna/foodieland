import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="w-full px-10 py-7 flex justify-between items-center border-b border-gray-400">
      <img src="./images/logo.png" alt="" />

      <div className="flex gap-10 font-medium">
        <Link to={"/"}>Home</Link>
        <Link to={"/recipes"}>Recipes</Link>
        <Link to={"/blog"}>Blog</Link>
        <Link to={"/contact"}>Contact</Link>
        <Link to={"/about-us"}>About us</Link>
      </div>
      <div className="space-x-5 text-xl">
        <i className="ri-facebook-fill"></i>
        <i className="ri-twitter-fill"></i>
        <i className="ri-instagram-fill"></i>
      </div>
    </div>
  );
};

export default Nav;
