import React from "react";
import Button from "./Button";
import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";

const MainContainer = () => {
  return (
    <div className="mx-3">
      <div className="">
      <ButtonList />
      </div>
      <VideoContainer />
      
    </div>
  );
};

export default MainContainer;
