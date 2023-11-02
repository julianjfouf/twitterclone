import React from "react";
import Navbar from "./Navbar";
import Feed from "./Feed";

const Content = () => {
  return (
    <div className="w-4/5">
      <div className="flex w-full">
        <div className="w-full relative">
          <Navbar />
          <Feed />
        </div>
        <div className="w-1/2 border-l border-white/20"></div>
      </div>
    </div>
  );
};

export default Content;
