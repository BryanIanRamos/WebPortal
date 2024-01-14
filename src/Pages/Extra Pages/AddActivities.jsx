import React, { useEffect, useState } from "react";
import TopBar from "../../Components/TopBar";
import SideNavBar from "../../Components/SideNavBar";
import Header from "../../Components/Header";
import { Icon } from "@iconify/react";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { Link } from "react-router-dom";
import { userData } from "../../Middleware/helper";
import useFetch from "../../Middleware/useFetch";
import dayjs from "dayjs";
import { Toaster, toast } from "sonner";

const AddActivities = () => {
  const [value, setValue] = React.useState(null);
  const apiUrl = import.meta.env.VITE_MY_DOMAIN_API_;
  const { jwt, id } = userData();
  const { data: subjects } = useFetch(`${apiUrl}/api/subject`);
  const formattedDate = dayjs(value).format("MM/DD/YYYY");

  const [name, setName] = useState("");
  const [deadline, setSched] = useState("");
  const [isDone, setDone] = useState(false);
  const [user_id, setUser] = useState(0);
  const [sub_id, setSubID] = useState(0);

  // const formData = new FormData();

  useEffect(() => {
    setUser(id);
    setSched(formattedDate);
  }, [value]);

  const submitActivity = async () => {
    // console.log("name", name);
    // console.log("sched", sched);
    // console.log("isDone", isDone);
    // console.log("user_id", user_id);
    // console.log("sub_id", sub_id);

    console.log(`name: ${name} (${typeof name})`);
    console.log(`sched: ${deadline} (${typeof deadline})`);
    console.log(`isDone: ${isDone} (${typeof isDone})`);
    console.log(`user_id: ${user_id} (${typeof user_id})`);
    console.log(`sub_id: ${sub_id} (${typeof sub_id})`);

    // formData.append("name", name);
    // formData.append("sched", sched);
    // formData.append("isDone", isDone);
    // formData.append("user_id", user_id);
    // formData.append("sub_id", sub_id);

    // console.log(formData);
    // console.log(Array.from(formData));

    if (name && deadline && !isDone && user_id && sub_id) {
      try {
        const response = await fetch(`${apiUrl}/api/activity`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "ngrok-skip-browser-warning": "69420",
            Authorization: `Bearer ${jwt}`,
          },
          body: JSON.stringify({
            name,
            deadline,
            isDone,
            user_id,
            sub_id,
          }),
          // body: formData,
        });

        console.log("response", response);

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const res = await response.json();

        console.log("Activity added successfully!");

        setTimeout(() => {
          toast.success(
            "Activity Added successfully!",
            {
              hideProgressBar: true,
            },
            1200
          );
        }, 1200);

        setTimeout(() => {
          window.location.reload();
        }, 2200);

        // Pass the newly created product data to the parent component
        // addProduct(newProduct);
        // console.log("res: ", res);
      } catch (error) {
        console.error("There was an error submitting the data:", error);
        toast.error(
          "There was an error submitting the data:",
          {
            hideProgressBar: true,
          },
          2000
        );
        // Handle error scenarios (e.g., display an error message to the user)
      }
    } else {
      console.log("Please fill all the box");
      toast.info(
        "Please fill all the box",
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
      <div className="flex h-[93%]">
        <SideNavBar />
        {/* Content  */}
        <div className="px-20 xl:px-[100px] 2xl:px-[120px] max-lg:px-5 w-full h-fit">
          {/* Header  */}
          <Header
            title={"Webinar"}
            description={"Create your own webinar"}
            showDate={false}
          />

          <hr className="mt-10 mb-3 w-full border-1 border-[#5A766A]" />
          <section className="h-full ">
            <div>
              <div className="relative">
                <h1 className="text-[#5A766A] text-xl font-bold font-['Poppins'] my-3 md:my-4">
                  Add Activity
                </h1>
                <div className="flex gap-2 absolute right-0 top-0">
                  <button
                    className="w-[115px] h-[34px] bg-[#5A766A] rounded-[5px] right-[13%] 
                flex justify-center items-center text-white gap-3"
                    onClick={submitActivity}
                  >
                    <p className="text-[15px] font-normal font-['Poppins']">
                      Submit
                    </p>
                  </button>
                  <Link to="/Home">
                    <button
                      className="w-[115px] h-[34px] bg-[#5A766A] rounded-[5px] 
                flex justify-center items-center text-white gap-3"
                    >
                      <Icon
                        icon="typcn:arrow-back"
                        className="w-[24px] h-[24px]"
                      />
                      <p className="text-[15px] font-normal font-['Poppins']">
                        Back
                      </p>
                    </button>
                  </Link>
                </div>
              </div>
              <div
                className="max-w-[530px] h-fit rounded-[5px] shadow border border-[#5A766A] p-5
              flex flex-col gap-3 mt-5 "
              >
                <div className="flex flex-col gap-3 ">
                  <div className="relative w-full">
                    <div>
                      {" "}
                      <h3 className="text-black text-[18px] font-semibold font-['Poppins']">
                        Name
                      </h3>
                      <input
                        className="w-full lg:w-[265px] xl:w-[425px] h-[38px] rounded-[5px] border border-[#5A766A] px-3"
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 items-center">
                    <div>
                      <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DemoContainer components={["DatePicker"]}>
                          <DatePicker
                            label="Deadline"
                            value={value}
                            onChange={(newValue) => setValue(newValue)}
                            sx={{ width: 10, fontSize: 11 }}
                          />
                        </DemoContainer>
                      </LocalizationProvider>
                    </div>
                    <div className="pt-1">
                      <select
                        className="w-[200px] h-[54px] bg-white text-gray-600 rounded-[5px] pl-2 placeholder-white border border-[#5A766A]"
                        name="category_name"
                        onChange={(e) => setSubID(e.target.value)}
                      >
                        <option key={null} value={"empty"}>
                          Select Subject
                        </option>
                        {subjects &&
                          subjects.map((subject) => (
                            <option key={subject.sub_id} value={subject.sub_id}>
                              {subject.sub_name}
                            </option>
                          ))}
                      </select>
                    </div>
                  </div>
                </div>
                {/* <div className="">
                  <h3 className="text-black text-[18px] font-semibold font-['Poppins']">
                    Description
                  </h3>
                  <textarea
                    // style={{ resize: "none" }}
                    className="w-full h-[40px] sm:h-[120px] lg:h-[150px] rounded-[5px] border border-[#5A766A] px-4 py-2"
                  />
                </div> */}
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
};

export default AddActivities;
