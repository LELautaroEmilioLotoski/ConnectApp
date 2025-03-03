"use client";
import AsideUserLeft from "@/components/specific/aside/AsideUserLeft";
import AsideUserRight from "@/components/specific/aside/AsideUserRight";
import { useUserContext } from "@/context/user/UserContext";
import { IUserDataUpdate } from "@/interfaces/editProfile/editProfile";
import { editProfile } from "@/services/user/updateAccount/editProfile";
import { Save, X } from "lucide-react";
import React, { useState } from "react";
import ReactFlagsSelect from "react-flags-select";
import { useRouter } from "next/navigation";

const UpdateAccount = () => {
  const { user } = useUserContext();
  const [editDataUser, seteditDataUser] = useState<IUserDataUpdate>({
    name: "",
    email: "",
    bio: "",
    location: "",
    profilePicture: "",
    coverPicture: "",
    friends: 0,
    password: "",
    birthdate: "",
  });

  const [selected, setSelected] = useState("");

  const router = useRouter();

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    seteditDataUser((prev) => ({ ...prev, [name]: value }));
  };

  const handleOnClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (event) {
      confirm("Deseas cancelar? perderás los cambios realizados");
      router.push("/UserDashboard");
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!user) return;

    const { id } = user;

    const filteredData = Object.entries(editDataUser).reduce(
      (acc, [key, value]) => {
        if (value !== "") {
          acc[key as keyof IUserDataUpdate] = value;
        }
        return acc;
      },
      {} as Partial<IUserDataUpdate>
    );

    try {
      confirm("Se actualizó correctamente");
      const res = await editProfile(id, filteredData);

      if (res) {
        alert(
          "Cierra sesión y vuelve a iniciar nuevamente para que los cambios se guarden correctamente"
        );
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {user ? (
        <div className="bg-gray-100 min-h-screen flex relative">
          <AsideUserLeft />
          <section className="min-w-[940px] max-w-[1020px] m-auto bg-white shadow-lg rounded-lg p-6">
            <h1 className="text-2xl font-bold text-gray-800">Editar Perfil</h1>
            <span className="text-sm text-gray-600">
              Actualiza tu información personal y foto de perfil
            </span>
            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <section className="grid grid-cols-2">
                <div className="w-[150px] h-[150px] rounded-full overflow-hidden border-4 border-blue-500 shadow-md mt-4">
                  <img
                    src="https://png.pngtree.com/png-clipart/20190516/original/pngtree-users-vector-icon-png-image_3725294.jpg"
                    alt="Foto de perfil"
                    className="object-cover w-full h-full"
                  />
                </div>
                <div>
                  <div className="pb-6">
                    <label className="block text-gray-700 font-semibold">
                      Nombre completo:
                    </label>
                    <input
                      type="text"
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      name="name"
                      value={editDataUser.name}
                      onChange={handleChange}
                      placeholder={user.name}
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-semibold">
                      Correo electrónico:
                    </label>
                    <input
                      type="email"
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 bg-gray-100 cursor-not-allowed"
                      name="email"
                      defaultValue={user.email}
                      disabled
                    />
                  </div>
                </div>
              </section>
              <h3 className="text-xl font-semibold text-gray-800 pt-6">
                Información personal
              </h3>
              <div>
                <label className="block text-gray-700 font-semibold">
                  Biografía:
                </label>
                <textarea
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 h-40 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  name="bio"
                  onChange={handleChange}
                  value={editDataUser.bio}
                  placeholder={user.bio}
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold">
                  Fecha de nacimiento:
                </label>
                <input
                  type="date"
                  name="birthdate"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  onChange={handleChange}
                  value={editDataUser.birthdate}
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold">
                  Contraseña:
                </label>
                <input
                  type="password"
                  name="password"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  onChange={handleChange}
                  value={editDataUser?.password}
                  placeholder={"•••••••••••"}
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold">
                  ¿De dónde eres?
                </label>
                <ReactFlagsSelect
                  selected={selected}
                  onSelect={(code) => {
                    setSelected(code);
                    seteditDataUser((prev) => ({ ...prev, location: code }));
                  }}
                  searchPlaceholder="Buscar países"
                  placeholder="Selecciona tu país"
                  searchable
                />
              </div>

              <section className="flex gap-4 mt-6">
                <button
                  className="flex items-center gap-2 border px-4 py-2 rounded-lg bg-gray-200 text-gray-700 hover:bg-gray-300 transition"
                  onClick={handleOnClick}
                >
                  <X /> Cancelar
                </button>
                <button
                  className="flex items-center gap-2 border px-4 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition"
                  type="submit"
                >
                  <Save /> Guardar cambios
                </button>
              </section>
            </form>
          </section>
          <AsideUserRight />
        </div>
      ) : (
        <h2>No hay nada</h2>
      )}
    </>
  );
};

export default UpdateAccount;
