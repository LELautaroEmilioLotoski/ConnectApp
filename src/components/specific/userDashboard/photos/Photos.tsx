import { publicaciones } from "@/mocks/publicaciones";
import React from "react";

const Photos = () => {
  return (
    <div className="bg-white p-4 rounded-lg">
      <h3 className="font-bold text-black text-2xl">Fotos</h3>
      <div className="grid grid-cols-3 grid-rows-3 bg-white w-[300px] h-[250px] p-4">
        {publicaciones.map((data) => (
            <div key={data.id}>
                <p className="text-black">{data.image}</p>
            </div>
        ))}
      </div>
    </div>
  );
};

export default Photos;
