import React from "react";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
const Product = ({ product, filterProduct }) => {
  const { _id, ProductName, Price, img } = product;
  const delteItem = (id) => {
    fetch(
      `https://genius-car-server-gs9xl9af4-mdyeasinislam.vercel.app/product/${id}`,
      {
        method: "DELETE",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (data.acknowledged) {
          filterProduct(id);
          toast("Your Delete operation is done.");
        }
      });
  };
  return (
    <div className="card card-compact displayProduct border-2 w-[90%]  mx-auto bg-base-100 shadow-xl">
      <figure>
        <img
          className="rounded-xl w-full h-[12rem]"
          src={img}
          alt={ProductName}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Product-Name: {ProductName}</h2>
        <p className="text-xl font-semibold text-orange-600">Price: ${Price}</p>
        <div className="card-actions justify-end">
          <Link to={`/update/${_id}`}>
            <button className="btn btn-primary">Edit</button>
          </Link>
          <button onClick={() => delteItem(_id)} className="btn btn-primary">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
