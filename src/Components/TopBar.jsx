import React from "react";
import { Icon } from "@iconify/react";

const TopBar = () => {
  return (
    <>
      <div className="w-full h-fit grid grid-cols-2 shadow ">
        <div className="w-full h-[50px] px-10 bg-white  flex gap-2 items-center">
          <Icon
            icon="iconamoon:profile-circle-fill"
            className=" text-gray-400 w-[30px] h-[30px]"
          />
          <p className=" text-center text-stone-500 max-sm:text-[12px] text-base font-normal font-['Poppins']">
            James Domingo
          </p>
        </div>

        <div className="w-full h-[50px] px-10 bg-white  flex gap-2 justify-end items-center cursor-pointer">
          <Icon
            icon="solar:settings-bold-duotone"
            className=" text-[#5A766A] w-[30px] h-[30px]"
          />
        </div>
      </div>
    </>
  );
};

export default TopBar;
