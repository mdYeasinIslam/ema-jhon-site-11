import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../../Context/AuthProvider";
import { toast } from "react-toastify";

const CheckOut = () => {
  const { _id, title, price } = useLoaderData();
  const { user } = useContext(AuthContext);
  const formHandler = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = `${form.firstName.value} ${form.lastName.value}`;
    const phone = form.phone.value;
    const email = form.email.value;
    const message = form.message.value;
    const orderInfo = {
      service: _id,
      serviceName: title,
      price,
      customer: name,
      phone,
      email,
      message,
    };
    fetch("http://localhost:3000/order", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(orderInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          toast("Wow ! your order is saved");
        }
      });
  };
  return (
    <div className="">
      <form onSubmit={formHandler} className="w-[80%] mx-auto ">
        <div className="grid grid-cols-2 gap-4">
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            className="input input-bordered input-primary w-full mx-auto  "
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            className="input input-bordered input-primary w-full mx-auto "
          />
          <input
            type="text"
            name="phone"
            placeholder="Your Phone Number"
            className="input input-bordered input-primary w-full mx-auto "
          />
          <input
            type="text"
            name="email"
            placeholder="Your Email"
            value={user.email}
            className="input input-bordered input-primary w-full mx-auto "
            readOnly
          />
           <input
          name="message"
          className="textarea textarea-primary w-full h-32"
          placeholder="Message"
        />
        </div>

       

        <input
          className="btn btn-primary w-full "
          type="submit"
          value="Order Confirm"
        />
      </form>
    </div>
  );
};

export default CheckOut;
