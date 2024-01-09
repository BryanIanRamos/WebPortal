import React, { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import { Link, useNavigate } from "react-router-dom";
import learn_img from "../../assets/undraw_signup.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { userData } from "../../Middleware/helper";

const Signup = () => {
  const navigate = useNavigate();
  const apiUrl = import.meta.env.VITE_MY_DOMAIN_API_;

  // const [name, setName] = useState("");
  const [first_name, setFirst_name] = useState("");
  const [last_name, setLast_name] = useState("");
  const { jwt } = userData();

  // const [userFocus, setUserFocus] = useState(false);

  //Must start lower or uppercase letter digit, hyphen or under scores
  const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}@gmail\.com$/;
  //requires at least one lowercase and upper case letter, one digit and one special character.
  const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

  // const [user, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [validName, setValidName] = useState(false);
  const [userFocus, setUserFocus] = useState(false);

  const [password, setPassword] = useState("");
  const [validPwd, setValidPwd] = useState(false);
  const [PwdFocus, setPwdFocus] = useState(false);

  const [matchPwd, setMatchPwd] = useState("");
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  const signUp = async () => {
    try {
      const formData = new FormData();
      // formData.append("name", name);
      formData.append("first_name", first_name);
      formData.append("last_name", last_name);
      formData.append("email", email);
      formData.append("password", password);

      console.log("first_name", first_name);
      console.log("last_name", last_name);
      console.log("pass", email);
      console.log("email", password);

      if (first_name && last_name && email && password && validMatch) {
        let resRegister = await fetch(`${apiUrl}/api/signup`, {
          method: "POST",
          headers: {
            // "Content-Type": "application/json",
            Authorization: `Bearer ${jwt}`, // Include the bearer token in the Authorization header
          },
          body: formData,
        });

        // const data = await resRegister.json();
        console.log("data Status: ", resRegister);

        if (resRegister.ok) {
          toast.success("Registered successfully!", {
            hideProgressBar: true,
          });
          console.log("resRegister", resRegister);
          toast.success(
            "Account Registered",
            {
              hideProgressBar: true,
            },
            200
          );
          setTimeout(() => {
            navigate("/");
          }, 3000);
        }
      } else {
        toast.info(
          "Invalid Credentials",
          {
            hideProgressBar: true,
          },
          200
        );
      }
    } catch (error) {
      toast.error(error.message, {
        hideProgressBar: true,
      });
      console.log(error);
    }
  };

  useEffect(() => {
    const result = USER_REGEX.test(email);
    // console.log("result", result);
    // console.log("user", email);
    setValidName(result);
  }, [email]);

  useEffect(() => {
    const result = PWD_REGEX.test(password);
    // console.log("result: ", result);
    // console.log("password: ", password);
    setValidPwd(result);
    const match = password === matchPwd;
    console.log("match: ", match);
    setValidMatch(match);
  }, [password, matchPwd]);

  return (
    <div className="w-screen h-screen">
      <div className="w-full h-full grid grid-cols-1 md:grid-cols-2 ">
        {/* Left SIde  */}
        <div className="bg-white border  flex flex-col justify-center items-center">
          <div className="max-w-[335px]">
            {/* Trade Mark Area  */}
            <div className="flex justify-start items-center mb-[30px] md:hidden">
              <Icon
                icon="mdi:semantic-web"
                className=" text-[#5A766A] w-[84px] h-[84px]"
              />
              <h1 className="text-black text-[34px] font-bold font-['Poppins']">
                Web<span className="text-[#5A766A]">Portal</span>
              </h1>
            </div>
            {/* Content Here!  */}
            <div>
              <h1 className="text-black text-2xl font-bold font-['Poppins'] mb-1">
                Start Here, Sign Up!
              </h1>
              <p className="text-black text-[15px] font-medium font-['Poppins']">
                Already{" "}
                <Link to="/">
                  <span className="text-[15px] font-semibold font-['Poppins'] text-[#5A766A] hover:underline cursor-pointer">
                    have an account.
                  </span>
                </Link>
              </p>
            </div>
            <hr className="w-full border border-black my-5" />
            <div>
              <div className="flex gap-3">
                <div className="mt-2 ">
                  <label className="text-neutral-500 text-sm font-normal font-['Poppins']">
                    First Name
                  </label>
                  <input
                    className="w-full h-[40px] border px-2"
                    type="text"
                    autoComplete="off"
                    onChange={(e) => setFirst_name(e.target.value)}
                  />
                </div>
                <div className="mt-2">
                  <label className="text-neutral-500 text-sm font-normal font-['Poppins']">
                    Last Name
                  </label>
                  <input
                    className="w-full h-[40px] border px-2"
                    type="text"
                    autoComplete="off"
                    onChange={(e) => setLast_name(e.target.value)}
                  />
                </div>
              </div>
              <div className="">
                <div className="mt-2 ">
                  <label className="text-neutral-500 text-sm font-normal font-['Poppins']">
                    Email
                  </label>
                  <input
                    className="w-full h-[40px] border px-2"
                    type="text"
                    onChange={(e) => setEmail(e.target.value)}
                    aria-invalid={validName ? "false" : "true"}
                    autoComplete="off"
                    aria-describedby="uidnote"
                    onFocus={() => setUserFocus(true)}
                    onBlur={() => setUserFocus(false)}
                  />
                </div>
              </div>
              <div className="">
                <div className="mt-2 ">
                  <label className="text-neutral-500 text-sm font-normal font-['Poppins']">
                    Password
                  </label>
                  <input
                    className="w-full h-[40px] border px-2"
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                    aria-invalid={validName ? "false" : "true"}
                    autoComplete="off"
                    aria-describedby="passidnote"
                    onFocus={() => setUserFocus(true)}
                    onBlur={() => setUserFocus(false)}
                  />
                </div>
              </div>
              <div className="">
                <div className="mt-2 ">
                  <label className="text-neutral-500 text-sm font-normal font-['Poppins']">
                    Confirm Password
                  </label>
                  <input
                    className="w-full h-[40px] border px-2"
                    type="password"
                    onChange={(e) => setMatchPwd(e.target.value)}
                    autoComplete="off"
                    aria-invalid={validMatch ? "false" : "true"}
                    aria-describedby="passidnote"
                    onFocus={() => setMatchFocus(true)}
                    onBlur={() => setMatchFocus(false)}
                  />
                </div>
              </div>
              {/* Note Validation  */}
              {userFocus && email && !validName ? (
                <div
                  id="uidnote"
                  className=" text-center bg-gray-700 p-3 text-gray-300 text-[11px] w-full mt-3"
                >
                  <span className="flex gap-1 justify-center">
                    <Icon icon="ph:info-fill" /> 4 to 24 characters.
                  </span>
                  <div className="mt-0 pt-0 ml-[16px]">
                    Must begin with a letter. Letter, number, underscore,
                    hyphens allowed.
                  </div>
                </div>
              ) : (
                <p
                  id="passidnote"
                  className={` ${
                    PwdFocus && password && !validPwd ? "instruction" : "hidden"
                  } text-left bg-gray-700 p-5 text-gray-300 text-[10px]`}
                >
                  <span className="flex gap-1 justify-center items-center">
                    <Icon icon="ph:info-fill" /> 8 to 24 characters.
                  </span>
                  <div className="mt-0 pt-0 ml-[16px] text-center">
                    Must include uppercase and lowercase letters. a number and
                    special character. Allowed special characters: !@#$%
                  </div>
                </p>
              )}
              {validPwd && (
                <p
                  id="passidnote"
                  className={` ${
                    matchFocus && matchPwd && !validMatch
                      ? "instruction"
                      : "hidden"
                  } text-left bg-gray-700 py-2 px-1  text-gray-300 text-[10px]`}
                >
                  <span className="flex gap-1 justify-center items-center">
                    <Icon icon="ph:info-fill" /> Password didn't match.
                  </span>
                </p>
              )}
              <button
                className="w-full h-[40px] border mt-10 bg-[#5A766A] hover:bg-gray-300 text-white  hover:text-[#5A766A] "
                onClick={signUp}
              >
                <span className="text-base font-medium font-['Poppins'] ">
                  Sign In
                </span>
              </button>
            </div>
          </div>
        </div>
        {/* Right SIde  */}
        <div className="bg-[#EFF1F0] hidden  md:flex  justify-center items-center relative">
          <div>
            <div className="absolute right-[60px] top-[10px] flex items-center">
              <Icon
                icon="mdi:semantic-web"
                className=" text-[#5A766A] w-[64px] h-[64px]"
              />
              <h1 className="text-black text-2xl font-bold font-['Poppins']">
                Web<span className="text-[#5A766A]">Portal</span>
              </h1>
            </div>
            <img src={learn_img} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
