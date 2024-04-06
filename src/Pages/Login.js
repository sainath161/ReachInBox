import React from "react";
import Signin from "../Components/Signin";
import Logo from "../Assets/Logo.svg";

const Login = () => {
  return (
    <div className="bg-[#25262b] h-screen flex flex-col">
      <div className="w-full h-16 flex justify-center items-center border-b border-gray-700">
        <img src={Logo} alt="Logo" />
      </div>
      <div className="flex justify-center items-center flex-grow">
        <Signin />
      </div>
      <div className="w-full h-8 flex justify-center items-center border-t border-gray-700 bg-[#25262b]">
        <p className="text-gray-600">
          &copy; 2023 Reachinbox, All rights reserved
        </p>
      </div>
    </div>
  );
};

export default Login;
