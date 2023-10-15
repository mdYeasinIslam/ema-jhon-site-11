import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Context/AuthProvider";
import OrdersDetails from "./OrdersDetails";
import { toast } from "react-toastify";
import DisplayProducts from "../Product/Product-Out/DisplayProcucts";

const Orders = () => {
  const { user, logOut } = useContext(AuthContext);
  const [orders, setOrders] = useState([]);

  // console.log(orders)
  //jwt
  useEffect(() => {
    fetch(
      `https://genius-car-server-gs9xl9af4-mdyeasinislam.vercel.app/order/?email=${user?.email}`,
      {
        headers: {
          authorization: `Bearer ${localStorage.getItem("jwt-token")}`,
        },
      }
    )
      .then((res) => {
        if (res.status == 401 || res.status == 403) {
          return logOut();
        }
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setOrders(data);
      });
  }, [user?.email]);
  //------------------------------------

  const deleteItem = (id) => {
    fetch(
      `https://genius-car-server-gs9xl9af4-mdyeasinislam.vercel.app/order/${id}`,
      {
        method: "DELETE",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (data.acknowledged) {
          const remaining = orders.filter((ord) => ord._id != id);
          setOrders(remaining);
          toast("Order delete successfully");
        }
      });
  };
  let totalPrice = 0;
  const price = orders.map((current) =>
    parseInt((totalPrice += JSON.parse(current.price)), totalPrice)
  );
  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th></th>
            <th>ServiceName</th>
            <th>Customer</th>
            <th>Price</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {/* row */}
          {orders.map((order) => (
            <OrdersDetails
              key={order._id}
              order={order}
              orders={orders}
              deleteItem={deleteItem}
            />
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td> Total:${totalPrice} </td>
          </tr>
        </tfoot>
      </table>
      <hr />
    </div>
  );
};

export default Orders;
