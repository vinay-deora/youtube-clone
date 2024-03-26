
import React, { useRef } from "react";
import Button from "./Button";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

const ButtonList = () => {
  const List = [
    {
      id: "channel_id_1",
      channelName: "All",
    },
    {
      id: "channel_id_2",
      channelName: "Vinay Deora , ReactJs Developer",
    },
    {
      id: "channel_id_3",
      channelName: "Vinay Deora , ReactJs Developer",
    },
    {
      id: "channel_id_4",
      channelName: "Vinay Deora , ReactJs Developer",
    },
    {
      id: "channel_id_5",
      channelName: "Vinay Deora , ReactJs Developer",
    },
    {
      id: "channel_id_6",
      channelName: "Vinay Deora , ReactJs Developer",
    },
    {
      id: "channel_id_7",
      channelName: "DIY",
    },
    {
      id: "channel_id_8",
      channelName: "Vinay Deora , ReactJs Developer",
    },
    {
      id: "channel_id_9",
      channelName: "Vinay Deora , ReactJs Developer",
    },
    {
      id: "channel_id_10",
      channelName: "NatureNurturers Network",
    },
    {
      id: "channel_id_11",
      channelName: "NatureNurturers Network",
    },
    ,
    {
      id: "channel_id_12",
      channelName: "NatureNurturers Network",
    },
    ,
    {
      id: "channel_id_13",
      channelName: "NatureNurturers Network",
    },
    ,
    {
      id: "channel_id_14",
      channelName: "NatureNurturers Network",
    },
    ,
    {
      id: "channel_id_15",
      channelName: "NatureNurturers Network",
    },
    ,
    {
      id: "channel_id_16",
      channelName: "NatureNurturers Network",
    },
    ,
    {
      id: "channel_id_17",
      channelName: "NatureNurturers Network",
    },
    ,
    {
      id: "channel_id_18",
      channelName: "NatureNurturers Network",
    },
    ,
    {
      id: "channel_id_19",
      channelName: "NatureNurturers Network",
    },
    ,
    {
      id: "channel_id_20",
      channelName: "NatureNurturers Network",
    },
    ,
    {
      id: "channel_id_21",
      channelName: "NatureNurturers Network",
    },
  ];

  const sliderRef = useRef(null);

  const scrollSlider = (scrollOffset) => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({
        left: scrollOffset,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className=" p-1 mt-[4.5rem] fixed top-0 left-0 right-1 z-10 bg-white ml-52 flex items-center">
      <MdChevronLeft
        className="opacity-50 cursor-pointer hover:opacity-100"
        onClick={() => scrollSlider(-200)} // Scroll left by 200 pixels
        size={40}
      />
      <div
        ref={sliderRef}
        className="flex space-x-2 p-2 overflow-x-hidden overflow-y-visible"
        style={{ width: "70vw", maxWidth: "1000px" }} // Set your preferred width
      >
        {List.map((item) => (
          <Button {...item} key={item.id} />
        ))}
      </div>
      <MdChevronRight
        className="opacity-50 cursor-pointer hover:opacity-100"
        onClick={() => scrollSlider(200)} // Scroll right by 200 pixels
        size={40}
      />
    </div>
  );
};

export default ButtonList;
