import React, { useEffect, useState } from "react";
import { db } from "@/utils/firebase";
import {
  collection,
  orderBy,
  onSnapshot,
  getDocs,
  query,
} from "firebase/firestore";
import Tweet from "./subcomponents/Tweet";

const Feed = () => {
  const [posts, setPosts] = useState([]);
  const [data, setData] = useState();

  const getData = async () => {
    const querySnapshot = await getDocs(collection(db, "posts"));
    setPosts(querySnapshot);
  };

  useEffect(() => {
    const q = query(collection(db, "posts"), orderBy("timestamp", "desc"));
    onSnapshot(q, (querySnapshot) => {
      setPosts(
        querySnapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });
  }, []);

  return (
    <div className=" flex flex-col">
      {posts.map(
        ({
          id,
          data: {
            displayName,
            username,
            verified,
            text,
            avatar,
            image,
            timestamp,
          },
        }) => {
          if (displayName != "captivezephyr" && displayName != "johndoe") {
            return (
              <Tweet
                key={id}
                displayName={displayName}
                username={username}
                verified={verified}
                text={text}
                avatar={avatar}
                image={image}
                timestamp={new Date(timestamp?.seconds * 1000).toUTCString()}
              />
            );
          }
        }
      )}
      {/* <Tweet
        username="johndoe"
        displayName="John Doe"
        message="Hello I am testing this out"
        avatar=""
        verified={true}
      />
      <Tweet
        username="johndoe"
        displayName="John Doe"
        message="Hello I am testing this out"
        avatar=""
        verified={true}
      />
      <Tweet
        username="johndoe"
        displayName="John Doe"
        message="Hello I am testing this out"
        avatar=""
        verified={true}
      />
      <Tweet
        username="johndoe"
        displayName="John Doe"
        message="Hello I am testing this out"
        avatar=""
        verified={true}
      />
      <Tweet
        username="johndoe"
        displayName="John Doe"
        message="Hello I am testing this out"
        avatar=""
        verified={true}
      />
      <Tweet
        username="johndoe"
        displayName="John Doe"
        message="Hello I am testing this out"
        avatar=""
        verified={true}
      />
      <Tweet
        username="johndoe"
        displayName="John Doe"
        message="Hello I am testing this out"
        avatar=""
        verified={true}
      />
      <Tweet
        username="johndoe"
        displayName="John Doe"
        message="Hello I am testing this out"
        avatar=""
        verified={true}
      />
      <Tweet
        username="johndoe"
        displayName="John Doe"
        message="Hello I am testing this out"
        avatar=""
        verified={true}
      />
      <Tweet
        username="johndoe"
        displayName="John Doe"
        message="Hello I am testing this out"
        avatar=""
        verified={true}
      />
      <Tweet
        username="johndoe"
        displayName="John Doe"
        message="Hello I am testing this out"
        avatar=""
        verified={true}
      /> */}
    </div>
  );
};

export default Feed;
