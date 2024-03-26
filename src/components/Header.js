import React, { useEffect, useState } from "react";
import { togglerMenuHeader } from "../utils/appSlice";
import { useDispatch, useSelector } from "react-redux";
import { Link, json } from "react-router-dom";
import { YOUTUBE_SEARCH_BOX_API } from "../utils/config";
import { cacheResults } from "../utils/SearchSlice";
const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestion, SetSuggestion] = useState([]);
  const [ShowSuggestion, SetShowSuggestion] = useState(false);
  const dispatch = useDispatch();

  const togglerMenu = () => {
    dispatch(togglerMenuHeader());  
  };
  console.log("searchQuery",searchQuery);
  
  const searchCache = useSelector((store)=> store.search)
  console.log(" searchCache -  " , searchCache)

  useEffect(() => {
  
 const timer  = setTimeout(()=>{
 if(searchCache[searchQuery]){
  SetSuggestion(searchCache[searchQuery])
 }else {
  getSearchData();
 }

 },200)
   
    return () => {
      clearTimeout(timer);
    };
    }, [searchQuery]);

  const getSearchData = async () => {
    // console.log(" Api call -  " + searchQuery);
    const data = await fetch(YOUTUBE_SEARCH_BOX_API + searchQuery);
    const json = await data.json();
    // console.log(json);
    SetSuggestion(json[1]);
 

    // update cache
    dispatch(cacheResults({
    [searchQuery]:json[1],
    }))
  };
  
  return (
    <div className="max-w-[85rem] fixed top-0 left-0 right-0 z-50 bg-white flex justify-between px-4 py-2  ">
      <div className="flex h-6 my-4 px-2 space-x-4">
       
        <svg  className="cursor-pointer w-8 mx-2" onClick={() => togglerMenu()}>
          <path d="M21 6H3V5h18v1zm0 5H3v1h18v-1zm0 6H3v1h18v-1z"></path>
        </svg>
    
        <img
              className="h-8 mx-2 "
              src="https://logodownload.org/wp-content/uploads/2014/10/youtube-logo-9.png"
              alt=""
            />
      </div>

      <div className="  ">
        <div className="flex my-2">
          <input
            className="hidden font-normal lg:w-[35rem]  border border-slate-400  hover:border-blue-400 hover:border-b-2 outline-none  sm:block rounded-l-full py-2 pl-4 text-gray-600"
            type="text"
            placeholder="Search"
            defaultValue={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => SetShowSuggestion(true)}
            onBlur={() => SetShowSuggestion(false)}
          />

          <button className=" hidden sm:block border border-slate-400 rounded-r-full  px-3 bg-slate-100 ">
         <svg className="w-8 h-8 py-1 pl-1"> <path d="m20.87 20.17-5.59-5.59C16.35 13.35 17 11.75 17 10c0-3.87-3.13-7-7-7s-7 3.13-7 7 3.13 7 7 7c1.75 0 3.35-.65 4.58-1.71l5.59 5.59.7-.71zM10 16c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z"></path></svg>
          </button>
          <div>
            <svg className="h-10 py-2 px-2 mx-5 bg-gray-100 mt-1 w-10 rounded-full ">
              <path d="M12 3c-1.66 0-3 1.37-3 3.07v5.86c0 1.7 1.34 3.07 3 3.07s3-1.37 3-3.07V6.07C15 4.37 13.66 3 12 3zm6.5 9h-1c0 3.03-2.47 5.5-5.5 5.5S6.5 15.03 6.5 12h-1c0 3.24 2.39 5.93 5.5 6.41V21h2v-2.59c3.11-.48 5.5-3.17 5.5-6.41z"></path>
            </svg>
          </div>
        </div>
        <div className=" absolute bg-white lg:w-[35rem]  rounded-lg z-2000 shadow-lg">
          {ShowSuggestion && (
            <div className="">
              <ul>
                {suggestion?.map((s) => (
                  <li className="border-b-2 my-3 mx-3 flex ">
                    <img
                      className="w-5 h-5 mx-3 "
                      src="https://img.icons8.com/?size=512&id=59878&format=png"
                      alt=""
                    />
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>

      <div className="col-span-1 flex h-10 mx-2">
        <div>
          <svg className="mt-4 w-20 h-10 mr-[-2rem]">
            <path d="M14 13h-3v3H9v-3H6v-2h3V8h2v3h3v2zm3-7H3v12h14v-6.39l4 1.83V8.56l-4 1.83V6m1-1v3.83L22 7v8l-4-1.83V19H2V5h16z"></path>
          </svg>
        </div>
        <div>
          <svg className="mt-4 w-20 h-10 mx-1 px-1 mr-[-2rem]  ">
            <path d="M10 20h4c0 1.1-.9 2-2 2s-2-.9-2-2zm10-2.65V19H4v-1.65l2-1.88v-5.15C6 7.4 7.56 5.1 10 4.34v-.38c0-1.42 1.49-2.5 2.99-1.76.65.32 1.01 1.03 1.01 1.76v.39c2.44.75 4 3.06 4 5.98v5.15l2 1.87zm-1 .42-2-1.88v-5.47c0-2.47-1.19-4.36-3.13-5.1-1.26-.53-2.64-.5-3.84.03C8.15 6.11 7 7.99 7 10.42v5.47l-2 1.88V18h14v-.23z"></path>
          </svg>
        </div>
        <img
          className=" h-8 my-3 px-4"
          src="https://th.bing.com/th/id/OIP.w2McZSq-EYWxh02iSvC3xwHaHa?w=216&h=216&c=7&r=0&o=5&pid=1.7"
          alt=""
        />
      </div>
    </div>
  );
};

export default Header;

