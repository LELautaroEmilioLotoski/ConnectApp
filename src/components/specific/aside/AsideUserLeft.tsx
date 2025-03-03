import React from "react";
import {
  Home,
  MessageCircle,
  Bell,
  Users,
  Bookmark,
  Settings,
} from "lucide-react";
import { useUserContext } from "@/context/user/UserContext";
import Link from "next/link";

const navItems = [
  { icon: Home, label: "Inicio" },
  { icon: MessageCircle, label: "Mensajes" },
  { icon: Bell, label: "Notificaciones" },
  { icon: Users, label: "Amigos" },
  { icon: Bookmark, label: "Guardado" },
  { icon: Settings, label: "Configuración" },
];

const AsideUserLeft = () => {
  const { user } = useUserContext();

  return (
    <>
      {user ? (
        <div className="absolute left-0 top-0 h-full w-[260px] bg-white p-5">
          <div className="fixed">
            <div className="avatar placeholder pb-4">
              <div className="bg-neutral text-neutral-content w-12 rounded-full">
                <span>A</span>
              </div>
              <Link href="/UserDashboard" className="flex items-center pl-4 text-black">
                {user.name}
              </Link>
            </div>
            {navItems.map((elem) => (
              <div key={elem.label} className="mb-2 text-lg">
                <a
                  href="#"
                  className="flex items-center gap-2 text-gray-700 hover:text-blue-500 hover:bg-gray-200 rounded p-2"
                >
                  <elem.icon size={20} />
                  {elem.label}
                </a>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <h2>Inicia sesion primero</h2>
      )}
    </>
  );
};

export default AsideUserLeft;
