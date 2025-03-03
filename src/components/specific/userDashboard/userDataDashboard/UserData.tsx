import React from "react";
import AboutMe from "../aboutMe/AboutMe";
import { useUserContext } from "@/context/user/UserContext";

const UserData = () => {
  const { user } = useUserContext();

  return (
    <>
      {user ? (
        <div className="relative flex flex-col items-center pl-28">
          <h2 className="text-3xl font-bold text-black">{user?.name}</h2>
          <AboutMe />
        </div>
      ) : (
        <h2>Inicia sesión primero</h2>
      )}
    </>
  );
};

export default UserData;
