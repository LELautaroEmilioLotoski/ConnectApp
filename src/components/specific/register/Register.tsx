"use client";
import { IUserDataRegister } from "@/interfaces/userDataAuth/userDataRegister";
import { dataUserRequest } from "@/mocks/mockRegister";
import React, { useState } from "react";

const Register = () => {
  const [user, setUser] = useState<IUserDataRegister>({
    userName: "",
    email: "",
    password: "",
    birthday: "",
  });

  const users = [
    {
      userName: user.userName,
      email: user.email,
      password: user.password,
      birthday: user.birthday,
    },
  ];

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const { userName, email, password, birthday } = user;

    if (!userName || !email || !password || !birthday)
      return alert("Por favor, completar todos los campos");

    if (user) {
      dataUserRequest.userName = userName;
      dataUserRequest.email = email;
      (dataUserRequest.password = password),
        (dataUserRequest.birthday = birthday);
    }

    try {
      if (user) {
        const usuarios = users.map((userData) => ({
          userName: userData.userName,
          email: userData.email,
          password: userData.password,
          birthday: userData.birthday,
        }));

        console.log(usuarios);

        alert("Se registró correctamente");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
  <>
  <form
    onSubmit={handleSubmit}
    className="max-w-md mx-auto mt-10 p-6 bg-white rounded-2xl shadow-md space-y-6"
  >
    <h1 className="text-center text-3xl font-bold text-gray-800">
      Create an Account
    </h1>
    <h3 className="text-center text-lg text-gray-600">
      Sign up for your new account
    </h3>

    {/* Email Input */}
    <div>
      <label htmlFor="email" className="block text-sm font-medium text-gray-700">
        Email
      </label>
      <div className="mt-1 flex items-center border rounded-md px-3 py-2 focus-within:ring-2 focus-within:ring-indigo-500">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          className="h-5 w-5 text-gray-400"
        >
          <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
          <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
        </svg>
        <input
          type="email"
          name="email"
          id="email"
          value={user.email}
          onChange={handleChange}
          placeholder="Your email"
          className="flex-grow border-none focus:outline-none text-gray-800 ml-3"
        />
      </div>
    </div>

    {/* Username Input */}
    <div>
      <label
        htmlFor="username"
        className="block text-sm font-medium text-gray-700"
      >
        Username
      </label>
      <div className="mt-1 flex items-center border rounded-md px-3 py-2 focus-within:ring-2 focus-within:ring-indigo-500">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          className="h-5 w-5 text-gray-400"
        >
          <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
        </svg>
        <input
          type="text"
          name="userName"
          id="userName"
          value={user.userName}
          onChange={handleChange}
          placeholder="Choose a username"
          className="flex-grow border-none focus:outline-none text-gray-800 ml-3"
        />
      </div>
    </div>

    {/* Password Input */}
    <div>
      <label
        htmlFor="password"
        className="block text-sm font-medium text-gray-700"
      >
        Password
      </label>
      <div className="mt-1 flex items-center border rounded-md px-3 py-2 focus-within:ring-2 focus-within:ring-indigo-500">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          className="h-5 w-5 text-gray-400"
        >
          <path
            fillRule="evenodd"
            d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
            clipRule="evenodd"
          />
        </svg>
        <input
          type="password"
          name="password"
          id="password"
          value={user.password}
          onChange={handleChange}
          placeholder="Enter your password"
          className="flex-grow border-none focus:outline-none text-gray-800 ml-3"
        />
      </div>
    </div>

    {/* Birthday Input */}
    <div>
      <label
        htmlFor="birthday"
        className="block text-sm font-medium text-gray-700"
      >
        Birthday
      </label>
      <input
        type="date"
        name="birthday"
        id="birthday"
        value={user.birthday}
        onChange={handleChange}
        className="mt-1 w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-indigo-500"
      />
    </div>

    {/* Submit Button */}
    <button
      type="submit"
      className="w-full py-2 px-4 bg-indigo-500 text-white rounded-md shadow-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
    >
      Enviar
    </button>
  </form>
</>

  );
};

export default Register;
