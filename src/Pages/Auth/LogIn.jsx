import React, { useContext } from "react";
import logo from "../../assets/images/login/login.svg";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";


const LogIn = () => {
    const {logInAuth} = useContext(AuthContext)
    const inputHandler = e=>{
        e.preventDefault()
        const form = e.target
        const email = form.email.value 
        const  password = form.password.value
        console.log(email,password)
        logIn(email,password)
        form.reset()
    }
    const logIn = (email,password) =>{
        logInAuth(email,password)
        .then(result =>{
            const user = result.user
            console.log(user)
        })
        .catch(e =>console.error(e))
    }
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content md:w-full mx-auto flex-col lg:flex-row-reverse">
        <div className="text-center ">
          <img className="w-[90%]" src={logo} alt="" />
        </div>
        <div className="card flex-shrink-0 w-1/2 mx-auto max-w-sm shadow-2xl bg-base-100">
          <h1 className="text-5xl font-bold text-center">Login now!</h1>
          <form onSubmit={inputHandler} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                name="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
            
                type="password"
                placeholder="password"
                name="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
         <p>Don't have any account <Link to='/signUp'>Please Create An Account</Link></p>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
