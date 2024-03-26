import React, { useState } from "react";
import { addMessage } from "../utils/chatSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import ChatMessage from "./ChatMessage";
import { randomNameGenerate } from "../utils/config";
import { randomMessageGenerator } from "../utils/config";
const LiveChat = () => {
  const [TextValue, setTextValue] = useState([]);
  const [messageLive, setMessageLive] = useState([]);

  function sendMessage() {
    setMessageLive(TextValue);
  }

  const displayData = useSelector((store) => store.chat.messages);
  const dispatch = useDispatch();
  useEffect(() => {
    const i = setInterval(() => {
      dispatch(
        addMessage({
          name: randomNameGenerate(),
          message: randomMessageGenerator(),
        })
      );
    }, 1500);

    return () => clearInterval(i);
  }, []);

  return (
    <div className="lg:mt-24 lg:ml-[-7rem] h-[30rem] overflow-y-scroll flex flex-col-reverse">
      <h2 className="px-9 py-2 border border-gray-200 mx-2 rounded-t-lg sm:block ">
        Top chat
      </h2>
      <div className="border border-gray-300 w-96  mx-2 rounded-b-lg h-[26rem] overflow-y-scroll flex flex-col-reverse ">
        <div className="flex ">
          <div></div>

          <div>
            {
              <div className=" my-3">
                {displayData.map((data) => (
                  <ChatMessage name={data.name} message={data.message} />
                ))}
              </div>
            }
          </div>
        </div>
      </div>
      {/* i make this div to form because i want to hit enter and send msg  */}
      <form 
      className="flex "
        onSubmit={(e) => {
          e.preventDefault();
          console.log("on form fubmit ", TextValue);
          dispatch(
            addMessage({
              name: "vinay Deora",
              message: TextValue,
            })
          );
          setTextValue("");
        }}
      >
        <input
          className="border border-black mx-2 h-8 w-[19rem] my-1"
          type="text"
          value={TextValue}
          onChange={(e) => {
            setTextValue(e.target.value);
            // setMessageLive(TextValue);
            // console.log("TextValue" + TextValue);
            // console.log("messageLive" + messageLive);
          }}
        />
        <button
          className="bg-green-400 p-1 my-1 px-4 "
          onClick={() => sendMessage()}
        >

          send
        </button>
      </form>
    </div>
  );
};

export default LiveChat;
