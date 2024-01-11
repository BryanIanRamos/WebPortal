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
import useFetch from "../../Middleware/useFetch";
import { linkClasses } from "@mui/material";
import dayjs from "dayjs";
import { userData } from "../../Middleware/helper";

const AddWebinar = () => {
  const [value, setValue] = React.useState(null);
  // const { jwt, id } = userData();
  const apiUrl = import.meta.env.VITE_MY_DOMAIN_API_;
  const formattedDate = dayjs(value).format("MM/DD/YYYY");

  const [name, setName] = useState("");
  const [link, setLink] = useState("");
  const [sched, setSched] = useState("");
  const [user_id, setUser] = useState(0);
  const [sub_id, setSubID] = useState(0);
  const [type_id, setType] = useState(0);

  const { data: subjects } = useFetch(`${apiUrl}/api/subject`);
  const { data: meeting } = useFetch(`${apiUrl}/api/webtype`);

  // setSched(formattedDate);
  useEffect(() => {
    // Use formattedDate directly in the effect
    const formattedDate = dayjs(value).format("MM/DD/YYYY");
    setSched(formattedDate);
  }, [value]);
  // setUser(id);
  console.log("formattedDate", formattedDate);
  console.log("sub_id", sub_id);

  const submitWebinar = async () => {
    console.log("name: ", name);
    console.log("link: ", link);
    console.log("sched: ", sched);
    console.log("user_id: ", user_id);
    console.log("sub_id: ", sub_id);
    console.log("type_id: ", type_id);
  };

  return (
    <section className="w-screen h-screen">
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
                  Add Webinar
                </h1>
                <div className="flex gap-2 absolute right-0 top-0">
                  <button
                    className="w-[115px] h-[34px] bg-[#5A766A] rounded-[5px] right-[13%] 
                flex justify-center items-center text-white gap-3"
                    onClick={submitWebinar}
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
                className="w-full h-fit rounded-[5px] shadow border border-[#5A766A] p-5
              flex flex-col gap-3 mt-5 "
              >
                <div className="flex flex-col gap-3 ">
                  <div className="grid md:grid-cols-2 gap-4 w-full">
                    <div>
                      {" "}
                      <h3 className="text-black text-[18px] font-semibold font-['Poppins']">
                        Name
                      </h3>
                      <input
                        className="w-full lg:w-[265px] xl:w-[325px] h-[38px] rounded-[5px] border border-[#5A766A] px-3"
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                    <div className="">
                      <div>
                        <h3 className="text-black text-[18px] font-semibold font-['Poppins']">
                          Link
                        </h3>
                        <input
                          className="w-full lg:w-[265px] xl:w-[325px] h-[38px] rounded-[5px] border border-[#5A766A] px-3"
                          onChange={(e) => setLink(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="relative w-full"></div>
                </div>
                <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-5 items-center">
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer components={["DatePicker"]}>
                      <DatePicker
                        label="Deadline"
                        value={value}
                        format="MM/DD/YYYY"
                        onChange={(newValue) => setValue(newValue)}
                        sx={{
                          width: 10,
                          fontSize: 11,
                        }}
                      />
                    </DemoContainer>
                  </LocalizationProvider>
                  <div className="">
                    <select
                      className="w-[200px] h-[56px] bg-white text-gray-600 rounded-[5px] pl-2 placeholder-white border border-[#5A766A]"
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
                  <div className="">
                    <select
                      className="w-[200px] h-[56px] bg-white text-gray-600 rounded-[5px] pl-2 placeholder-white border border-[#5A766A]"
                      name="category_name"
                      onChange={(e) => setType(e.target.value)}
                    >
                      <option key={null} value={"empty"}>
                        Select Meeting Type
                      </option>
                      {meeting &&
                        meeting.map((meetType) => (
                          <option
                            key={meetType.type_id}
                            value={meetType.type_id}
                          >
                            {meetType.web_name}
                          </option>
                        ))}
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
};

export default AddWebinar;
