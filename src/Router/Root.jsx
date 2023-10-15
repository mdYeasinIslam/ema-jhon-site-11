import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Services from "../Pages/Services/Services";
import Contact from "../Pages/Contact/Contact";
import Secondary from "../Layout/Secondary";
import SignUp from "../Pages/Auth/SignUp";
import LogIn from "../Pages/Auth/LogIn";
import ProductIN from "../Pages/Product/ProductIN";
import ExtraLayout from "../Layout/ExtraLayout";
import DisplayProducts from "../Pages/Product/Product-Out/DisplayProcucts";
import Update from "../Pages/Product/Update/Update";
import CheckOut from "../Pages/Services/ChackOut/CheckOut";
import Orders from "../Pages/Order/Orders";
import PrivateRoot from "./PrivateRoot";

const Root = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/home",
          element: <Home />,
        },
      ],
    },
    {
      path: "/",
      element: <Secondary />,
      children: [
        {
          path: "/services",
          element: <Services />,
        },

        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "about",
          element: <About />,
        },
      ],
    },
    {
      path: "/",
      element: <ExtraLayout />,
      children: [
        {
          path: "/product-In",
          element: <ProductIN />,
        },
        {
          path: "/product-Out",
          element: <DisplayProducts />,
        },
        {
          path: "/update/:id",
          element: <Update />,
          loader: ({ params }) =>
            fetch(
              `https://genius-car-server-gs9xl9af4-mdyeasinislam.vercel.app/product/${params.id}`
            ),
        },
        {
          path: "/checkOut/:id",
          element: (
            <PrivateRoot>
              <CheckOut />
            </PrivateRoot>
          ),
          loader: ({ params }) =>
            fetch(
              `https://genius-car-server-gs9xl9af4-mdyeasinislam.vercel.app/service/${params.id}`
            ),
        },
        {
          path: "/order",
          element: (
            <PrivateRoot>
              <Orders />
            </PrivateRoot>
          ),
        },
        {
          path: "/signUp",
          element: <SignUp />,
        },
        {
          path: "/logIn",
          element: <LogIn />,
        },
      ],
    },
  ]);
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
};

export default Root;
