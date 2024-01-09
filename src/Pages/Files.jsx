import React from "react";
import SideNavBar from "../Components/SideNavBar";
import TopBar from "../Components/TopBar";
import { Icon } from "@iconify/react";
import Header from "../Components/Header";
import useFetch from "../Middleware/useFetch";

const Files = () => {
  const apiUrl = import.meta.env.VITE_MY_DOMAIN_API_;

  const { data } = useFetch(`${apiUrl}/api/file`);

  // console.log(data);
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
            title={"Files"}
            description={"Organize and view your digital files with ease"}
            sm={true}
            showDate={false}
          />
          <hr className="my-7 w-full border-1 border-[#5A766A]" />
          <section className="w-full h-full flex justify-center overflow-y-auto">
            {/* <div className="w-full h-full border flex justify-center overflow-y-auto"> */}
            {/* Card Content  */}
            <div className="h-fit grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-x-5 gap-y-5">
              {data &&
                data.map((file, index) => (
                  <div
                    className="group w-[250px] h-[179px] bg-zinc-100 hover:bg-[#5A766A] rounded-[5px] shadow px-4 py-6 
                flex flex-col cursor-pointer items-center relative text-[#5A766A] hover:text-white"
                    key={file.file_id}
                  >
                    <h1 className="text-sm font-bold font-['Poppins']">
                      {/* Life Lessons from Plants */}
                      {file.name}
                    </h1>
                    <hr className="w-full border my-2" />
                    <p className="text-[11px] font-normal font-['Poppins']  line-clamp-3 w-full">
                      {/* Reveals nature's wisdom, teaching us about resilience,
                      adaptability, and balance in life. */}
                      {file.description}
                    </p>
                    <div className="absolute bottom-5 right-5 group-hover:text-white">
                      <Icon
                        icon="lets-icons:trash"
                        className="text-[#DD4141] group-hover:text-white  w-[29px] h-[29px]"
                      />
                    </div>
                  </div>
                ))}
            </div>
          </section>
        </div>
      </div>
    </section>
  );
};

export default Files;
