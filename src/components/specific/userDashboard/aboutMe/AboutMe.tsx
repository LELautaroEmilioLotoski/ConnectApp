import { useUserContext } from "@/context/user/UserContext";
import React from "react";

const AboutMe = () => {
  const { user } = useUserContext();
  return (
    <div>
      {user ? (
      <span className="flex text-gray-400 justify-center items-center">
       {user.bio}
      </span>
      ) : (
        <h2>No disponible</h2>
      )}
    </div>
  );
};

export default AboutMe;
