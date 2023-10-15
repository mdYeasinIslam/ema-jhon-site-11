import React, { useState } from "react";
import { AiFillDelete } from "react-icons/ai";
const OrdersDetails = ({ order,orders, deleteItem }) => {
  // console.log(order);
  const { _id, img, customer, message, phone, price, serviceName, email } = order;
  return (
    <tr>
      <th>
        <label onClick={() => deleteItem(_id)}>
          <AiFillDelete className="w-6 h-6" />
        </label>
      </th>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={img} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
          <div>
            <div className="font-bold">{serviceName}</div>
            <div className="text-sm opacity-50">{phone}</div>
          </div>
        </div>
      </td>
      <td>
        <p>
          <span className="font-semibold"> {customer}</span>
          <br />
          <span className="badge badge-ghost badge-sm">{email}</span>
        </p>
      </td>
      <td>$ {price}</td>
    </tr>
  );
};

export default OrdersDetails;
