"use client";
import { IUserDataResponseData } from "@/interfaces/userData/userData";
import React, { createContext, useContext, useEffect, useState } from "react";
import Cookies from "js-cookie";

interface IUserContextProps {
  user: IUserDataResponseData | null;
  setUser: (user: IUserDataResponseData | null) => void;
  token: string | undefined;
  setToken: (token: string | undefined) => void;
}

const AuthContext = createContext<IUserContextProps>({
  user: {
    id: "",
    name: "",
    email: "",
    token: "",
  },
  setUser: () => {},
  token: "",
  setToken: () => "",
});

const UserContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<IUserDataResponseData | null>(null);
  const [token, setToken] = useState<string | undefined>(undefined);

  useEffect(() => {
    const cookieToken = Cookies.get("userToken");
    if (cookieToken) {
      setToken(cookieToken);
    }
  }, []);

  useEffect(() => {
    const userData = localStorage.getItem("userData");
    if (userData) {
      const userParseData = JSON.parse(userData);

      setUser(userParseData);
    } else {
      console.log("No se pudo realizar la actualización del estado");
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser, token, setToken }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useUserContext = () => useContext(AuthContext);

export default UserContextProvider;
