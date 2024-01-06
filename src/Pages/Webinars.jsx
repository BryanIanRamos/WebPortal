import React from "react";
import TopBar from "../Components/TopBar";
import SideNavBar from "../Components/SideNavBar";
import { Icon } from "@iconify/react";
import Header from "../Components/Header";

const Webinars = () => {
  return (
    <section className="w-screen h-screen">
      <TopBar />
      <div className="flex h-[93%]  flex-grow">
        <SideNavBar />
        {/* Content  */}
        <div
          className="h-full px-20 xl:px-[100px] 2xl:px-[120px] max-lg:px-5 w-full
        flex flex-col"
        >
          {/* Header  */}
          <Header
            title={"Webinars"}
            description={"Join our webinars to learn, connect, and grow!"}
            sm={true}
            showDate={false}
          />
          <hr className="my-7 w-full border-1 border-[#5A766A]" />
          <section className="w-full h-full flex justify-center overflow-y-auto">
            {/* Cards Content  */}
            <div className="h-fit grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-x-5 gap-y-5">
              <div className="w-[231px] h-[182px] bg-zinc-100 rounded shadow p-5">
                <div className="w-[65px] h-[20px] bg-zinc-100 rounded border border-[#5A766A] flex justify-center items-center">
                  <p className="text-[#5A766A] text-[9px] font-medium font-['Poppins']">
                    Zoom
                  </p>
                </div>
                <Icon
                  icon="lets-icons:book-duotone"
                  className="text-[#5A766A] group-hover:text-white  w-[20px] h-[20px] my-1"
                />
                <h1 className="text-[#5A766A] text-[15px] font-bold font-['Poppins']">
                  Green Wisdom
                </h1>
                <p className="text-[#5A766A] text-[9px] font-normal font-['Poppins']">
                  Monday 9:00 am
                </p>
                <hr className="my-2" />
                <p className="text-[#5A766A] text-[9px] font-semibold font-['Poppins']">
                  Subject: TCW
                </p>
                <button className="group w-full h-[26px] bg-[#5A766A] hover:bg-zinc-300 flex items-center justify-center  rounded my-2">
                  <span className="text-white group-hover:text-[#5A766A] text-[10px] font-bold font-['Poppins']">
                    Join Now
                  </span>
                </button>
              </div>
              <div className="w-[231px] h-[182px] bg-zinc-100 rounded shadow p-5">
                <div className="w-[65px] h-[20px] bg-zinc-100 rounded border border-[#5A766A] flex justify-center items-center">
                  <p className="text-[#5A766A] text-[9px] font-medium font-['Poppins']">
                    Zoom
                  </p>
                </div>
                <Icon
                  icon="lets-icons:book-duotone"
                  className="text-[#5A766A] group-hover:text-white  w-[20px] h-[20px] my-1"
                />
                <h1 className="text-[#5A766A] text-[15px] font-bold font-['Poppins']">
                  Green Wisdom
                </h1>
                <p className="text-[#5A766A] text-[9px] font-normal font-['Poppins']">
                  Monday 9:00 am
                </p>
                <hr className="my-2" />
                <p className="text-[#5A766A] text-[9px] font-semibold font-['Poppins']">
                  Subject: TCW
                </p>
                <button className="group w-full h-[26px] bg-[#5A766A] hover:bg-zinc-300 flex items-center justify-center  rounded my-2">
                  <span className="text-white group-hover:text-[#5A766A] text-[10px] font-bold font-['Poppins']">
                    Join Now
                  </span>
                </button>
              </div>
              <div className="w-[231px] h-[182px] bg-zinc-100 rounded shadow p-5">
                <div className="w-[65px] h-[20px] bg-zinc-100 rounded border border-[#5A766A] flex justify-center items-center">
                  <p className="text-[#5A766A] text-[9px] font-medium font-['Poppins']">
                    Zoom
                  </p>
                </div>
                <Icon
                  icon="lets-icons:book-duotone"
                  className="text-[#5A766A] group-hover:text-white  w-[20px] h-[20px] my-1"
                />
                <h1 className="text-[#5A766A] text-[15px] font-bold font-['Poppins']">
                  Green Wisdom
                </h1>
                <p className="text-[#5A766A] text-[9px] font-normal font-['Poppins']">
                  Monday 9:00 am
                </p>
                <hr className="my-2" />
                <p className="text-[#5A766A] text-[9px] font-semibold font-['Poppins']">
                  Subject: TCW
                </p>
                <button className="group w-full h-[26px] bg-[#5A766A] hover:bg-zinc-300 flex items-center justify-center  rounded my-2">
                  <span className="text-white group-hover:text-[#5A766A] text-[10px] font-bold font-['Poppins']">
                    Join Now
                  </span>
                </button>
              </div>
              <div className="w-[231px] h-[182px] bg-zinc-100 rounded shadow p-5">
                <div className="w-[65px] h-[20px] bg-zinc-100 rounded border border-[#5A766A] flex justify-center items-center">
                  <p className="text-[#5A766A] text-[9px] font-medium font-['Poppins']">
                    Zoom
                  </p>
                </div>
                <Icon
                  icon="lets-icons:book-duotone"
                  className="text-[#5A766A] group-hover:text-white  w-[20px] h-[20px] my-1"
                />
                <h1 className="text-[#5A766A] text-[15px] font-bold font-['Poppins']">
                  Green Wisdom
                </h1>
                <p className="text-[#5A766A] text-[9px] font-normal font-['Poppins']">
                  Monday 9:00 am
                </p>
                <hr className="my-2" />
                <p className="text-[#5A766A] text-[9px] font-semibold font-['Poppins']">
                  Subject: TCW
                </p>
                <button className="group w-full h-[26px] bg-[#5A766A] hover:bg-zinc-300 flex items-center justify-center  rounded my-2">
                  <span className="text-white group-hover:text-[#5A766A] text-[10px] font-bold font-['Poppins']">
                    Join Now
                  </span>
                </button>
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
};

export default Webinars;
