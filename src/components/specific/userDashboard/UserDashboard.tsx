import { users } from "@/mocks/usersMock";
import React from "react";

const UserDashboard = () => {
  const usersData = users[2];

  return (
    <div>
      <h1>Perfil de usuario</h1>
      <div>
        <h4>Datos:</h4>
        <p>UserName: {usersData.name}</p>
        <p>biografia: {usersData.bio}</p>
        <p>location: {usersData.location}</p>
        <p>profilePicture: {usersData.profilePicture}</p>
        <p>coverPicture: {usersData.coverPicture}</p>
        <p>friends: {usersData.friends}</p>
      </div>
    </div>
  );
};

export default UserDashboard;
