import { Camera } from "lucide-react";
import React from "react";

const CoverPhotoComponent = () => {
  return (
    <div className="w-[1080px] h-[250px] bg-red-700 relative">
      <div className="absolute bottom-5 right-5">
        <button className="btn btn-outline text-black bg-white">
          <Camera className="text-black" />
          Cambiar foto de portada
        </button>
      </div>
    </div>
  );
};

export default CoverPhotoComponent;
