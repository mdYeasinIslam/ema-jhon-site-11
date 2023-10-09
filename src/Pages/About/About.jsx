import React from "react";
import person from "../../assets/images/about_us/person.jpg";
import parts from "../../assets/images/about_us/parts.jpg";
const About = () => {
  return (
    <div className="hero lg:min-h-[80vh] bg-base-200">
      <div className=" hero-content flex-col md:flex-row">
     
        <div className="relative md:w-1/2">
          <img src={person} className=" w-3/4 m-auto md:w-2/3 rounded-lg shadow-2xl" />
          <img src={parts} className="absolute right-3 md:right-[20%] top-2/4 w-2/4 rounded-lg shadow-2xl" />
        </div>
        <div className=" md:w-1/2 ">
        <p className="text-xl font-bold text-orange-500">About us</p>
          <h1 className=" lg:text-5xl font-bold md:w-[69%]">We are qualified & of experience in this field</h1>
          <p className="py-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt nostrum totam iure architecto fugit aspernatur excepturi molestias expedita tempore aliquid?
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default About;
