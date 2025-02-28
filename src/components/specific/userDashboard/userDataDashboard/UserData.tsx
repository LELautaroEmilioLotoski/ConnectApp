import React from "react";
import AboutMe from "../aboutMe/AboutMe";
import { useUserContext } from "@/context/user/UserContext";

const UserData = () => {
  const { user } = useUserContext();

  return (
    <div className="relative">
      <h2 className="flex text-3xl font-bold text-black justify-center items-center">
        {user?.name}
      </h2>
      <AboutMe />
    </div>
  );
};

export default UserData;
