import React from "react";
import MenuItems from "./menuItems/MenuItems";
import History from "./historys/Historys";

const Feed = () => {
  return (
    <div className="grid grid-cols-3 p-14">
      <MenuItems />
        <History />
    </div>
  );
};

export default Feed;
