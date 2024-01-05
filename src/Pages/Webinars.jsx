import React from "react";
import TopBar from "../Components/TopBar";
import SideNavBar from "../Components/SideNavBar";

const Webinars = () => {
  return (
    <section className="w-full h-full  ">
      <TopBar />
      <div className="flex">
        <SideNavBar />
        <h1>Webinars</h1>
        <div></div>
      </div>
    </section>
  );
};

export default Webinars;
