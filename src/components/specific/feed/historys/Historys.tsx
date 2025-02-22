import { User } from "lucide-react";
import React from "react";

const History = () => {
  return (
    <div className="border rounded-md bg-white p-10 max-w-3xl">
      <h4 className="text-xl text-black">Historias</h4>
      <div className="flex items-center p-4">
      <div className="avatar placeholder">
          <div className="bg-slate-100 text-black w-16 rounded-full m-2">
            <User />
          </div>
        </div>
        <div className="avatar placeholder">
          <div className="bg-slate-100 text-black w-16 rounded-full m-2">
            <span className="text-xl">A</span>
          </div>
        </div>
        <div className="avatar placeholder">
          <div className="bg-slate-100 text-black w-16 rounded-full m-2">
            <span className="text-xl">A</span>
          </div>
        </div>
        <div className="avatar placeholder">
          <div className="bg-slate-100 text-black w-16 rounded-full m-2">
            <span className="text-xl">A</span>
          </div>
        </div>
        <div className="avatar placeholder">
          <div className="bg-slate-100 text-black w-16 rounded-full m-2">
            <span className="text-xl">A</span>
          </div>
        </div>
        <div className="avatar placeholder">
          <div className="bg-slate-100 text-black w-16 rounded-full m-2">
            <span className="text-xl">A</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default History;
