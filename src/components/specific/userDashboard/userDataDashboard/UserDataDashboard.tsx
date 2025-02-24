import { Camera } from "lucide-react";
import React from "react";

const UserDataDashboard = () => {
  return (
    <div className="absolute w-32 h-32">
      <div className="bg-black text-white w-32 h-32 rounded-full flex items-center justify-center">
        <span className="text-xl">A</span>
      </div>
      <div className="absolute bottom-0 right-0 bg-gray-200 p-2 rounded-full shadow-md">
        <Camera size={20} className="text-black" />
      </div>
    </div>
  );
};

export default UserDataDashboard;
