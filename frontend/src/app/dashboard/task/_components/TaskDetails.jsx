import React, { useState } from "react";
// import Cross from "/public/images/Task_Details/cross.svg";
// import Edit from "/public/images/Task_Details/Edit.svg";
// import File from "/public/images/Task_Details/file.svg";
// import highP from "/public/images/priority/highP.svg";
// import Attach from "/public/images/Task_Details/attach.svg";
// import Dot from "/public/images/Task_Details/dot.svg";
// import Sent from "/public/images/Task_Details/send.svg";
import "./Custom.css";

function TaskDetails({
  isVisible,
  content = "",
  category = "",
  description = "",
  dueDate = "",
  onClose,
  onEdit,
  onUpload,
  images = [],
  assignees,
}) {
  const [comments, setComments] = useState([
    {
      id: 1,
      user: "Chetan Singh",
      avatar: "C",
      timestamp: new Date(new Date().getTime() - 3 * 60 * 60 * 1000),
      text: `Three challenges we faced:
        1. Mismatch Between Searches and Results: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        2. Low Conversion Rates: Lorem ipsum dolor sit amet, consectetur adipiscing.`,
    },
    {
      id: 2,
      user: "Prince Kumar",
      avatar: "P",
      timestamp: new Date(new Date().getTime() - 3 * 60 * 60 * 1000),
      text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
    },
  ]);

  const [newComment, setNewComment] = useState("");
  const safeAssignees = assignees || [];

  const handleCommentChange = (event) => {
    setNewComment(event.target.value);
  };

  const handleCommentSubmit = () => {
    if (newComment.trim()) {
      const newCommentData = {
        id: comments.length + 1,
        user: "Current User",
        avatar: "U",
        timestamp: new Date(),
        text: newComment,
      };
      setComments([...comments, newCommentData]);
      setNewComment("");
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      handleCommentSubmit();
    }
  };

  const timeAgo = (timestamp) => {
    const now = new Date();
    const diff = now - new Date(timestamp);
    const seconds = Math.floor(diff / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const months = Math.floor(days / 30);
    const years = Math.floor(days / 365);

    if (years > 0) return `${years} year${years > 1 ? "s" : ""} ago`;
    if (months > 0) return `${months} month${months > 1 ? "s" : ""} ago`;
    if (days > 0) return `${days} day${days > 1 ? "s" : ""} ago`;
    if (hours > 0) return `${hours} hour${hours > 1 ? "s" : ""} ago`;
    if (minutes > 0) return `${minutes} minute${minutes > 1 ? "s" : ""} ago`;
    return "Just now";
  };

  if (!isVisible) return null;

  // only first letter should be in Capital letter and rest of the letter should be in small
  const formatCategory = (category) => {
    if (!category) return "";
    return category.charAt(0).toUpperCase() + category.slice(1).toLowerCase();
  };

  return (
    <div className="fixed bg-[#00000080] inset-0 z-50 flex justify-end">
      <div className="fixed top-0 right-0 h-full w-full sm:w-[618px] bg-white z-50 flex flex-col p-0 overflow-y-auto scrollbar-hidden pt-[52px]">
        <div className="fixed top-0 right-0 w-[618px] h-[52px] border-b bg-[#F8F8F8] flex items-center justify-between p-4 z-50">
          <div className="flex-1"></div>
          <div className="flex gap-4">
            <img
              src={File}
              onClick={onUpload}
              alt="Upload"
              className="cursor-pointer hover:opacity-75"
              style={{ width: "20px", height: "20px" }}
            />
            <img
              src={Edit}
              onClick={onEdit}
              alt="Edit"
              className="cursor-pointer hover:opacity-75"
              style={{ width: "20px", height: "20px" }}
            />
            <img
              src={Cross}
              onClick={onClose}
              alt="Close"
              className="cursor-pointer hover:opacity-75"
              style={{ width: "20px", height: "20px" }}
            />
          </div>
        </div>

        {/* Category Functionalities */}
        <div className="mt-4 ml-5 sm:ml-4 w-[335px] sm:w-[399px]">
          <div className="w-[47px] h-[19px] mt-[30px] sm:ml-[30px]">
            {console.log("Category in TaskDetails:", category)}

            {category === "WATER" ? (
              <span className="text-[12px] uppercase leading-[7px] p-1 relative bottom-3 font-interSemiBold bg-[#DCFCE7] text-[#66BE65] border-[1px] border-[#DCFCE7] rounded-[4px]">
                Water
              </span>
            ) : category === "ENERGY" ? (
              <span className="text-[12px] uppercase leading-[7px] p-1 relative bottom-3 font-interSemiBold bg-[#E0EDFF] text-[#2E83FC] border-[1px] border-[#DCFCE7] rounded-[4px]">
                Energy
              </span>
            ) : null}
          </div>
          <h2 className="sm:font-interBold text-[24px] sm:text-[22px] font-interSemiBold sm:pl-8 ">
            {content}
          </h2>
        </div>

        {/* OTHER DETAILS */}
        <div className="flex justify-center mt-4">
          <div className="w-[90%] sm:w-[518px] h-[253px] rounded-[4px] border">
            <div className="bg-[#F8F8F8] h-[49px] text-center justify-start items-center flex rounded-t">
              <span className="text-[#777777] font-interBold pl-5 text-[12px]">
                OTHER DETAILS
              </span>
            </div>
            <div className="bg-white h-[49px] border-b flex items-center px-4">
              <span className="text-[#999999] font-interSemiBold text-[14px]">
                Assign
              </span>
              <div className="flex items-center sm:ml-[133px] ml-[46px] hide-scrollbar  overflow-x-auto">
                {safeAssignees.map((assignee, index) => {
                  const firstCharacter =
                    typeof assignee === "string" ? assignee.charAt(0) : "";
                  return (
                    <div
                      key={assignee.name}
                      className="flex items-center mr-4 border p-1 rounded-full"
                    >
                      <span className="w-5  uppercase h-5 text-[10px] border-[1px] rounded-full px-1 bg-[#038759] text-white flex justify-center items-center font-interBold">
                        {firstCharacter}
                      </span>
                      <span className="text-black font-interMedium text-[14px] ml-2">
                        {assignee}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="bg-white h-[49px] border-b">
              <div className="bg-white h-[49px] border-b flex items-center px-4">
                <span className="text-[#999999] font-interSemiBold text-[14px]">
                  Priority
                </span>
                <div className="flex items-center sm:ml-[133px] ml-[46px]">
                  <img src={highP} alt="High Priority" className="w-5 h-5" />
                  <span className="text-black font-interMedium text-[14px] ml-2">
                    High
                  </span>
                </div>
              </div>
            </div>
            <div className="bg-white h-[49px] border-b">
              <div className="bg-white h-[49px] border-b flex items-center px-4">
                <span className="text-[#999999] font-interSemiBold text-[14px]">
                  Due Date
                </span>
                <div className="flex items-center sm:ml-[133px] ml-[46px]">
                  <span className="text-black font-interMedium text-[14px]">
                    {dueDate}
                  </span>
                </div>
              </div>
            </div>
            <div className="bg-white h-[49px] border-b">
              <div className="bg-white h-[49px] flex items-center px-4">
                <span className="text-[#999999] font-interSemiBold text-[14px]">
                  Category
                </span>
                <div className="flex items-center sm:ml-[133px] ml-[46px]">
                  <span className="text-black font-interMedium text-[14px]">
                    {formatCategory(category)}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="relative flex justify-center mt-5">
          <div className="w-[90%] sm:w-[518px] rounded-[4px]">
            <h5 className="text-[#222222] font-interBold text-[14px]">
              Description
            </h5>
            <p className="font-interRegular mt-1 text-[14px]">{description}</p>
          </div>
        </div>

        {/* Attachment */}
        <div className="relative flex justify-center mt-5">
          <div className="w-[90%] sm:w-[518px] h-[130px] rounded-[4px]">
            <h5 className="text-[#222222] font-interBold text-[14px]">
              Attachments
            </h5>
            <div className="relative left-[3px] cursor-pointer mt-4">
              <div className="flex  z-50 flex-row gap-x-2 gap-y-2">
                <img
                  src={Attach}
                  alt="attach"
                  className="w-[100px] h-[100px] object-cover"
                />
                <img
                  src={Attach}
                  alt="attach"
                  className="w-[100px] h-[100px] object-cover"
                />
                <img
                  src={Attach}
                  alt="attach"
                  className="w-[100px] h-[100px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Comments */}
        <div className="relative flex justify-center mt-10">
          <div className="w-[90%] border-t border-b sm:w-[518px] h-[50px] justify-start items-center flex bg-[#F8F8F8] ">
            <span className="text-[#777777] text-[12px] ml-4 font-interBold uppercase">
              Comments
            </span>
          </div>
        </div>
        {/* User Comments */}
        <div className="relative flex justify-center mt-5">
          <div className="w-[90%] sm:w-[518px]">
            {comments.map((comment) => (
              <div key={comment.id} className="mb-4">
                <div className="flex items-center">
                  <div
                    className={`bg-[#038759] w-[30px] h-[30px] rounded-full flex justify-center items-center`}
                  >
                    <span className="text-[#FFFFFF] font-interBold text-[12.87px]">
                      {comment.avatar}
                    </span>
                  </div>
                  <div className="flex items-center flex-1 space-x-2 ml-2">
                    <p className="text-[#111111] font-inter text-[14px] font-interSemiBold">
                      {comment.user}
                    </p>
                    <span className="text-[#111111] text-[12px]">•</span>
                    <p className="text-[#888888] text-[12px] font-interMedium">
                      {timeAgo(comment.timestamp)}
                    </p>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <img src={Dot} alt="dot" className="cursor-pointer" />
                  </div>
                </div>
                <div className="mt-2 ">
                  <p className="leading-relaxed font-interRegular text-[14px]">
                    {comment.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer-Add */}
        <div className=" bottom-0 w-full sm:w-[618px]  bg-[#F8F8F8] p-4 min-h-[72px] border mt-8 border-[#EBEBEB]">
          <div className="rounded-[4px] h-[40px] p-2 bg-white flex items-center border">
            <input
              type="text"
              placeholder="Write a comment..."
              value={newComment}
              onChange={handleCommentChange}
              onKeyPress={handleKeyPress}
              className="flex-grow px-2 py-1 text-[#000000] font-interMedium text-[14px] rounded-[4px] focus:outline-none"
            />
            <button
              onClick={handleCommentSubmit}
              className="ml-2 p-1 rounded-full hover:bg-gray-300"
            >
              <img src={Sent} alt="send" className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TaskDetails;


