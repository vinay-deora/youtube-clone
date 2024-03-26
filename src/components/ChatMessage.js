import React from "react";

const ChatMessage = ({ name, message}) => {
  return (
    <div>
      {
        <div className="flex ">
          <img
            className="w-12  sm:h-8 sm:w-8 mt-2 mx-2"
            src="https://th.bing.com/th/id/OIP.w2McZSq-EYWxh02iSvC3xwHaHa?w=216&h=216&c=7&r=0&o=5&pid=1.7"
            alt=""
          />
          <h1 className="font-bold px-1">{name}</h1>
          <p>{message}</p>
        </div>
      }
    </div>
  );
};

export default ChatMessage;
