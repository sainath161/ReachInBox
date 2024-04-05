import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { useSelector } from "react-redux";

const OneBoxSidebar = () => {
  const theme = useSelector((store) => store.theme);
  const isDarkTheme = theme === "dark";
  const bgColor = isDarkTheme ? "bg-[#23272C]" : "bg-[#ECEFF3]";
  const textColor = isDarkTheme ? "text-white" : "text-[#454F5B]";
  const leadText = isDarkTheme ? "text-white" : "text-[#637381]";
  const leadTextRight = isDarkTheme ? "text-[#B9B9B9]" : "text-black";
  const circleBg = isDarkTheme ? "bg-gray-500" : "bg-[#DFE3E8]";

  return (
    <div className={`bg-${isDarkTheme ? "black" : "white"}`}>
      <div
        className={`${bgColor} p-2 pr-10 ${textColor} rounded-lg m-1 mt-4 text-l font-semibold`}
      >
        Lead Details
      </div>
      <div className="m-5 mb-11">
        <LeadDetail
          title="Name"
          value="Orlando"
          leadText={leadText}
          leadTextRight={leadTextRight}
        />
        <LeadDetail
          title="Contact No"
          value="+54-9062827869"
          leadText={leadText}
          leadTextRight={leadTextRight}
        />
        <LeadDetail
          title="Email ID"
          value="orlando@gmail.com"
          leadText={leadText}
          leadTextRight={leadTextRight}
        />
        <LeadDetail
          title="Linkedin"
          value="linkedin.com/in/ timvadde/"
          leadText={leadText}
          leadTextRight={leadTextRight}
        />
        <LeadDetail
          title="Company Name"
          value="Reachinbox"
          leadText={leadText}
          leadTextRight={leadTextRight}
        />
      </div>
      <div
        className={`${bgColor} p-2 pr-10 ${textColor} p-2 pr-10 rounded-lg m-1 mt-4 text-l font-semibold`}
      >
        Activities
      </div>
      <div className={`p-5 m-5 mb-1 ${textColor}`}>
        <ActivityDetail
          title="Campaign Name"
          value="3 Steps | 5 Days in Sequence"
        />
      </div>
      <div className="flex flex-col items-left m-5 mt-2 pl-5">
        <EmailStep
          icon={<MdOutlineEmail size={20} />}
          stepNumber="1"
          text="Send 3rd, Feb"
          circleBg={circleBg}
          textColor={textColor}
        />
        <EmailStep
          icon={<MdOutlineEmail size={20} />}
          stepNumber="2"
          text="Open 5th, Feb"
          circleBg={circleBg}
          textColor={textColor}
        />
        <EmailStep
          icon={<MdOutlineEmail size={20} />}
          stepNumber="3"
          text="Open 5th, Feb"
          circleBg={circleBg}
          textColor={textColor}
        />
      </div>
    </div>
  );
};

const LeadDetail = ({ title, value, leadText, leadTextRight }) => (
  <div className={`flex justify-between ${leadText} mt-5`}>
    <p>{title}</p>
    <p className={`${leadTextRight}`}>{value}</p>
  </div>
);

const ActivityDetail = ({ title, value }) => (
  <>
    <p className="text-l font-semibold">{title}</p>
    <p className="mt-4">{value}</p>
  </>
);

const EmailStep = ({ icon, stepNumber, text, circleBg, textColor }) => (
  <div className={`flex ${textColor}`}>
    <div className="flex">
      <div className="flex flex-col items-center justify-center">
        <div
          className={`w-12 h-12 ${circleBg} border rounded-full flex items-center justify-center`}
        >
          {icon}
        </div>
        <div className={`h-14 w-1 flex ${circleBg}`}></div>
      </div>
      <p className={`ml-3 ${textColor} font-xl`}>
        Step {stepNumber}: Email <br />
        <span className="flex">{text}</span>
      </p>
    </div>
  </div>
);

export default OneBoxSidebar;
