import React from "react";
import Slider from "./Slider";
import { Outlet } from "react-router-dom";
import MainContainer from "./MainContainer";
const Body = () => {
  return (
    <div className="flex ">
      <div className="bg-white w-16 fixed">
        <Slider />
      </div>
      <div className="">
        <Outlet />
      </div>
    </div>
  );
};

export default Body;
