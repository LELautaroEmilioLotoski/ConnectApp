import { Pencil, Plus } from "lucide-react";
import Link from "next/link";
import React from "react";

const UserButtonsCommon = () => {
  return (
    <div className="flex justify-end gap-4">
      <Link href="/UpdateAccount" className="flex justify-center items-center gap-4 btn btn-outline btn-info text-white border p-2 rounded-lg">
        <Pencil />
        Editar Perfil
      </Link>
      <button className="flex justify-center items-center gap-4 bg-blue-500 hover:bg-blue-600 text-white border p-2 rounded-lg">
        <Plus />
        Subir historia
      </button>
    </div>
  );
};

export default UserButtonsCommon;
