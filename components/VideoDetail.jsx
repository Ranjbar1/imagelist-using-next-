import React from "react";
const VideoDetail = ({ title, description, date }) => {
  return (
    <>
      <div className="my-1 h-10 w-40 px-2 text-left border-b-2 border-gray-400">
        <div className="">
          <span className="font-semibold overflow-clip ">{title}</span>
        </div>
        <div className="mt-1 overflow-hidden">
          <span className="text-sm text-gray-700 opacity-75">
            {description}
          </span>
        </div>
      </div>
    </>
  );
};

export default VideoDetail;
