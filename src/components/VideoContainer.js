import React, { useEffect, useState } from "react";
import { YOUTUBE_API } from "../utils/config";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
const VideoContainer = () => {
  const [videos, setVideos] = useState();
  useEffect(() => {
    getAllVideos();
  }, []);

  // async function getAllVideos(){

  const getAllVideos = async () => {
    const data = await fetch(YOUTUBE_API);
    const json = await data.json();
    console.log(json?.items);
    setVideos(json?.items);
  };

  return ( 
    <>
       <div className=" ml-52 flex flex-wrap mx-5 mt-[10rem] space-x-5 max-w-[65rem] ">
        {videos?.map((video ) => {
          return (
            <Link to={"watch?v=" + video?.id}>
              <VideoCard {...video} key={video?.id} />
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default VideoContainer;
