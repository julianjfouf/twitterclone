import {
  BookmarkAddOutlined,
  GroupOutlined,
  HouseOutlined,
  ListOutlined,
  MailOutline,
  MoreHorizOutlined,
  NotificationsOutlined,
  PersonOutline,
  SearchOutlined,
  VerifiedUserOutlined,
} from "@mui/icons-material";
import Link from "next/link";
import React from "react";

const Menu = ({ tweet, setTweet }) => {
  return (
    <div className="flex flex-col mt-4 w-full pr-6 gap-4">
      <Link
        href="/"
        className="duration-150 flex items-center justify-start w-min cursor-pointer gap-4 text-xl hover:bg-white/10 p-2 pr-4 rounded-full"
      >
        <HouseOutlined sx={{ fontSize: 32 }} />
        Home
      </Link>
      <Link
        href="/"
        className="duration-150 flex items-center justify-start w-min cursor-pointer gap-4 text-xl hover:bg-white/10 p-2 pr-4 rounded-full"
      >
        <SearchOutlined sx={{ fontSize: 32 }} />
        Explore
      </Link>
      <Link
        href="/"
        className="duration-150 flex items-center justify-start w-min cursor-pointer gap-4 text-xl hover:bg-white/10 p-2 pr-4 rounded-full"
      >
        <NotificationsOutlined sx={{ fontSize: 32 }} />
        Notifications
      </Link>
      <Link
        href="/"
        className="duration-150 flex items-center justify-start w-min cursor-pointer gap-4 text-xl hover:bg-white/10 p-2 pr-4 rounded-full"
      >
        <MailOutline sx={{ fontSize: 32 }} />
        Messages
      </Link>
      <Link
        href="/"
        className="duration-150 flex items-center justify-start w-min cursor-pointer gap-4 text-xl hover:bg-white/10 p-2 pr-4 rounded-full"
      >
        <ListOutlined sx={{ fontSize: 32 }} />
        Lists
      </Link>
      <Link
        href="/"
        className="duration-150 flex items-center justify-start w-min cursor-pointer gap-4 text-xl hover:bg-white/10 p-2 pr-4 rounded-full"
      >
        <BookmarkAddOutlined sx={{ fontSize: 32 }} />
        Bookmarks
      </Link>
      <Link
        href="/"
        className="duration-150 flex items-center justify-start w-min cursor-pointer gap-4 text-xl hover:bg-white/10 p-2 pr-4 rounded-full"
      >
        <GroupOutlined sx={{ fontSize: 32 }} />
        Communities
      </Link>
      <Link
        href="/"
        className="duration-150 flex items-center justify-start w-min cursor-pointer gap-4 text-xl hover:bg-white/10 p-2 pr-4 rounded-full"
      >
        <VerifiedUserOutlined sx={{ fontSize: 32 }} />
        Verified
      </Link>
      <Link
        href="/"
        className="duration-150 flex items-center justify-start w-min cursor-pointer gap-4 text-xl hover:bg-white/10 p-2 pr-4 rounded-full"
      >
        <PersonOutline sx={{ fontSize: 32 }} />
        Profile
      </Link>
      <Link
        href="/"
        className="duration-150 flex items-center justify-start w-min cursor-pointer gap-4 text-xl hover:bg-white/10 p-2 pr-4 rounded-full"
      >
        <MoreHorizOutlined sx={{ fontSize: 32 }} />
        More
      </Link>
      <button
        onClick={() => setTweet(true)}
        className="w-full rounded-full py-4 flex justify-center bg-sky-500 hover:bg-sky-600 duration-150"
      >
        Tweet
      </button>
    </div>
  );
};

export default Menu;
