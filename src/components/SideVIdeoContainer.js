import React from 'react'
import VideoContainer from './VideoContainer'
import { YOUTUBE_API } from "../utils/config";
import VideoCard from './VideoCard';
import{ useEffect, useState } from "react";
import SideVideoCard from './SideVideoCard';
const SideVIdeoContainer = () => {
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
      {
       videos?.map((video)=>{
        <SideVideoCard {...video} />
       })
      }
      </>
  )
}

export default SideVIdeoContainer