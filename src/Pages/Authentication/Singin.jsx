import React from "react";
import learn_img from "../../assets/learn_img.png";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

const Singin = () => {
  return (
    <>
      <div className="w-screen h-screen bg-gray-200">
        <div className="w-full h-full grid md:grid-cols-2 grid-cols-1">
          {/* Left SIde  */}
          <div className="bg-[#EFF1F0] hidden md:flex  justify-center items-center py-5 px-2 relative">
            <div className="absolute left-[30px] top-[10px] flex items-center">
              <Icon
                icon="mdi:semantic-web"
                className=" text-[#5A766A] w-[64px] h-[64px]"
              />
              <h1 className="text-black text-2xl font-bold font-['Poppins']">
                Web<span className="text-[#5A766A]">Portal</span>
              </h1>
            </div>
            <img className="" src={learn_img} />
          </div>
          {/* Right SIde  */}
          <div className="bg-white flex justify-center items-center py-20">
            <div>
              <div className="max-w-[335px]">
                {/* Hidden Trade Mark  */}
                <div className="flex justify-start items-center mb-[30px] md:hidden">
                  <Icon
                    icon="mdi:semantic-web"
                    className=" text-[#5A766A] w-[84px] h-[84px]"
                  />
                  <h1 className="text-black text-[34px] font-bold font-['Poppins']">
                    Web<span className="text-[#5A766A]">Portal</span>
                  </h1>
                </div>
                {/* Content Area  */}
                <h1 className="text-black text-2xl font-bold font-['Poppins'] mb-5">
                  Welcome to WebPortal Sign in to Continue
                </h1>
                <Link to="/Signup">
                  <p>
                    Don’t have an account?{" "}
                    <span className="text-[15px] font-semibold font-['Poppins'] text-[#5A766A] hover:underline cursor-pointer">
                      Create a account
                    </span>{" "}
                    It Takes less than a minute.
                  </p>
                </Link>
                <div className="mt-5">
                  <label className="text-neutral-500 text-sm font-normal font-['Poppins']">
                    Email
                  </label>
                  <input className="w-full h-[40px] border px-2" />
                </div>
                <div>
                  <label className="text-neutral-500 text-sm font-normal font-['Poppins']">
                    Password
                  </label>
                  <input
                    className="w-full h-[40px] border px-2"
                    type="password"
                  />
                </div>
                <Link to="/Home">
                  <button className="w-full h-[40px] border mt-10 bg-[#5A766A] hover:bg-gray-300 text-white  hover:text-[#5A766A] ">
                    <span className="text-base font-medium font-['Poppins'] ">
                      Sign In
                    </span>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Singin;
