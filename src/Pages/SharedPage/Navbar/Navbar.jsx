import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/logo.svg";
import "./Navbar.css";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";
import { BiSearchAlt2 } from "react-icons/bi";
import { AuthContext } from "../../../Context/AuthProvider";
import { toast } from "react-toastify";
const Navbar = () => {
  const [show, setShow] = useState(false);
  const { user, logOut } = useContext(AuthContext);
  const signOut = () => {
    logOut()
      .then(() => {
        toast("SingOut successfully");
      })
      .catch((e) => console.error(e));
  };
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
      <Link to="/product-In">
        <li>Add-Product</li>
      </Link>
      <Link to="/product-out">
        <li>Display-Product</li>
      </Link>
      <Link to="/order">
        <li>Orders</li>
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
          <ul
            onClick={() => setShow(false)}
            className={`menu menu-sm dropdown-content  z-[1] p-2 shadow bg-base-100 text-black  rounded-box w-52 lg:hidden font-semibold absolute  ${
              show ? "w-full  md:w-1/2 lg:w-2/4 md:top-14 " : "left-[-320px] "
            }`}
          >
            {manuIcon}
            {user?.email ? (
          <Link onClick={signOut} to="/logIn" className="font-semibold">
            Log Out
          </Link>
        ) : (
          <>
            <Link to="signUp" className="  ">
              Sign Up
            </Link>
            <Link to="logIn" className="  ">
              Log In
            </Link>
          </>
        )}
          </ul>
        </div>
        <Link to="/home" className="w-12 md:w-16 lg:w-20">
          <img src={logo} alt="" />
        </Link>
      </div>

      <div className="navbar-center hidden  lg:flex">
        <ul className="menu menu-horizontal navIcon  gap-10 text-xl font-semibold">
          {manuIcon}
        </ul>
      </div>
      <div className="navbar-end gap-3">
        <BiSearchAlt2 className=" md:w-6 md:h-6" />
        {user?.email ? (
          <Link onClick={signOut} to="/logIn" className="font-semibold">
            Log Out
          </Link>
        ) : (
          <div className="flex gap-3 font-semibold">
            <Link to="signUp" className="  ">
              Sign Up
            </Link>
            <Link to="logIn" className="  ">
              Log In
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
