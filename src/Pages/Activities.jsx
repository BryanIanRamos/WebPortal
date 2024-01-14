import React, { useEffect, useState } from "react";
import TopBar from "../Components/TopBar";
import SideNavBar from "../Components/SideNavBar";
import { Icon } from "@iconify/react";
import Header from "../Components/Header";
import useFetch from "../Middleware/useFetch";
import { Link } from "react-router-dom";
import { Toaster, toast } from "sonner";
import { userData } from "../Middleware/helper";

const Activities = () => {
  const apiUrl = import.meta.env.VITE_MY_DOMAIN_API_;
  const { jwt, id } = userData();

  const { data } = useFetch(`${apiUrl}/api/false-activity/${id}`);

  console.log(id);

  const deleteActivity = async (itemID) => {
    try {
      const response = await fetch(`${apiUrl}/api/activity/${itemID}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "ngrok-skip-browser-warning": "69420",
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

  const updateActivity = async (id, newData) => {
    const name = newData.name;
    const deadline = newData.deadline;
    const isDone = true;
    const user_id = newData.user_id;
    const sub_id = newData.sub_id;

    // console.log("id", id);
    // console.log("name", name);
    // console.log("deadline", deadline);
    // console.log("isDone", isDone);
    // console.log("user_id", user_id);
    // console.log("sub_id", sub_id);

    try {
      let response = await fetch(`${apiUrl}/api/activity/${id}`, {
        method: "PUT", // or 'PATCH' depending on your API
        headers: {
          "Content-Type": "application/json",
          "ngrok-skip-browser-warning": "69420",
          // Accept: "application/json",
          Authorization: `Bearer ${jwt}`,
        },
        body: JSON.stringify({
          name,
          deadline,
          isDone: true,
          user_id,
          sub_id,
        }),
      });

      console.log(response);

      if (!response.ok) {
        throw new Error("Failed to update data");
      }

      setTimeout(() => {
        toast.success(
          "Activity Updated!",
          {
            hideProgressBar: true,
          },
          1200
        );
      }, 1200);

      setTimeout(() => {
        window.location.reload();
      }, 2200);
    } catch (error) {
      // setError(error);
      console.log("Error: ", error);
      toast.error(
        "Can't update activity!",
        {
          hideProgressBar: true,
        },
        2000
      );
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
              To Do List
            </h1>
            <div className="flex gap-2 absolute right-0 top-4">
              <Link to="/List-activity">
                <button
                  className="w-[115px] h-[34px] bg-[#5A766A] rounded-[5px] 
                flex justify-center items-center text-white gap-3"
                >
                  <p className="text-[15px] font-normal font-['Poppins']">
                    View Done
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
                    <button
                      className="w-[78px] h-6 bg-zinc-300 hover:bg-white rounded flex justify-center items-center absolute
                bottom-3 right-3"
                      onClick={() => updateActivity(activity.act_id, activity)}
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
