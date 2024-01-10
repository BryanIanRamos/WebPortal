import React from "react";
import SideNavBar from "../Components/SideNavBar";
import TopBar from "../Components/TopBar";
import { Icon } from "@iconify/react";
import Header from "../Components/Header";
import useFetch from "../Middleware/useFetch";
import { userData } from "../Middleware/helper";

const Files = () => {
  const apiUrl = import.meta.env.VITE_MY_DOMAIN_API_;
  const { jwt } = userData();

  const { data } = useFetch(`${apiUrl}/api/file`);

  console.log(data);

  const deleteProduct = async (itemID) => {
    try {
      const response = await fetch(`http://webportal.test/api/file/${itemID}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${jwt}`,
        },
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      console.log(`Lesson with ID ${itemID} deleted successfully!`);
      // Optionally handle success or further actions upon successful deletion

      window.location.reload();
    } catch (error) {
      console.error("There was an error deleting the product:", error);
      // Handle error scenarios (e.g., display an error message to the user)
    }
  };

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
                    <button
                      className="absolute bottom-5 right-5 group-hover:text-white"
                      onClick={() => deleteProduct(file.file_id)}
                    >
                      <Icon
                        icon="lets-icons:trash"
                        className="text-[#DD4141] group-hover:text-white  w-[29px] h-[29px]"
                      />
                    </button>
                    <button
                      className="w-[97px] h-[26px] bg-[#5A766A] group-hover:bg-zinc-100 rounded flex justify-center items-center
                    absolute bottom-5 left-5"
                      onClick={() => window.open(file.link, "_blank")}
                    >
                      <span className="text-zinc-100 group-hover:text-[#5A766A] text-[12px] font-bold font-['Poppins']">
                        Open
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

export default Files;
