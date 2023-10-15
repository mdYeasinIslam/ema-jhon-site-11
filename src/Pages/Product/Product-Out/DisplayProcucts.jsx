import React, { useEffect, useState } from "react";
import Product from "./Product";
import "./Product.css";
const DisplayProducts = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch(
      "https://genius-car-server-gs9xl9af4-mdyeasinislam.vercel.app/product"
    )
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setProducts(data);
      });
  }, []);
  const filterProduct = (id) => {
    // console.log(id);
    const filter = products.filter((pro) => pro._id !== id);
    setProducts(filter);
  };
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3">
      {products.map((product) => (
        <Product
          key={product._id}
          product={product}
          filterProduct={filterProduct}
        />
      ))}
    </div>
  );
};

export default DisplayProducts;
