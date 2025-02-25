"use client";
import React, { useState } from "react";
import { User, Mail, Bell, Users, Settings } from "lucide-react";

const navItems = [
  { icon: <User size={20} />, label: "Perfil" },
  { icon: <Mail size={20} />, label: "Mensajes" },
  { icon: <Bell size={20} />, label: "Notificaciones" },
  { icon: <Users size={20} />, label: "Amigos" },
  { icon: <Settings size={20} />, label: "Ajustes" },
];

const UserNavCommonComponent = () => {
  const [activeTab, setActiveTab] = useState("Perfil");
  return (
    <div>
     <div className="border-b border-gray-200 min-w-[490px] max-w-[940px] m-auto"></div>
      <nav className="flex">
        {navItems.map((item) => (
          <button
            key={item.label}
            className={`flex items-center px-4 py-2 text-sm font-medium ${
              activeTab === item.label
                ? "text-indigo-600 border-b-2 border-indigo-600"
                : "text-gray-500 hover:text-gray-700 hover:border-gray-300"
            }`}
            onClick={() => setActiveTab(item.label)}
          >
            {item.icon}
            <span className="ml-2">{item.label}</span>
          </button>
        ))}
      </nav>
    </div>
  );
};

export default UserNavCommonComponent;
