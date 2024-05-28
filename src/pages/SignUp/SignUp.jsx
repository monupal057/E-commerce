import React, { useState } from "react";
import login from "../../assets/login.png";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../../FirebaseAuth/FirebaseAuth";

const SignUp = () => {

 const navigateLogin =  useNavigate();

  const [UserSignUp, SetUserSignup] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    SetUserSignup({ ...UserSignUp, [e.target.name]: e.target.value });
  };

  const handleSumbit = (e) => {
    e.preventDefault();

    if (!UserSignUp.username || !UserSignUp.email || !UserSignUp.password) {
      return toast.error("All fields are required");
    } else {

      createUserWithEmailAndPassword(
        auth,
        UserSignUp.email,
        UserSignUp.password
      )
        .then(async(res) =>{
          const user = res.user

         await updateProfile(user,{
            displayName:UserSignUp.username
          });

           navigateLogin("/login")

        })
        .catch((err) => toast.error(err.message));
    }
  };

  return (
    <>
      <div className="relative">
        <img
          src={login}
          alt=""
          className=" object-cover w-full object-center h-[200px] mt-5"
        />
        <div className="w-full h-[200px] bg-black absolute top-0 left-0 opacity-[.4]"></div>
        <h2 className=" absolute top-[40%] left-[10%] text-white font-semibold  text-3xl md:text-5xl">
          Sign Up
        </h2>
      </div>

      <div className="container px-5 py-14 mx-auto flex ">
        <div className=" mx-auto bg-red-500 rounded-lg p-8 flex flex-col mt-8 md:mt-0  shadow-md text-white w-[500px]">
          <h2 className="text-white text-4xl mb-5 font-medium title-font">
            Sign Up
          </h2>

          <div className="relative mb-4">
            <label className="leading-7 text-sm">Name</label>
            <input
              autoComplete="off"
              type="text"
              name="username"
              value={UserSignUp.username}
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              onChange={handleChange}
            />
          </div>

          <div className="relative mb-4">
            <label className="leading-7 text-sm">Email</label>
            <input
              autoComplete="off"
              type="email"
              name="email"
              value={UserSignUp.email}
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              onChange={handleChange}
            />
          </div>
          <div className="relative mb-4">
            <label className="leading-7 text-sm ">Password</label>
            <input
              autoComplete="off"
              type="password"
              name="password"
              value={UserSignUp.password}
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              onChange={handleChange}
            />
          </div>
          <button
            className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
            onClick={handleSumbit}
          >
            Sign up
          </button>
          <p className="text-xs text-white mt-5">
            DO you have an account?
            <Link to="/login">
              <button className=" cursor-pointer hover:text-blue-300 ">
                Login
              </button>
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default SignUp;
