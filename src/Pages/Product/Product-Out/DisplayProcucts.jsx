import React, { useEffect, useState } from "react";
import Product from "./Product";

const DisplayProducts = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/product")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setProducts(data);
      });
  }, []);
  const filterProduct = (id) => {
    // console.log(id);
    const filter = products.filter(pro => pro._id !== id)
    setProducts(filter)
  };
  return (
    <div className="grid grid-cols-3">
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
