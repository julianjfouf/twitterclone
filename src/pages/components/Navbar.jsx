import React from "react";

const Navbar = () => {
  return (
    <div className="bg-black/50 backdrop-blur-xl sticky top-0 w-full text-white flex flex-col border-b border-white/20">
      <h1 className="font-bold text-2xl mb-8 pl-4 pt-4">Home</h1>
      <div className="w-full flex">
        <button className="w-full hover:bg-white/10 duration-150 py-4">
          For you
        </button>
        <button className="w-full hover:bg-white/10 duration-150">
          Following
        </button>
      </div>
    </div>
  );
};

export default Navbar;
