import React, { useState } from "react";
import logo from "../../assets/images/products/6.png";
import { toast } from "react-toastify";

const ProductIN = () => {
  const [product, setProduct] = useState({});

  const formHandler = (e) => {
    e.preventDefault();
    // console.log(product);
    fetch("http://localhost:3000/product", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(product),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data)
        toast("Wow! your product is added");
      });
    e.target.reset();
  };
  const inputHandler = (e) => {
    const form = e.target;
    const field = form.name;
    const value = form.value;
    const newProduct = { ...product };
    newProduct[field] = value;
    setProduct(newProduct);
    // console.log(form.value);
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content md:w-full mx-auto flex-col lg:flex-row-reverse">
        <div className="text-center ">
          <img className="w-[60%] mx-auto" src={logo} alt="" />
        </div>
        <div className="card flex-shrink-0 w-1/2 mx-auto max-w-sm shadow-2xl bg-base-100">
          <h1 className="text-4xl font-bold text-center">
            Add Product In your Site
          </h1>
          <form onSubmit={formHandler} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Product-Name</span>
              </label>
              <input
                onChange={inputHandler}
                type="text"
                placeholder="Product-Name"
                name="ProductName"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Price</span>
              </label>
              <input
                onChange={inputHandler}
                type="number"
                placeholder="Product-price"
                name="Price"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">
                  <strong>Img URL (Optional .! Must be Online URL)</strong> :
                </span>
              </label>
              <input
                onChange={inputHandler}
                type="url"
                placeholder="Product-Image URL (Optional)"
                name="img"
                className="input input-bordered"
              />
            </div>

            <div className="form-control mt-6">
              <button className="btn btn-primary">Add Product</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProductIN;
