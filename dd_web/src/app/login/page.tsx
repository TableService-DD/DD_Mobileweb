"use client";
import { Tokens, UserInfo, getLogin, getRefresh } from "@/api/auth";
import React, { useEffect, useState } from "react";

function LoginPage() {
  const [userInfo, setUserInfo] = useState<UserInfo>({ id: "", pw: "" });
  const [tokens, setTokens] = useState<Tokens | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserInfo({
      ...userInfo,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const tokens = await getLogin(userInfo);

    if (tokens) {
      setTokens(tokens);
    } else {
      alert("Login Failed");
    }
  };

  return (
    <section className="p-6 py-12 flex flex-col gap-4 justify-center">
      <div className="flex flex-col mb-4">
        <h1 className="text-2xl font-bold">DDING DDONG</h1>
        <span className="text-md text-gray-400">
          Please enter your ID and Password
        </span>
      </div>
      <form onSubmit={handleSubmit} className="flex flex-col my-4">
        <div className="flex flex-col mb-2">
          <label htmlFor="id" className="text-gray-400 text-md">
            ID
          </label>
          <input
            type="text"
            id="id"
            name="id"
            className="border-b-2 px-3 py-1 mt-1 focus:outline-transparent"
            value={userInfo.id}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col mb-2">
          <label htmlFor="pw" className="text-gray-400 text-md">
            Password
          </label>
          <input
            type="password"
            id="pw"
            name="pw"
            className="border-b-2 px-3 py-1 mt-1 focus:outline-transparent"
            value={userInfo.pw}
            onChange={handleChange}
          />
        </div>
        <button
          type="submit"
          className="w-full p-2 bg-primary text-white rounded-md mt-4"
        >
          Log In
        </button>
      </form>
    </section>
  );
}

export default LoginPage;
