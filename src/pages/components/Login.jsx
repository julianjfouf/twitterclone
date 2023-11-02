import { getAuth } from "firebase/auth";
import React, { useState } from "react";

const Login = ({
  email,
  password,
  username,
  displayName,
  setEmail,
  setPassword,
  setUsername,
  setDisplayName,
  error,
  setLoggedIn,
  handleSignIn,
  handleCreateUser,
  handleGuest,
  createAccount,
  setCreateAccount,
}) => {
  return (
    <>
      <div className="fixed top-0 left-0 h-full w-full bg-sky-200/10 z-20 flex justify-center items-center">
        <div className="bg-black border border-white/20 rounded-2xl max-w-md w-full p-4 flex flex-col items-start">
          <h1 className="font-bold text-white text-2xl mb-8">
            You must log in to continue.
          </h1>
          {createAccount ? (
            <form className="flex flex-col gap-4 w-full">
              <input
                className="py-2 text-black rounded-3xl outline-none w-full ring-0 px-4"
                placeholder="Username"
                type="name"
                onChange={(e) => setUsername(e.target.value)}
                value={username}
                required
              />
              <input
                className="py-2 text-black rounded-3xl outline-none w-full ring-0 px-4"
                placeholder="Display Name"
                type="name"
                onChange={(e) => setDisplayName(e.target.value)}
                value={displayName}
                required
              />
              <input
                className="py-2 text-black rounded-3xl outline-none w-full ring-0 px-4"
                placeholder="Email"
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                required
              />
              <input
                className="py-2 text-black rounded-3xl outline-none w-full ring-0 px-4"
                placeholder="Password"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                required
              />
              {error ? (
                <p className="text-red-500">
                  Uh oh! Something went wrong. Try again.
                </p>
              ) : null}
              <div>
                <button
                  onClick={(e) => handleCreateUser(e)}
                  className="text-white py-2 px-4 bg-sky-500 hover:bg-sky-600 duration-150 rounded-full"
                >
                  Create
                </button>
                <button
                  onClick={() => setCreateAccount(false)}
                  className="text-white py-2 px-4"
                >
                  Return to Sign in
                </button>
              </div>
            </form>
          ) : (
            <form className="flex flex-col gap-4 w-full">
              <input
                className="py-2 text-black rounded-3xl outline-none w-full ring-0 px-4"
                placeholder="Email"
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                required
              />
              <input
                className="py-2 text-black rounded-3xl outline-none w-full ring-0 px-4"
                placeholder="Password"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                required
              />
              {error ? (
                <p className="text-red-500">
                  Uh oh! Something went wrong. Try again.
                </p>
              ) : null}
              <div>
                <button
                  onClick={(e) => handleSignIn(e)}
                  className="text-white py-2 px-4 bg-sky-500 hover:bg-sky-600 duration-150 rounded-full"
                >
                  Sign In
                </button>
                <button
                  onClick={() => setCreateAccount(true)}
                  className="text-white py-2 px-4"
                >
                  Create Account
                </button>
              </div>
            </form>
          )}
          <p
            onClick={(e) => handleGuest(e)}
            className="text-gray-400 underline mt-4 cursor-pointer"
          >
            Continue as guest
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
