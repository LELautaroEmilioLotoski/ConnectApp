"use client";
import { IUserData } from "@/interfaces/userData/userData";
import React, { createContext, useContext, useEffect, useState } from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

interface IUserContextProps {
  user: IUserData | null;
  setUser: (user: IUserData | null) => void;
  token: string | undefined;
  setToken: (token: string | undefined) => void;
  logoutUser: () => void;
}

const AuthContext = createContext<IUserContextProps>({
  user: {
    id: "",
    name: "",
    email: "",
    bio: "",
    location: "",
    profilePicture: "",
    coverPicture: "",
    friends: 0,
    token: "",
  },
  setUser: () => {},
  token: "",
  setToken: () => "",
  logoutUser: () => {}
});

const UserContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<IUserData | null>(null);
  const [token, setToken] = useState<string | undefined>(undefined);
  const router = useRouter();
  
  useEffect(() => {
    const cookieToken = Cookies.get("userToken");
    if (cookieToken) {
      setToken(cookieToken);

      const userData = localStorage.getItem("userData");
      if (userData) {
        setUser(JSON.parse(userData));
      }
    }
  }, [token]);

  const logoutUser = () => {
    const cookieToken = Cookies.get("userToken");
    const userData = localStorage.getItem("userData");

    if(cookieToken && userData){
      Cookies.remove("userToken");
      localStorage.removeItem("userData")
      router.push("/")
    }
  }

  return (
    <AuthContext.Provider value={{ user, setUser, token, setToken, logoutUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useUserContext = () => useContext(AuthContext);

export default UserContextProvider;
