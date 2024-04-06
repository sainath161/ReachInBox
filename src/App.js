import React from "react";
import SignUp from "./Pages/Signup";
import Signin from "./Components/Signin";
import { Routes, Route } from "react-router-dom";
import AllMail from "./Pages/AllMail";
import Home from "./Pages/Home";
import Login from "./Pages/Login";

function App() {
  return (
    <Routes>
      <Route path="/" element={<SignUp />} />
      <Route path="/signin" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/allmail" element={<AllMail />} />
      <Route path="/signin" element={<Signin />} />
    </Routes>
  );
}

export default App;
