import React from "react";
import TopBar from "../Components/TopBar";
import SideNavBar from "../Components/SideNavBar";
import { Icon } from "@iconify/react";
import Header from "../Components/Header";
import { userData } from "../Middleware/helper";
import { Link } from "react-router-dom";

const Home = () => {
  const { username } = userData();

  return (
    <section className="w-screen h-screen">
      <TopBar />
      <div className="flex h-[93%]">
        <SideNavBar />
        {/* Content  */}
        <div className="px-20 xl:px-[100px] 2xl:px-[120px] max-lg:px-5 w-full h-fit">
          {/* Header  */}
          <Header
            title={" Welcome Back"}
            description={username}
            showDate={true}
          />
          <section className="mt-6">
            <div className="grid grid-cols-3 gap-1">
              <Link to="/AddLesson">
                <div className="h-20 text-white hover:text-[#5A766A] bg-[#5A766A] hover:bg-gray-200 cursor-pointer rounded-[5px] flex items-center justify-center gap-2">
                  <Icon icon="bxs:book" className="  w-[40px] h-[40px]" />
                  <p className=" text-lg font-semibold font-['Poppins'] hidden sm:block">
                    Add Lessons
                  </p>
                </div>
              </Link>
              <Link to="/AddWebinar">
                <div className="h-20 text-white hover:text-[#5A766A] bg-[#5A766A] hover:bg-gray-200 cursor-pointer rounded-[5px] flex items-center justify-center gap-2">
                  <Icon
                    icon="fluent:device-meeting-room-16-filled"
                    className="  w-[40px] h-[40px]"
                  />
                  <p className=" text-lg font-semibold font-['Poppins'] hidden sm:block">
                    Add Webinars
                  </p>
                </div>
              </Link>
              <Link to="/AddActivities">
                <div className="h-20 text-white hover:text-[#5A766A] bg-[#5A766A] hover:bg-gray-200 cursor-pointer rounded-[5px] flex items-center justify-center gap-2">
                  <Icon
                    icon="ant-design:schedule-filled"
                    className="  w-[40px] h-[40px]"
                  />
                  <p className=" text-lg font-semibold font-['Poppins'] hidden sm:block">
                    Add Activities
                  </p>
                </div>
              </Link>
            </div>
          </section>
          <hr className="mt-7 mb-3 w-full border-1 border-[#5A766A]" />
          <section>
            <div>
              <h1 className="text-[#5A766A] text-xl font-bold font-['Poppins']">
                Recently Added
              </h1>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
};

export default Home;

{
  /* 
    <section className="w-screen h-screen">
      <TopBar />
      <div className="flex h-[93%]">
        <SideNavBar />
         Content  
        <div className="px-20 xl:px-[100px] 2xl:px-[120px] max-lg:px-5 w-full h-fit">
           Header  
          <section className="h-[125px] bg-[#5A766A] rounded-[5px] p-5 relative mt-5">
            <div>
              <h1 className="text-white text-[23px] md:text-[25px] font-bold font-['Poppins']">
                Welcome Back
              </h1>
              <p className="text-white text-[16px] md:text-[22px] font-normal font-['Poppins']">
                James Domingo
              </p>
            </div>
            <div className="absolute top-6 right-5 flex flex-col gap-1 items-center">
              <div className="flex gap-1 items-center">
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
          <section className="mt-6">
            <div className="grid grid-cols-3 gap-1">
              <div className="h-20 text-white hover:text-[#5A766A] bg-[#5A766A] hover:bg-gray-200 cursor-pointer rounded-[5px] flex items-center justify-center gap-2">
                <Icon icon="bxs:book" className="  w-[40px] h-[40px]" />
                <p className=" text-lg font-semibold font-['Poppins'] hidden sm:block">
                  Add Lessons
                </p>
              </div>
              <div className="h-20 text-white hover:text-[#5A766A] bg-[#5A766A] hover:bg-gray-200 cursor-pointer rounded-[5px] flex items-center justify-center gap-2">
                <Icon
                  icon="fluent:device-meeting-room-16-filled"
                  className="  w-[40px] h-[40px]"
                />
                <p className=" text-lg font-semibold font-['Poppins'] hidden sm:block">
                  Add Webinars
                </p>
              </div>
              <div className="h-20 text-white hover:text-[#5A766A] bg-[#5A766A] hover:bg-gray-200 cursor-pointer rounded-[5px] flex items-center justify-center gap-2">
                <Icon
                  icon="ant-design:schedule-filled"
                  className="  w-[40px] h-[40px]"
                />
                <p className=" text-lg font-semibold font-['Poppins'] hidden sm:block">
                  Add Activities
                </p>
              </div>
            </div>
          </section>
          <hr className="mt-7 mb-3 w-full border-1 border-[#5A766A]" />
          <section>
            <div>
              <h1 className="text-[#5A766A] text-xl font-bold font-['Poppins']">
                Recently Added
              </h1>
            </div>
          </section>
        </div>
      </div>
    </section>
*/
}
