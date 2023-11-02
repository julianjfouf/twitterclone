import React, { useState } from "react";
import LeftSidebar from "./LeftSidebar";
import Content from "./Content";
import { Avatar } from "@mui/material";
import {
  ArrowDownward,
  Close,
  GifBoxOutlined,
  GifOutlined,
  Image,
  ImageOutlined,
} from "@mui/icons-material";
import { addDoc, collection } from "firebase/firestore";
import { db } from "@/utils/firebase";
import { serverTimestamp } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const Layout = ({ children, user, setLoggedIn }) => {
  const auth = getAuth();
  const [tweet, setTweet] = useState(false);
  const [tweetInfo, setTweetInfo] = useState({
    username: user?.username,
    displayName: user?.displayName,
    timestamp: serverTimestamp(),
    text: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setTweet(false);
    await addDoc(collection(db, "posts"), tweetInfo);
    setTweetInfo({ ...tweetInfo, text: "" });
  };
  return (
    <div className="flex container mx-auto">
      {tweet ? (
        <div className="absolute top-0 left-0 h-full w-full bg-sky-500/20 z-10 flex justify-center items-center">
          <div className="max-w-4xl w-full bg-black border border-white/20 rounded-2xl p-4">
            <button className="text-white" onClick={() => setTweet(false)}>
              <Close className="mb-8" />
            </button>
            <div className="flex gap-4">
              <Avatar />
              <div className="flex flex-col gap-2 w-full">
                <button className="px-4 py-2 gap-2 text-sky-500 rounded-full border border-gray-400 flex justify-start items-center w-min">
                  Everyone
                  <ArrowDownward />
                </button>
                <textarea
                  onChange={(e) =>
                    setTweetInfo({ ...tweetInfo, text: e.target.value })
                  }
                  value={tweetInfo.text}
                  rows={3}
                  className="w-full outline-none resize-none ring-0 bg-transparent text-2xl placeholder:text-gray-400 text-white flex justify-start items-start"
                  placeholder="What is happening?!"
                />
              </div>
            </div>
            <div className="text-white flex flex-col w-full">
              <p className="text-sky-500 mb-2">Everyone can reply</p>
              <div className="border-t border-white/20 pt-2 flex justify-between">
                <div className="flex gap-2">
                  <ImageOutlined
                    sx={{ fontSize: 36, color: "rgb(14 165 233)" }}
                  />
                  <GifBoxOutlined
                    sx={{ fontSize: 36, color: "rgb(14 165 233)" }}
                  />
                </div>
                <button
                  onClick={(e) => handleSubmit(e)}
                  className="bg-sky-500 hover:bg-sky-600 duration-150 px-4 py-2 font-bold rounded-full"
                >
                  Tweet
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : null}
      <LeftSidebar setLoggedIn={setLoggedIn} setTweet={setTweet} user={user} tweet={tweet} />
      <Content children={children} />
    </div>
  );
};

export default Layout;
