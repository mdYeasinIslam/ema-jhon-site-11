import React from "react";
import Navbar from "../Pages/SharedPage/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../Pages/SharedPage/Footer/Footer";

const Main = () => {
  return ( 
    <div>
      <div className="absolute z-[1] w-full text-white">
        <Navbar />
      </div>
      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;
