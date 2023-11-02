import Image from "next/image";
import { Inter } from "next/font/google";
import Layout from "./components/Layout";
import Content from "./components/Content";
import { useEffect, useState } from "react";
import {
  getAuth,
  signInWithRedirect,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import Login from "../pages/components/Login";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ children }) {
  const auth = getAuth();

  const [loggedIn, setLoggedIn] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [error, setError] = useState(false);
  const [user, setUser] = useState();
  const [createAccount, setCreateAccount] = useState(false);

  const handleSignIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((info) => {
        setUser(info.user);
        console.log(info);
        setLoggedIn(true);
        console.log(auth);
        setUser(auth.currentUser);
        setEmail("");
        setPassword("");
      })
      .catch((error) => {
        setError(true);
        console.log(error);
      });
  };

  const handleGuest = (e) => {
    e.preventDefault();
    setUser({
      username: "guest010230422",
      displayName: "Guest",
      verified: false,
    });
    setEmail("");
    setPassword("");
    setUsername("");
    setDisplayName("");
    setLoggedIn(true);
  };

  const handleCreateUser = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((info) => {
        setUser(info.user);
        console.log(info);
        console.log(auth);
        setLoggedIn(true);
        setUser(auth.currentUser);
        updateProfile(auth.currentUser, {
          displayName: displayName, username: displayName
        })
        setEmail("");
        setPassword("");
        setUsername("");
        setDisplayName("");
      })
      .catch(() => {
        setError(true);
      });
  };

  return (
    <div>
      {loggedIn ? null : (
        <Login
          email={email}
          password={password}
          username={username}
          displayName={displayName}
          setEmail={setEmail}
          setPassword={setPassword}
          setUsername={setUsername}
          setDisplayName={setDisplayName}
          handleCreateUser={handleCreateUser}
          handleSignIn={handleSignIn}
          error={error}
          setLoggedIn={setLoggedIn}
          handleGuest={handleGuest}
          createAccount={createAccount}
          setCreateAccount={setCreateAccount}
        />
      )}
      {loggedIn ? <Layout user={user} setLoggedIn={setLoggedIn} /> : null}
    </div>
  );
}
