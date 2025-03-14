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

const AsideUserRight = () => {
  return (
    <div className="bg-white p-5 shadow-lg absolute right-0 top-0 h-full w-[260px]">
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

export default AsideUserRight;
