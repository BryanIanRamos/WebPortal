import React, { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import TopBar from "../../Components/TopBar";
import SideNavBar from "../../Components/SideNavBar";
import Header from "../../Components/Header";
import { Link } from "react-router-dom";
import { storeUser, userData } from "../../Middleware/helper";
import { Toaster, toast } from "sonner";

const AddLessons = () => {
  const apiUrl = import.meta.env.VITE_MY_DOMAIN_API_;
  const { jwt, id } = userData();

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [user_id, setUserID] = useState(0);
  const [link, setLink] = useState("");

  useEffect(() => {
    setUserID(id);
  }, [id]);

  const SubmitLesson = async (e) => {
    e.preventDefault();

    // console.log("name: ", name);
    // console.log("description: ", description);
    // console.log("user_id: ", user_id);
    // console.log("link: ", link);

    if (name && description && user_id && link) {
      try {
        const response = await fetch(`${apiUrl}/api/file`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${jwt}`,
          },
          body: JSON.stringify({
            name,
            description,
            user_id,
            link,
          }),
        });

        console.log("response", response);

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        // const res = await response.json();

        setTimeout(() => {
          toast.success(
            "Lesson Added successfully!",
            {
              hideProgressBar: true,
            },
            1200
          );
        }, 1200);

        // Reset the form fields after successful submission
        setName("");
        setDescription("");
        setUserID(0);
        setLink("");

        console.log("Lesson added successfully!");

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
            title={"Lesson"}
            description={"Don’t miss out a single lesson"}
            showDate={false}
          />

          <hr className="mt-10 mb-3 w-full border-1 border-[#5A766A]" />
          <section className="h-full ">
            <div>
              <div className="relative">
                <h1 className="text-[#5A766A] text-xl font-bold font-['Poppins'] my-3 md:my-4">
                  Add Lesson
                </h1>
                <div className="flex gap-2 absolute right-0 top-0">
                  <button
                    className="w-[115px] h-[34px] bg-[#5A766A] rounded-[5px] right-[13%] 
                flex justify-center items-center text-white gap-3"
                    onClick={SubmitLesson}
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
                <div className="flex max-md:flex-col gap-[10%] lg:gap-[5%] xl:gap-[20%] ">
                  <div>
                    <h3 className="text-black text-[18px] font-semibold font-['Poppins']">
                      Name
                    </h3>
                    <input
                      className="w-full lg:w-[265px] xl:w-[325px] h-[38px] rounded-[5px] border border-[#5A766A] px-3"
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div>
                    <h3 className="text-black text-[18px] font-semibold font-['Poppins']">
                      Link
                    </h3>
                    <input
                      className="w-full lg:w-[265px] 2xl:w-[325px] h-[38px] rounded-[5px] border border-[#5A766A] px-3"
                      onChange={(e) => setLink(e.target.value)}
                    />
                  </div>
                </div>
                <div className="">
                  <h3 className="text-black text-[18px] font-semibold font-['Poppins']">
                    Description
                  </h3>
                  <textarea
                    // style={{ resize: "none" }}
                    className="w-full h-[120px] lg:h-[150px] rounded-[5px] border border-[#5A766A] px-4 py-2"
                    onChange={(e) => setDescription(e.target.value)}
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

export default AddLessons;
