
import React from "react";

const VideoCard = ({ statistics, snippet }) => {
  return (
    <div className="w-80 my-5 overflow-x-hidden">
      <img src={snippet?.thumbnails?.medium?.url} alt="" className="mb-2 rounded-lg" />

      <div className="flex space-x-1 ">
        <div className=" col-span-1"> 
          {/* <img className="w-12  h-10 rounded-full object-cover" src={snippet?.thumbnails?.default?.url} alt="" /> */}
          <img
          className="h-10 w-10  mr-10 rounded-full "
          src={snippet?.thumbnails?.medium?.url}
          // src={videos?.snippet?.thumbnails?.medium?.url}
          // src="https://th.bing.com/th/id/OIP.w2McZSq-EYWxh02iSvC3xwHaHa?w=216&h=216&c=7&r=0&o=5&pid=1.7"
          alt=""
        />
        </div>
        <div className="">
          <h1 className="text-lg font-medium text-gray-900 ">{snippet?.title}</h1>
          <h1 className="text-sm text-gray-500 ">{snippet?.channelTitle}</h1>
          <h1 className="text-sm text-gray-500">{statistics?.likeCount / 100} Views</h1>
        </div>
      </div>
      {/* <p className="text-sm">{snippet?.description}</p> */}
    </div>
  );
};

export default VideoCard;
