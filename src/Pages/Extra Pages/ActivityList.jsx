import React from "react";
import TopBar from "../../Components/TopBar";
import SideNavBar from "../../Components/SideNavBar";
import { Icon } from "@iconify/react";
import Header from "../../Components/Header";
import useFetch from "../../Middleware/useFetch";
import { Link } from "react-router-dom";
import { userData } from "../../Middleware/helper";
import { Toaster, toast } from "sonner";

const ActivityList = () => {
  const apiUrl = import.meta.env.VITE_MY_DOMAIN_API_;
  const { jwt, id } = userData();

  const { data } = useFetch(`${apiUrl}/api/true-activity/${id}`);

  console.log(data);

  const deleteActivity = async (itemID) => {
    try {
      const response = await fetch(`${apiUrl}/api/activity/${itemID}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${jwt}`,
        },
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      console.log(`Activity with ID ${itemID} deleted successfully!`);
      // Optionally handle success or further actions upon successful deletion
      setTimeout(() => {
        toast.success(
          `Activity has been deleted successfully!`,
          {
            hideProgressBar: true,
          },
          1500
        );
      }, 1500);

      setTimeout(() => {
        window.location.reload();
      }, 2800);
    } catch (error) {
      console.error("There was an error deleting the product:", error);
      toast.error(
        "There was an error deleting the data:",
        {
          hideProgressBar: true,
        },
        2000
      );
      // Handle error scenarios (e.g., display an error message to the user)
    }
  };

  return (
    <section className="w-screen h-screen">
      <Toaster richColors position="top-center" />
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
          <div className="relative flex items-center">
            <h1 className="text-[#5A766A] text-xl font-bold font-['Poppins'] my-3 md:my-4">
              Done List
            </h1>
            <div className="flex gap-2 absolute right-0 top-4">
              <Link to="/Activities">
                <button
                  className="w-[115px] h-[34px] bg-[#5A766A] rounded-[5px] 
                flex justify-center items-center text-white gap-3"
                >
                  <Icon icon="typcn:arrow-back" className="w-[24px] h-[24px]" />
                  <p className="text-[15px] font-normal font-['Poppins']">
                    Back
                  </p>
                </button>
              </Link>
            </div>
          </div>
          <hr className="mb-7 mt-2 w-full border-1 border-[#5A766A]" />

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
                    <button onClick={() => deleteActivity(activity.act_id)}>
                      <Icon
                        icon="lets-icons:trash"
                        className="text-red-500 group-hover:text-white  w-[22px] h-[22px] my-1
                  absolute top-2 right-3 cursor-pointer"
                      />
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

export default ActivityList;
