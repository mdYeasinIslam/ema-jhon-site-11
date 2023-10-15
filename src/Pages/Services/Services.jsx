import React, { useEffect, useState } from "react";
import ServicesItem from "./ServicesItem";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch(
      "https://genius-car-server-gs9xl9af4-mdyeasinislam.vercel.app/service"
    )
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div className="my-5">
      <div className="text-center ">
        <p className="text-xl text-orange-600 font-semibold">Services</p>
        <h1 className="font-semibold">Our Service Area</h1>
        <p className="md:w-2/4 m-auto">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. At culpa
          voluptas laborum maiores esse? Est dolorum rem aliquam doloremque
          reiciendis.
        </p>
      </div>
      <div className="grid  md:grid-cols-2 mx-auto  lg:grid-cols-3 my-4 gap-y-5">
        {services.map((service) => (
          <ServicesItem key={service._id} service={service} />
        ))}
      </div>
    </div>
  );
};

export default Services;
