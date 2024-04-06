import React from "react";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

const Signin = () => {
  return (
    <div className="border border-gray-700 w-[460px] rounded-xl h-[312px] flex flex-col items-center text-white bg-gray-850">
      <div className=" flex flex-col py-6 justify-center items-center">
        <h3 className="text-xl pb-4 ">Login to your account</h3>
        <Link
          className="pt-7"
          to={
            "https://hiring.reachinbox.xyz/api/v1/auth/google-login?redirect_to=https://reachinbox-umesh.netlify.app/home"
          }
        >
          <button className="py-3 px-20 flex justify-center items-center text-base rounded-md bg-gray-500 hover:bg-gray-600">
            <FcGoogle className="text-2xl" />{" "}
            <span className="ml-2">Login with Google</span>
          </button>
        </Link>
      </div>
      <div className="pt-7">
        <Link to="/signin">
          {" "}
          {/* Update this line to navigate to the sign-up page */}
          <button className="transition duration-500 ease-in-out bg-gradient-to-r from-blue-500 rounded to-blue-800 hover:to-red-500 text-white w-48 py-3 px-6">
            Create an Account
          </button>
        </Link>
      </div>
      <div className="flex pt-7 pb-5">
        <p className="text-gray-500">Don't have an account?</p>
        <Link to="/">
          {" "}
          {/* Update this line to navigate to the sign-in page */}
          <button className="ml-1 text-gray-400 hover:text-white">
            Sign Up
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Signin;
