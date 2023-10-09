import React from "react";

const ServicesItem = ({ service }) => {
  const { title ,img,price} = service;
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-2xl">
      <figure className="w-full">
        <img
          src={img}
          alt="Shoes"
          className="w-full"
        />
      </figure>
      <div className="card-body ">
        <h2 className="card-title ">{title}</h2>
        <p className="text-xl text-orange-600 font-semibold">Price : ${price}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default ServicesItem;
