import React from "react";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

const SideNavBar = () => {
  return (
    <>
      <div className="h-screen w-[70px] md:w-[262px] bg-zinc-100 shadow">
        <div className="h-full w-full my-8 px-4 md:px-10 flex flex-col gap-[30%]">
          {/* Top Menu  */}
          <div className="flex flex-col justify-center">
            {/* Trade Mark  */}
            <div className="left-[30px] top-[10px] flex justify-center items-center">
              <Icon
                icon="mdi:semantic-web"
                className=" text-[#5A766A] w-[64px] h-[64px]"
              />
              <h1 className=" text-2xl font-bold font-['Poppins'] hidden md:block">
                Web<span className="text-[#5A766A]">Portal</span>
              </h1>
            </div>
            <hr className="my-5 border border-neutral-500" />
            <div className="flex flex-col gap-3 max-md:justify-center max-md:items-center">
              <Link to="/Home">
                <div className="flex gap-4 text-black hover:underline items-center hover:text-neutral-500 cursor-pointer">
                  <Icon
                    icon="ic:round-home"
                    className=" text-[#5A766A] w-[29px] h-[29px]"
                  />
                  <p className=" text-base font-medium hidden md:block font-['Poppins']">
                    Home
                  </p>
                </div>
              </Link>

              <Link to="/Files">
                <div className="flex gap-4 text-black hover:underline items-center hover:text-neutral-500 cursor-pointer ">
                  <Icon
                    icon="solar:folder-with-files-bold"
                    className=" text-[#5A766A] w-[29px] h-[29px]"
                  />
                  <p className=" text-base font-medium hidden md:block font-['Poppins']">
                    Files
                  </p>
                </div>
              </Link>

              <Link to="/Webinars">
                <div className="flex gap-4 text-black hover:underline items-center hover:text-neutral-500 cursor-pointer ">
                  <Icon
                    icon="fluent:device-meeting-room-16-filled"
                    className=" text-[#5A766A] w-[29px] h-[29px]"
                  />
                  <p className=" text-base font-medium hidden md:block font-['Poppins']">
                    Webinars
                  </p>
                </div>
              </Link>
              <Link to="/Activities">
                <div className="flex gap-4 text-black hover:underline items-center hover:text-neutral-500 cursor-pointer ">
                  <Icon
                    icon="ant-design:schedule-filled"
                    className=" text-[#5A766A] w-[29px] h-[29px]"
                  />
                  <p className=" text-base font-medium hidden md:block font-['Poppins']">
                    Activities
                  </p>
                </div>
              </Link>
            </div>
          </div>
          {/* Bottom Menu  */}
          <button className="text-black hover:underline items-center hover:text-neutral-500 cursor-pointer ">
            <div className="flex gap-2 items-center max-md:justify-center max-md:items-center">
              <Icon
                icon="ic:twotone-logout"
                className=" text-[#5A766A] w-[29px] h-[29px]"
              />
              <h1 className=" text-base font-medium hidden md:block font-['Poppins']">
                Log out
              </h1>
            </div>
          </button>
        </div>
      </div>
    </>
  );
};

export default SideNavBar;
