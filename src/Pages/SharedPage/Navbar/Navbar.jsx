import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/logo.svg";
import "./Navbar.css";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";
import { BiSearchAlt2 } from "react-icons/bi";
const Navbar = () => {
  const [show, setShow] = useState(false);
  const manuIcon = (
    <>
      <Link to="/home">
        <li>Home</li>
      </Link>
      <Link to="/about">
        <li>About</li>
      </Link>
      <Link to="/services">
        <li>Services</li>
      </Link>
      <Link to="/blog">
        <li>Blog</li>
      </Link>
      <Link to="/contact">
        <li>Contact</li>
      </Link>
    </>
  );
  return (
    <div className="navbar  ">
      <div className="navbar-start">
        <div className="">
          <div onClick={() => setShow(!show)} className=" lg:hidden w-6 h-6 ">
            {show ? <RxCross2 /> : <AiOutlineMenuUnfold />}
          </div>
          <ul onClick={()=>setShow(false)}
            className={`menu menu-sm dropdown-content  z-[1] p-2 shadow bg-base-100 text-black text-xl rounded-box w-52 lg:hidden font-bold absolute ${
              show ? "w-full  md:w-1/2 lg:w-2/4 md:top-14 " : "left-[-320px] "
            }`}
          >
            {manuIcon}
          </ul>
        </div>
        <Link to="/home" className="w-12 md:w-16 lg:w-20">
          <img src={logo} alt="" />
        </Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-10 text-xl font-semibold">
          {manuIcon}
        </ul>
      </div>
      <div className="navbar-end">
        <BiSearchAlt2 className="w-6 h-6" />
        <Link to='signUp' className="btn btn-sm ">Sign Up</Link>
        <Link to='logIn' className="btn btn-sm ">Log In</Link>
      </div>
    </div>
  );
};

export default Navbar;
