import {
  Analytics,
  AnalyticsOutlined,
  CommentOutlined,
  FavoriteBorder,
  FavoriteOutlined,
  RepeatOutlined,
} from "@mui/icons-material";
import { Avatar } from "@mui/material";
import React from "react";
import { motion } from "framer-motion";

const Tweet = ({
  username,
  displayName,
  avatar,
  text,
  verified,
  image,
  timestamp,
}) => {
  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ spring: 0, duration: 0.15 }}
      className="w-full flex border-b border-white/20 p-4 text-white items-start"
    >
      <Avatar className="z-[-1]" />
      <div className="ml-4 w-full">
        <div className="flex w-full justify-between items-baseline">
          <div className="flex gap-2">
            <p className="font-bold flex">{displayName}</p>
            <p className="font-light text-gray-400">@{username}</p>
          </div>
          <p className="text-xs text-gray-400 uppercase font-light">
            {timestamp}
          </p>
        </div>
        <div className="mb-4">
          <p>{text}</p>
        </div>
        <div className="flex gap-8">
          <div className="flex gap-4 items-center">
            <CommentOutlined sx={{ fontSize: 18 }} />
            <p className="">5</p>
          </div>
          <div className="flex gap-4 items-center">
            <RepeatOutlined sx={{ fontSize: 18 }} />
            <p className="">5</p>
          </div>
          <div className="flex gap-4 items-center">
            <FavoriteBorder sx={{ fontSize: 18 }} />
            <p className="">5</p>
          </div>
          <div className="flex gap-4 items-center">
            <AnalyticsOutlined sx={{ fontSize: 18 }} />
            <p className="">5</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Tweet;
