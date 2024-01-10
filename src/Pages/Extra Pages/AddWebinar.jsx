import React from "react";
import TopBar from "../../Components/TopBar";
import SideNavBar from "../../Components/SideNavBar";
import Header from "../../Components/Header";
import { Icon } from "@iconify/react";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

import { Link } from "react-router-dom";

const AddWebinar = () => {
  const [value, setValue] = React.useState(null);

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
                <Link to="/Home">
                  <button
                    className="w-[115px] h-[34px] bg-[#5A766A] rounded-[5px] absolute right-0 top-0
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
              <div
                className="w-full h-fit rounded-[5px] shadow border border-[#5A766A] p-5
              flex flex-col gap-3 mt-5 "
              >
                <div className="flex flex-col gap-3 ">
                  <div className="relative w-full">
                    <div>
                      {" "}
                      <h3 className="text-black text-[18px] font-semibold font-['Poppins']">
                        Name
                      </h3>
                      <input className="w-full lg:w-[265px] xl:w-[425px] h-[38px] rounded-[5px] border border-[#5A766A] px-3"></input>
                    </div>
                    <div className="lg:absolute top-0 right-10 max-lg:my-3">
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
                  </div>
                  <div className="relative w-full">
                    <div>
                      <h3 className="text-black text-[18px] font-semibold font-['Poppins']">
                        Link
                      </h3>
                      <input className="w-full lg:w-[265px] xl:w-[425px] h-[38px] rounded-[5px] border border-[#5A766A] px-3"></input>
                    </div>
                    <div className="absolute top-0 right-10">
                      <select
                        className="w-[200px] h-[56px] bg-zinc-100 rounded-[5px] pl-2 placeholder-white"
                        name="category_name"
                        // options={option}
                        // value={prodData.category_name}
                        // value={category_id}
                        // onChange={(e) => setCategory_id(e.target.value)}
                      >
                        <option key={null} value={"empty"}>
                          Option 1
                        </option>
                        <option key={null} value={"empty"}>
                          Option 2
                        </option>
                        {/* {categories &&
                          categories.map((elem) => ( */}
                        {/* <option key={elem.category_id} value={elem.category_id}>
                          {elem.category_name}
                        </option> */}
                        {/* ))} */}
                      </select>
                    </div>
                  </div>
                </div>
                <div className="">
                  <h3 className="text-black text-[18px] font-semibold font-['Poppins']">
                    Description
                  </h3>
                  <textarea
                    // style={{ resize: "none" }}
                    className="w-full h-[40px] sm:h-[120px] lg:h-[150px] rounded-[5px] border border-[#5A766A] px-4 py-2"
                  />
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
