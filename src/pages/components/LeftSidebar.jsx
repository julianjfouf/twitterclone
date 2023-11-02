import { House, MoreHorizOutlined, Twitter } from "@mui/icons-material";
import React, { useState } from "react";
import Menu from "./subcomponents/Menu";
import Link from "next/link";
import { Avatar } from "@mui/material";
import { userAgent } from "next/server";
import { getAuth, signOut } from "firebase/auth";

const LeftSidebar = ({ setTweet, tweet, user, setLoggedIn }) => {
  const [menu, setMenu] = useState(false);
  const auth = getAuth();
  const handleSignOut = () => {
    signOut(auth).then(() => {
      setLoggedIn(false);
      setMenu(false);
    });
  };
  return (
    <div className="w-1/5 top-0 border-r sticky py-2 pr-2 flex flex-col items-start h-screen border-white/20 text-white">
      <div className="w-full h-full flex flex-col items-start">
        <Link
          href="/"
          className="p-2 hover:bg-white/10 rounded-full cursor-pointer"
        >
          <Twitter sx={{ fontSize: 36 }} />
        </Link>
        <Menu tweet={tweet} setTweet={setTweet} />
      </div>
      <div className="flex justify-between relative items-center w-full pr-[24px] hover:bg-white/10 rounded-full p-2 cursor-pointer duration-150">
        <div className="flex items-center">
          <Avatar />
          <div className="ml-4 flex flex-col items-start text-left">
            <p className="font-bold overflow-ellipsis">{user?.displayName}</p>
            <p className="font-light text-gray-400 overflow-ellipsis">@{user?.username}</p>
          </div>
        </div>
        <button onClick={() => setMenu(!menu)}>
          <MoreHorizOutlined />
        </button>
        {menu ? (
          <div className="absolute right-0 px-4 py-2 top-[-50%] -translate-y-4 hover:bg-white/10 duration-150 rounded-full">
            <button onClick={() => handleSignOut()}>Sign Out</button>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default LeftSidebar;
