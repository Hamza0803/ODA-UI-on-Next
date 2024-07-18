import React from "react";

const Sidebar = () => {
  return (
    <div className="fixed mt-12 left-0 w-8 h-full bg-gray-700 bg-opacity-20 flex flex-col"> {/* Adjust the width here */}
      <div className="ml-1 my-6">
        <img src='/images/Home.png' className=" mt-6 mb-7 cursor-pointer hover:text-gray-500" />
        <img src='/images/Route.png' className="mb-7 cursor-pointer hover:text-gray-500" />
        <img src='/images/Eye.png' className="mb-7 cursor-pointer hover:text-gray-500" />
        <img src='/images/Altitude.png' className="mb-5 cursor-pointer hover:text-gray-500" />
      </div>
    </div>
  );
};

export default Sidebar;
