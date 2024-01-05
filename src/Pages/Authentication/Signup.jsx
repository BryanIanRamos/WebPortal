import React from "react";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import learn_img from "../../assets/undraw_signup.png";

const Signup = () => {
  return (
    <div className="w-screen h-screen">
      <div className="w-full h-full grid grid-cols-1 md:grid-cols-2 ">
        {/* Left SIde  */}
        <div className="bg-white border  flex flex-col justify-center items-center">
          <div className="max-w-[335px]">
            {/* Trade Mark Area  */}
            <div className="flex justify-start items-center mb-[30px] md:hidden">
              <Icon
                icon="mdi:semantic-web"
                className=" text-[#5A766A] w-[84px] h-[84px]"
              />
              <h1 className="text-black text-[34px] font-bold font-['Poppins']">
                Web<span className="text-[#5A766A]">Portal</span>
              </h1>
            </div>
            {/* Content Here!  */}
            <div>
              <h1 className="text-black text-2xl font-bold font-['Poppins'] mb-1">
                Start Here, Sign Up!
              </h1>
              <p className="text-black text-[15px] font-medium font-['Poppins']">
                Already{" "}
                <Link to="/">
                  <span className="text-[15px] font-semibold font-['Poppins'] text-[#5A766A] hover:underline cursor-pointer">
                    have an account.
                  </span>
                </Link>
              </p>
            </div>
            <hr className="w-full border border-black my-5" />
            <div>
              <div className="flex gap-3">
                <div className="mt-2 ">
                  <label className="text-neutral-500 text-sm font-normal font-['Poppins']">
                    First Name
                  </label>
                  <input className="w-full h-[40px] border px-2" />
                </div>
                <div className="mt-2">
                  <label className="text-neutral-500 text-sm font-normal font-['Poppins']">
                    Last Name
                  </label>
                  <input className="w-full h-[40px] border px-2" />
                </div>
              </div>
              <div className="">
                <div className="mt-2 ">
                  <label className="text-neutral-500 text-sm font-normal font-['Poppins']">
                    Email
                  </label>
                  <input className="w-full h-[40px] border px-2" />
                </div>
              </div>
              <div className="">
                <div className="mt-2 ">
                  <label className="text-neutral-500 text-sm font-normal font-['Poppins']">
                    Password
                  </label>
                  <input
                    className="w-full h-[40px] border px-2"
                    type="password"
                  />
                </div>
              </div>
              <div className="">
                <div className="mt-2 ">
                  <label className="text-neutral-500 text-sm font-normal font-['Poppins']">
                    Confirm Password
                  </label>
                  <input
                    className="w-full h-[40px] border px-2"
                    type="password"
                  />
                </div>
              </div>
              <button className="w-full h-[40px] border mt-10 bg-[#5A766A] hover:bg-gray-300 text-white  hover:text-[#5A766A] ">
                <span className="text-base font-medium font-['Poppins'] ">
                  Sign In
                </span>
              </button>
            </div>
          </div>
        </div>
        {/* Right SIde  */}
        <div className="bg-[#EFF1F0] hidden  md:flex  justify-center items-center relative">
          <div>
            <div className="absolute right-[60px] top-[10px] flex items-center">
              <Icon
                icon="mdi:semantic-web"
                className=" text-[#5A766A] w-[64px] h-[64px]"
              />
              <h1 className="text-black text-2xl font-bold font-['Poppins']">
                Web<span className="text-[#5A766A]">Portal</span>
              </h1>
            </div>
            <img src={learn_img} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
