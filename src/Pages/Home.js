import React, { useEffect } from "react";
import Sidebar from "../Components/SideBar";
import Header from "../Components/Header";
import mailImg from "../Assets/mail.png";
import mailImgWhite from "../Assets/mailWhite.png";
import { useParams } from "react-router-dom";
import { getEmailList, resetData, updateToken } from "../Redux/Action";
import { useDispatch, useSelector } from "react-redux";

const Home = () => {
  const dispatch = useDispatch();
  const allMailList = useSelector((store) => store.listMail);
  const { token: tokenParam } = useParams();

  useEffect(() => {
    const fetchEmailData = async () => {
      try {
        if (tokenParam !== "null" && tokenParam !== "") {
          localStorage.removeItem("token");
          localStorage.setItem("token", tokenParam);
        }

        const token = localStorage.getItem("token");
        const config = {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };

        if (allMailList.length === 0) {
          await dispatch(resetData(config));
        }

        dispatch(updateToken(tokenParam));
        dispatch(getEmailList(config));
      } catch (error) {
        alert("Server error! Unable to fetch email data.");
      }
    };

    fetchEmailData();
  }, [dispatch, tokenParam, allMailList.length]);

  const theme = useSelector((store) => store.theme);
  const bgColor = theme === "dark" ? "bg-black" : "bg-[#FFFFFF]";
  const textColor = theme === "dark" ? "text-white" : "text-black";

  return (
    <div className="flex">
      <Sidebar />
      <div className="w-full">
        <Header />
        <div
          className={`${bgColor} h-full w-full flex flex-col items-center ${textColor} -mt-16 pt-36`}
        >
          <img
            src={theme === "dark" ? mailImg : mailImgWhite}
            alt="mailimg"
            className="max-w-full max-h-full"
            style={{ width: "280px", height: "229px" }}
          />
          <h1 className="font-bold text-xl">
            It's the beginning of a legendary sales pipeline
          </h1>
          <br />
          <p>When you have inbound emails, you'll see them here.</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
