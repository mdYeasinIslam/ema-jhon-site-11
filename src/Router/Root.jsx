import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Main from '../Layout/Main';
import Home from '../Pages/Home/Home';
import About from '../Pages/About/About';
import Services from '../Pages/Services/Services';
import Blog from '../Pages/Blog/Blog';
import Contact from '../Pages/Contact/Contact';
import Secondary from '../Layout/Secondary';
import SignUp from '../Pages/Auth/SignUp';
import LogIn from '../Pages/Auth/LogIn';

const Root = () => {
    const router = createBrowserRouter([
        {path:'/',element:<Main/> ,children:[
            {
                path:'/',
                element:<Home/>
            },
            {
                path:'/home',
                element:<Home/>
             },
           
        ]},
        {
         path:'/',element:<Secondary/>,children:[
            {
                path:'/services',
                element:<Services/>
            },
            {
                path:"/blog",
                element:<Blog/>
            },
            {
                path:'/contact',
                element:<Contact/>
            },
            {
                path:'about',
                element:<About/>
            },
            {
                path:'/signUp',
                element:<SignUp/>
            },
            {
                path:'/logIn',
                element:<LogIn/>
            }
         ]
        }
    ])
    return (
        <div>
            <RouterProvider router={router}></RouterProvider>
        </div>
    );
};

export default Root;