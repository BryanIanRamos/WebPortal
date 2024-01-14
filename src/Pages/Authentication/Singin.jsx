import React, { useState } from "react";
import learn_img from "../../assets/learn_img.png";
import { Icon } from "@iconify/react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { storeUser } from "../../Middleware/helper";

const Singin = () => {
  let apiUrl = import.meta.env.VITE_MY_DOMAIN_API_;
  const [isChecked, setIsChecked] = useState(false);
  const navigate = useNavigate();

  const [email, setUsername] = useState("");
  const [password, setPassword] = useState("");

  console.log("My API", apiUrl);

  const handleLogin = async (e) => {
    e.preventDefault();

    // console.log("email", email);
    // console.log("password", password);

    try {
      let response = await fetch(`${apiUrl}/api/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "ngrok-skip-browser-warning": "69420",
          // Accept: "application/json",
          // "ngrok-skip-browser-warning": "69420",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      console.log("data::", data);
      console.log("response.ok", response);

      if (response.ok) {
        // console.log(data.user);
        // console.log("data:", data);
        // console.log("Triggered!");

        if (data.token) {
          console.log("Login successful");

          // Store user data or perform other actions upon successful login
          // For example, storing user data to localStorage
          storeUser(data);

          toast.success("Log in successful", {
            position: "top-right",
            autoClose: 2300,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: 0,
            theme: "light",
          });

          localStorage.setItem("isLogged", true);

          setTimeout(() => {
            navigate("/Home");
          }, 3000);
        } else {
          // Handle scenario where the expected properties are missing in the response
          toast.info("Invalid response data format");
          console.error("Invalid response data:", data);
        }
      } else {
        toast.info("Invalid email or password!", {
          position: "top-right",
          autoClose: 2300,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: 0,
          theme: "light",
        });
      }
    } catch (error) {
      toast.error(
        "Login failed. Please try again later.",
        {
          position: "top-right",
          autoClose: 2300,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: 0,
          theme: "light",
        },
        200
      );
      console.error("Login failed:", error);
    }
  };

  return (
    <>
      <ToastContainer />
      <div className="w-screen h-screen bg-gray-200">
        <div className="w-full h-full grid md:grid-cols-2 grid-cols-1">
          {/* Left SIde  */}
          <div className="bg-[#EFF1F0] hidden md:flex  justify-center items-center py-5 px-2 relative">
            <div className="absolute left-[30px] top-[10px] flex items-center">
              <Icon
                icon="mdi:semantic-web"
                className=" text-[#5A766A] w-[64px] h-[64px]"
              />
              <h1 className="text-black text-2xl font-bold font-['Poppins']">
                Web<span className="text-[#5A766A]">Portal</span>
              </h1>
            </div>
            <img className="" src={learn_img} />
          </div>
          {/* Right SIde  */}
          <div className="bg-white flex justify-center items-center py-20">
            <div>
              <div className="max-w-[335px]">
                {/* Hidden Trade Mark  */}
                <div className="flex justify-start items-center mb-[30px] md:hidden">
                  <Icon
                    icon="mdi:semantic-web"
                    className=" text-[#5A766A] w-[84px] h-[84px]"
                  />
                  <h1 className="text-black text-[34px] font-bold font-['Poppins']">
                    Web<span className="text-[#5A766A]">Portal</span>
                  </h1>
                </div>
                {/* Content Area  */}
                <h1 className="text-black text-2xl font-bold font-['Poppins'] mb-5">
                  Welcome to WebPortal Sign in to Continue
                </h1>
                <Link to="/Signup">
                  <p>
                    Don’t have an account?{" "}
                    <span className="text-[15px] font-semibold font-['Poppins'] text-[#5A766A] hover:underline cursor-pointer">
                      Create a account
                    </span>{" "}
                    It Takes less than a minute.
                  </p>
                </Link>
                <div className="mt-5">
                  <label className="text-neutral-500 text-sm font-normal font-['Poppins']">
                    Email
                  </label>
                  <input
                    className="w-full h-[40px] border px-2"
                    type="email"
                    value={email}
                    placeholder="Username"
                    onChange={(e) => setUsername(e.target.value)}
                    autoComplete="username"
                  />
                </div>
                <div className="mt-4">
                  <label className="text-neutral-500 text-sm font-normal font-['Poppins']">
                    Password
                  </label>
                  <input
                    className="w-full h-[40px] border px-2"
                    type="password"
                    value={password}
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                    autoComplete="current-password"
                  />
                </div>
                {/* <Link to="/Home"> */}
                <button
                  className="w-full h-[40px] border mt-10 bg-[#5A766A] hover:bg-gray-300 text-white  hover:text-[#5A766A] "
                  onClick={handleLogin}
                >
                  <span className="text-base font-medium font-['Poppins'] ">
                    Sign In
                  </span>
                </button>
                {/* </Link> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Singin;
