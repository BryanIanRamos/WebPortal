import React from "react";
import TopBar from "../Components/TopBar";
import SideNavBar from "../Components/SideNavBar";

const Home = () => {
  return (
    <section className="w-full h-full  ">
      <TopBar />
      <div className="flex">
        <SideNavBar />
        <h1>Home</h1>
        <div></div>
      </div>
    </section>
  );
};

export default Home;

{
  /* 
   <section className="w-full h-full  ">
      <TopBar />
      <div className="flex">
        <SideNavBar />
        <h1>Home</h1>
        <div></div>
      </div>
    </section>
*/
}
