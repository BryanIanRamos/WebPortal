import React from "react";
import SideNavBar from "../Components/SideNavBar";
import TopBar from "../Components/TopBar";

const Files = () => {
  return (
    <section className="w-full h-full  ">
      <TopBar />
      <div className="flex">
        <SideNavBar />
        <h1>Files</h1>
        <div></div>
      </div>
    </section>
  );
};

export default Files;
