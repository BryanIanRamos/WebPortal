import React from "react";
import { Icon } from "@iconify/react";

const Header = ({ title, description, showDate, sm }) => {
  return (
    <section className="h-[125px] bg-[#5A766A] rounded-[5px] p-5 relative mt-5">
      <div>
        <h1 className="text-white text-[23px] md:text-[25px] font-bold font-['Poppins']">
          {title}
        </h1>
        <p
          className={`text-white ${
            sm ? "mt-1 md:text-[16px]" : "text-[16px]"
          }  text-[16px] md:text-[22px] font-normal font-['Poppins']`}
        >
          {description}
        </p>
      </div>
      <div
        className={`absolute top-6 right-5 hidden md:flex flex-col gap-1 items-center 
        ${showDate ? "block" : "hidden"}`}
      >
        <div className="flex gap-1 items-center ">
          <Icon
            icon="mingcute:history-2-line"
            className=" text-white md:w-[28px] md:h-[28px]"
          />
          <p className="text-left text-white text-[13px] font-normal font-['Abyssinica SIL']">
            Account Created
          </p>
        </div>
        <p className="text-left text-white text-[13px] font-normal font-['Abyssinica SIL']">
          10/13/2024
        </p>
      </div>
    </section>
  );
};

export default Header;
