// // // import React, { useState } from "react";
// // // // import { FaThumbsUp } from "react-icons/fa";

// // // const CommentData = [
// // //   {
// // //     name: "vinay Deora",
// // //     text: "Embrace each day as a new opportunity to chase your passions and conquer your goals.",
// // //     replies: [{
// // //       name: "vinay Deora",
// // //       text: "Embrace each day as a new opportunity to chase your passions and conquer your goals.",
// // //       replies: [],
// // //     },],
    
// // //   },
// // //   {
// // //     name: "vinay Deora",
// // //     text: "Embrace each day as a new opportunity to chase your passions and conquer your goals.",
// // //     replies: [],
// // //   },
// // //   {
// // //     name: "vinay Deora",
// // //     text: "Embrace each day as a new opportunity to chase your passions and conquer your goals.",
// // //     replies: [],
// // //   },
// // //   {
// // //     name: "vinay Deora",
// // //     text: "Embrace each day as a new opportunity to chase your passions and conquer your goals.",
// // //     replies: [],
// // //   },
// // //   {
// // //     name: "vinay Deora",
// // //     text: "Embrace each day as a new opportunity to chase your passions and conquer your goals.",
// // //     replies: [],
// // //   },
// // //   {
// // //     name: "vinay Deora",
// // //     text: "Embrace each day as a new opportunity to chase your passions and conquer your goals.",
// // //     replies: [],
// // //   },
// // //   {
// // //     name: "vinay Deora",
// // //     text: "Embrace each day as a new opportunity to chase your passions and conquer your goals.",
// // //     replies: [],
// // //   },
// // //   {
// // //     name: "vinay Deora",
// // //     text: "Embrace each day as a new opportunity to chase your passions and conquer your goals.",
// // //     replies: [],
// // //   },
// // //   {
// // //     name: "vinay Deora",
// // //     text: "Embrace each day as a new opportunity to chase your passions and conquer your goals.",
// // //     replies: [],
// // //   },
// // //   {
// // //     name: "vinay Deora",
// // //     text: "Embrace each day as a new opportunity to chase your passions and conquer your goals.",
// // //     replies: [],
// // //   },
// // //   {
// // //     name: "vinay Deora",
// // //     text: "Embrace each day as a new opportunity to chase your passions and conquer your goals.",
// // //     replies: [],
// // //   },
// // //   {
// // //     name: "vinay Deora",
// // //     text: "Embrace each day as a new opportunity to chase your passions and conquer your goals.",
// // //     replies: [],
// // //   },
// // //   {
// // //     name: "vinay Deora",
// // //     text: "Embrace each day as a new opportunity to chase your passions and conquer your goals.",
// // //     replies: [],
// // //   },
// // // ];


// // // const Comment = ({ data }) => {
// // //   const [Like, setLike] = useState(400);
// // //   const [isLike, setIsLike] = useState(false);
  
// // //   const HandleLike = () => {
// // //     setLike(Like + (isLike ? -1 : 1));
// // //     setIsLike(!isLike);
// // //   };

// // //   const { name, text } = data;
// // //   return (
// // //     <div className=" flex py-2 space-x-3 px-5 mx-5 mb-5 rounded-lg ">
// // //       <div className="">
// // //         <img
// // //           className="w-12  sm:h-8 sm:w-8 mt-2 "
// // //           src="https://th.bing.com/th/id/OIP.w2McZSq-EYWxh02iSvC3xwHaHa?w=216&h=216&c=7&r=0&o=5&pid=1.7"
// // //           alt=""
// // //         />
// // //       </div>
// // //       <div className=" ">
// // //         <div className="flex">
// // //           <p className="font-bold">{name} </p>
// // //           <p className="text-sm mx-3 mt-1">3 weeks ago </p>
// // //         </div>
// // //         <p>{text}</p>
// // //       <p >
// // //        { isLike ? <i className="fa fa-thumbs-up" onClick={HandleLike}></i> : <i className="fa fa-thumbs-o-up " onClick={HandleLike}></i>}  {Like}
// // //         </p> 
// // //       </div>
// // //     </div>
// // //   );
// // // };


// // //   const CommentList = ({ comments }) => {
// // //     const [showReplies, setShowReplies] = useState(false);

// // //     const toggleReplies = () => {
// // //       setShowReplies(!showReplies);
// // //     };
  
// // //     return comments.map((item, index) => (
// // //       <div className=" ">
   
// // //       <Comment data={item} key={index} />
// // //       <div className="pl-5 ml-5">
        
// // //         <CommentList comments={item.replies} />
// // //       </div>
// // //       {item.replies.length > 0 && (
// // //             <button onClick={toggleReplies}>
// // //               {showReplies ? 'Hide Replies' : 'Show Replies'}
// // //             </button>
// // //           )}
// // //           {showReplies && (
// // //             <div className="pl-5 ml-5">
// // //               <CommentList comments={item.replies} />
// // //             </div>
// // //           )}
// // //     </div>
// // //   ));
// // // };                                
// // // const CommentsSection = () => {
// // //   return (
// // //     <div className="w-[60vw] ml-24">
// // //       <CommentList comments={CommentData} />;
// // //     </div>
// // //   );
// // // };

// // // export default CommentsSection;


// // import React, { useState } from "react";

// // const CommentData = [
// //   {
// //     name: "vinay Deora",
// //     text: "Embrace each day as a new opportunity to chase your passions and conquer your goals.",
// //     replies: [
// //       {
// //         name: "vinay Deora",
// //         text: "reply hai.",
// //         replies: [],
// //       },
// //     ],
// //     likes: 0,
// //   },
// //   {
// //     name: "vinay Deora",
// //     text: "Embrace each day as a new opportunity to chase your passions and conquer your goals.",
// //     replies: [],
// //     likes: 0,
// //   },
// //   {
// //         name: "vinay Deora",
// //         text: "Embrace each day as a new opportunity to chase your passions and conquer your goals.",
// //         replies: [{
// //           name: "vinay Deora",
// //           text: "Embrace each day as a new opportunity to chase your passions and conquer your goals.",
// //           replies: [],
// //         },],
        
// //       },
// //       {
// //         name: "vinay Deora",
// //         text: "Embrace each day as a new opportunity to chase your passions and conquer your goals.",
// //         replies: [],
// //       },
// //       {
// //         name: "vinay Deora",
// //         text: "Embrace each day as a new opportunity to chase your passions and conquer your goals.",
// //         replies: [],
// //       },
// //       {
// //         name: "vinay Deora",
// //         text: "Embrace each day as a new opportunity to chase your passions and conquer your goals.",
// //         replies: [],
// //       },
// //       {
// //         name: "vinay Deora",
// //         text: "Embrace each day as a new opportunity to chase your passions and conquer your goals.",
// //         replies: [],
// //       },
// // ];

// // const Comment = ({ data }) => {
// //   const [likeCount, setLikeCount] = useState(data.likes || 0);
// //   const [isLiked, setIsLiked] = useState(false);

// //   const handleLike = () => {
// //     if (!isLiked) {
// //       setLikeCount(likeCount + 1);
// //     } else {
// //       setLikeCount(likeCount - 1);
// //     }
// //     setIsLiked(!isLiked);
// //   };
// // // object Destructuring
// //   const { name, text } = data;

// //   return (
// //     <div className="flex py-2 space-x-3 px-5 mx-5 mb-5 rounded-lg">
// //       <div className="">
// //         <img
// //           className="w-12 sm:h-8 sm:w-8 mt-2"
// //           src="https://th.bing.com/th/id/OIP.w2McZSq-EYWxh02iSvC3xwHaHa?w=216&h=216&c=7&r=0&o=5&pid=1.7"
// //           alt=""
// //         />
// //       </div>
// //       <div className="bg-red-400 ">
// //         <div className="flex">
// //           <p className="font-bold">{name}</p>
// //           <p className="text-sm mx-3 mt-1">3 weeks ago</p>
// //         </div>
// //         <p>{text}</p>
// //         <button onClick={handleLike}>
// //           {isLiked ? <i className="fa fa-thumbs-up"></i> : <i className="fa fa-thumbs-o-up"></i>}
// //         </button>
// //         {likeCount}
// //       </div>
// //     </div>
// //   );
// // };

// // const CommentList = ({ comments }) => {
// //   const [showReplies, setShowReplies] = useState(false);

// //   const toggleReplies = () => {
// //     setShowReplies(!showReplies);
// //   };

// //   return comments.map((item, index) => (
// //     <div className="" key={index}>
// //       <Comment data={item} />
// //       {item.replies.length > 0 && (
// //        <div className="">
// //        <button onClick={toggleReplies} className="bg-slate-500 rounded-lg py-2 px-4 transition bg-opacity-0 hover:bg-opacity-100 ease-in-out">
// //           {showReplies ? ` ${item.replies.length} Replies` :` ${item.replies.length} Replies`}
// //         </button> 
// //         </div>
// //       )}
// //       {showReplies && (
// //         <div className="pl-5 ml-5 bg-slate-600">
// //           <CommentList comments={item.replies} />
// //           <input className="bg-slate-100" placeholder="enter message" type="text"  />
// //         </div>
// //       )}
// //     </div>
// //   ));
// // };

// // const CommentsSection = () => {
// //   return (
// //     <div className="w-[60vw] ml-24">
// //       <CommentList comments={CommentData} />
// //     </div>
// //   );
// // };

// // export default CommentsSection;

// import React, { useState } from "react";

// const CommentData = [
//     {
//       name: "vinay Deora",
//       text: "Embrace each day as a new opportunity to chase your passions and conquer your goals.",
//       replies: [
//         {
//           name: "vinay Deora",
//           text: "reply hai.",
//           replies: [],
//         },
//         {
//           name: "vinay Deora",
//           text: "reply hai.",
//           replies: [],
//         },
//         {
//           name: "vinay Deora",
//           text: "reply hai.",
//           replies: [ {
//             name: "vinay Deora",
//             text: "reply hai.",
//             replies: [],
//           },],
//         },
//       ],
//       likes: 0,
//     },
//     {
//       name: "vinay Deora",
//       text: "Embrace each day as a new opportunity to chase your passions and conquer your goals.",
//       replies: [],
//       likes: 0,
//     },
//     {
//           name: "vinay Deora",
//           text: "Embrace each day as a new opportunity to chase your passions and conquer your goals.",
//           replies: [{
//             name: "vinay Deora",
//             text: "Embrace each day as a new opportunity to chase your passions and conquer your goals.",
//             replies: [],
//           },],
          
//         },
//         {
//           name: "vinay Deora",
//           text: "Embrace each day as a new opportunity to chase your passions and conquer your goals.",
//           replies: [],
//         },
//         {
//           name: "vinay Deora",
//           text: "Embrace each day as a new opportunity to chase your passions and conquer your goals.",
//           replies: [],
//         },
//         {
//           name: "vinay Deora",
//           text: "Embrace each day as a new opportunity to chase your passions and conquer your goals.",
//           replies: [],
//         },
//         {
//           name: "vinay Deora",
//           text: "Embrace each day as a new opportunity to chase your passions and conquer your goals.",
//           replies: [],
//         },
//   ];
// const Comment = ({ data }) => {
//   const [likeCount, setLikeCount] = useState(data.likes || 0);
//   const [isLiked, setIsLiked] = useState(false);
//   const [showReplies, setShowReplies] = useState(false);
//   const [TextMsg , setTextMsg]= useState("")
//   const [replyMsg , setReplyMsg] = useState("")
//   const handleLike = () => {
//     if (!isLiked) {
//       setLikeCount(likeCount + 1);
//     } else {
//       setLikeCount(likeCount - 1);
//     }
//     setIsLiked(!isLiked);
//   };

//   const toggleReplies = () => {
    
//     setShowReplies(!showReplies);
//   };

//   const SendMsg=()=>{
//     setReplyMsg(TextMsg)
//   }
//   const { name, text, replies } = data;

//   return (
//     <div className="flex py-2 space-x-3 px-5 mx-5 mb-5 rounded-lg">
//       <div className="">
//         <img
//           className="w-12 sm:h-8 sm:w-8 mt-2"
//           src="https://th.bing.com/th/id/OIP.w2McZSq-EYWxh02iSvC3xwHaHa?w=216&h=216&c=7&r=0&o=5&pid=1.7"
//           alt=""
//         />
//       </div>
//       <div className="">
//         <div className="flex">
//           <p className="font-bold">{name}</p>
//           <p className="text-sm mx-3 mt-1">3 weeks ago</p>
//         </div>
//         <p>{text}</p>
        
//         <button
//           onClick={handleLike}
//           className={`py-2 px-4 ${
//             isLiked ? "bg-red-500" : "bg-green-500"
//           } transition bg-opacity-0 hover:bg-opacity-100`}
//         >
//          {isLiked ? <i className="fa fa-thumbs-up"></i> : <i className="fa fa-thumbs-o-up"></i>}
//          {likeCount}
//         </button>
//         {replies.length > 0 && (
//           <button
//             onClick={toggleReplies}
//             className={`py-2 px-4 ${
//               showReplies ? "bg-red-500" : "bg-green-500"
//             } transition bg-opacity-0 hover:bg-opacity-100`}
//           >
//             {showReplies ? "Hide Replies" : "Show Replies"}
//           </button>
//         )}
//         {showReplies && (
//           <div className="pl-5 ml-5">
//             <CommentList comments={replies} />
            
//             <input className="bg-black text-white" type="text" placeholder="enter msg" value={TextMsg} onChange={(e)=>setTextMsg(e.target.value)}/>
// {console.log(TextMsg)}
//             <button className="bg-slate-400" >send</button>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// const CommentList = ({ comments }) => {
//   return comments.map((item, index) => (
//     <div className="" key={index}>
//       <Comment data={item} />
//     </div>
//   ));
// };

// const CommentsSection = () => {
//   return (
//     <div className="w-[60vw] ml-24">
//       <CommentList comments={CommentData} />
//     </div>
//   );
// };

// export default CommentsSection;

import React, { useState } from "react";

const CommentData = [ 
  {
    name: "vinay Deora",
    text: "Embrace each day as a new opportunity to chase your passions and conquer your goals.",
    replies: [
      {
        name: "vinay Deora",
        text: "reply hai.",
        replies: [],
      },
      // {
      //   name: "vinay Deora",
      //   text: "reply hai.",
      //   replies: [],
      // },
      // {
      //   name: "vinay Deora",
      //   text: "reply hai.",
      //   replies: [
      //     {
      //       name: "vinay Deora",
      //       text: "reply hai.",
      //       replies: [],
      //     },
      //   ],
      // },
    ],
    likes: 0,
  },
  {
    name: "vinay Deora",
    text: "Embrace each day as a new opportunity to chase your passions and conquer your goals.",
    replies: [],
    likes: 0,
  },
  {
    name: "vinay Deora",
    text: "Embrace each day as a new opportunity to chase your passions and conquer your goals.",
    replies: [],
    likes: 0,
  },
  {
    name: "vinay Deora",
    text: "Embrace each day as a new opportunity to chase your passions and conquer your goals.",
    replies: [],
    likes: 0,
  },
  {
    name: "vinay Deora",
    text: "Embrace each day as a new opportunity to chase your passions and conquer your goals.",
    replies: [],
    likes: 0,
  },
  {
    name: "vinay Deora",
    text: "Embrace each day as a new opportunity to chase your passions and conquer your goals.",
    replies: [],
    likes: 0,
  },
  // ... (other comments)
];

const Comment = ({ data }) => {
  const [likeCount, setLikeCount] = useState(data.likes || 0);
  const [isLiked, setIsLiked] = useState(false);
  const [showReplies, setShowReplies] = useState(false);
  const [textMsg, setTextMsg] = useState("");
  const [replyMsg, setReplyMsg] = useState("");

  const handleLike = () => {
    setLikeCount(isLiked ? likeCount - 1 : likeCount + 1);
    setIsLiked(!isLiked);
  };

  const toggleReplies = () => {
    setShowReplies(!showReplies);
  };

  const sendReply = () => {
    const newReply = {
      name: "Your Name", // Replace with the sender's name
      text: textMsg,
      replies: [],
      likes: 0,
    };

    setReplyMsg(textMsg);
    data.replies.push(newReply);
    setTextMsg("");
  };

  const { name, text, replies } = data;

  return (
    <div className="bg-gray-100 p-4 border border-gray-300 rounded-lg my-2">
      <div className="flex items-center mb-2">
        <img
          className="w-10 h-10 rounded-full mr-2"
          src="https://th.bing.com/th/id/OIP.w2McZSq-EYWxh02iSvC3xwHaHa?w=216&h=216&c=7&r=0&o=5&pid=1.7"
          alt=""
        />
        <div>
          <p className="font-semibold">{name}</p>
          <p className="text-xs text-gray-500">3 weeks ago</p>
        </div>
      </div>
      <p className="text-sm">{text}</p>
      <div className="flex items-center space-x-2 mt-2">
        <button
          onClick={handleLike}
          className={`bg-blue-500 px-2 py-1 text-white rounded-lg focus:outline-none ${
            isLiked ? "bg-blue-600" : ""
          }`}
        >
          {isLiked ? "Liked" : "Like"} ({likeCount})
        </button>
        <button
          onClick={toggleReplies}
          className={`bg-green-500 px-2 py-1 text-white rounded-lg focus:outline-none`}
        >
          {showReplies ? "Hide Replies" : "Show Replies"}
        </button>
      </div>
      {showReplies && (
        <div className="mt-3">
          {replies.map((reply, index) => (
            <Comment key={index} data={reply} />
          ))}
          <div className="flex mt-2">
            <input
              type="text"
              placeholder="Enter your reply"
              value={textMsg}
              onChange={(e) => setTextMsg(e.target.value)}
              className="w-2/3 p-2 rounded-l-lg border border-gray-300 focus:outline-none"
            />
            <button
              onClick={sendReply}
              className="w-1/3 bg-green-500 text-white p-2 rounded-r-lg focus:outline-none"
            >
              Send
            </button>
          </div>
          {replyMsg && (
            <p className="mt-2 text-sm text-gray-500">
              You replied: {replyMsg}
            </p>
          )}
        </div>
      )}
    </div>
  );
};

const CommentsSection = () => {
  return (
    <div className="w-[60vw] ml-24">
      {CommentData.map((comment, index) => (
        <Comment key={index} data={comment} />
      ))}
    </div>
  );
};

export default CommentsSection;
