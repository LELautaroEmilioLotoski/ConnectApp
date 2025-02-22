import {
  Bell,
  BookmarkIcon,
  Camera,
  Globe,
  Home,
  MessageCircle,
  MoreHorizontal,
  PlusCircle,
  Send,
  Share2,
  ThumbsUp,
  User,
  Users,
} from "lucide-react";
import React from "react";

const MenuItems = () => {
  return (
    <div className="border max-w-72 rounded-md bg-white text-black">
      <div className="p-10">
      <h4 className="text-xl p-2 mb-4">Menu</h4>
        <div className="flex gap-2 items-center p-2">
          <User />
          <span>Mi perfil</span>
        </div>
        <div className="flex gap-2 items-center p-2">
          <Users />
          <span>Amigos</span>
        </div>
        <div className="flex gap-2 items-center p-2">
          <BookmarkIcon />
          <span>Guardados</span>
        </div>
      </div>
    </div>
  );
};

export default MenuItems;
