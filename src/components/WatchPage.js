// import React, { useEffect } from "react";
// import { useDispatch } from "react-redux";
// import { closeMenu } from "../utils/appSlice";
// import { useSearchParams } from "react-router-dom";

// const WatchPage = () => {

//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(closeMenu());
//   }, []);

//   return (
//     <div>
//       {/* <iframe
//         width="560"
//         height="315"
//         src="https://www.youtube.com/embed/swEsvQcIJW0"
//         title="YouTube video player"
//         frameBorder="0"
//         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//         allowFullScreen
//       ></iframe> */}
//       WatchPage
//     </div>
//   );
// };

// export default WatchPage;
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";

import CommantsSection from "./CommantsSection";
import LiveChat from "./LiveChat";
import SideVIdeoContainer from "./SideVIdeoContainer";

const WatchPage = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams(); // Get the search parameters from the URL
  const id = searchParams.get("v"); // Extract the value of the "id" parameter
  console.log(id);

  useEffect(() => {
    dispatch(closeMenu());
  }, [dispatch]);
  if (!closeMenu) return null;
  return (
    <>
      <div className=" sm:flex-flex-col lg:flex overflow-hidden">
        <div className="pl-36 py-5  mt-20 ">
          <iframe
            width="800"
            height="500"
            src={"https://www.youtube.com/embed/" + id}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFllScreen
          ></iframe>
        </div>
        <div className="h-80 mt-2 mx-32 ">
          <LiveChat />
        </div>
      </div>
   
    <div className="flex mt-20">
      <div className="w-auto mx-5">
          <CommantsSection />
        </div>
        
          </div>
    </>
    
  );
};

export default WatchPage;
