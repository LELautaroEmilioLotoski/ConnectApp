import React from "react";
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

const AsideUser = () => {
  return (
    <div className="bg-white w-[300px] h-full right-0 top-0 p-5 shadow-lg">
      <div className="fixed">
        <div className="bg-white text-black">
          <h4 className="text-xl p-2 mb-4">Menu</h4>
          <div>
            <div className="flex gap-2 items-center p-8">
              <User />
              <span>Mi perfil</span>
            </div>
            <div className="flex gap-2 items-center p-8">
              <Users />
              <span>Amigos</span>
            </div>
            <div className="flex gap-2 items-center p-8">
              <BookmarkIcon />
              <span>Guardados</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AsideUser;
