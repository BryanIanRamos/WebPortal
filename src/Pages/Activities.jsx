import React from "react";
import TopBar from "../Components/TopBar";
import SideNavBar from "../Components/SideNavBar";
import { Icon } from "@iconify/react";
import Header from "../Components/Header";
import useFetch from "../Middleware/useFetch";

const Activities = () => {
  const apiUrl = import.meta.env.VITE_MY_DOMAIN_API_;

  const { data } = useFetch(`${apiUrl}/api/cpt-act`);

  console.log(data);

  return (
    <section className="w-screen h-screen">
      <TopBar />
      <div className="flex h-[93%] flex-grow">
        <SideNavBar />
        {/* Content  */}
        <div
          className="px-20 xl:px-[100px] 2xl:px-[120px] max-lg:px-5 w-full h-full
        flex flex-col"
        >
          {/* Header  */}
          <Header
            title={"Activities"}
            description={"Discover something new! Explore our latest events."}
            sm={true}
            showDate={false}
          />
          <hr className="my-7 w-full border-1 border-[#5A766A]" />
          <section className="w-full h-full flex justify-center overflow-y-auto">
            {/* Cards Content  */}
            <div className="h-fit w-fit grid grid-cols-1  xl:grid-cols-2 gap-x-5 gap-y-5">
              {data &&
                data.map((activity) => (
                  <div
                    className="group w-[258px] md:w-[358px] h-20 bg-zinc-100 hover:bg-[#5A766A] rounded-[7px] shadow
              flex gap-3 p-3 relative"
                    key={activity.act_id}
                  >
                    <div className="w-[58px] h-[55px] bg-white rounded-[7px] hidden md:flex justify-center items-center  ">
                      <p className="text-[#5A766A] text-[11px] font-semibold font-['Poppins']">
                        {/* TCW */}
                        {activity.sub_name}
                      </p>
                    </div>
                    <div className="flex flex-col gap-1">
                      <h3 className="text-[#5A766A] group-hover:text-white text-[15px] font-bold font-['Poppins']">
                        {/* Adapt and Thrive */}
                        {activity.name}
                      </h3>
                      <div className="flex gap-1 items-center">
                        <Icon
                          icon="lets-icons:book-duotone"
                          className="text-[#5A766A] group-hover:text-white  w-[17px] h-[17px] my-1"
                        />
                        <span className="text-zinc-500 group-hover:text-white text-[11px] font-normal font-['Poppins']">
                          {/* Dec 16, 2022 */}
                          {activity.deadline}
                        </span>
                      </div>
                    </div>
                    <Icon
                      icon="lets-icons:trash"
                      className="text-red-500 group-hover:text-white  w-[22px] h-[22px] my-1
                  absolute top-2 right-3 cursor-pointer"
                    />
                    <button
                      className="w-[78px] h-6 bg-zinc-300 hover:bg-white rounded flex justify-center items-center absolute
                bottom-3 right-3"
                    >
                      <span className="text-[#5A766A] text-xs font-bold font-['Poppins']">
                        Done
                      </span>
                    </button>
                  </div>
                ))}
            </div>
          </section>
        </div>
      </div>
    </section>
  );
};

export default Activities;
