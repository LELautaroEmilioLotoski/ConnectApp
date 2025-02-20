"use client";
import { IUserDataLogin } from "@/interfaces/userDataAuth/userDataLogin";
import { ILoginRequest } from "@/mocks/mockInicioSesion";
import React, { useState } from "react";

const Login = () => {
  const [user, setUser] = useState<IUserDataLogin>({
    email: "",
    password: "",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setUser((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const { email, password } = user;

    if(!email || !password) return alert("Por favor, completa todos los campos")
    
    if(user){
        ILoginRequest.email = email
        ILoginRequest.password = password
    }

    try {
      alert("me loguee correctamente");
      console.log(ILoginRequest);
      
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            name="email"
            id="email"
            value={user.email}
            onChange={handleChange}
            className="text-white"
          />
        </div>
        <div>
          <label htmlFor="password">Contraseña:</label>
          <input
            type="password"
            name="password"
            id="password"
            value={user.password}
            onChange={handleChange}
            className="text-white"
          />
        </div>
        <button type="submit">Enviar</button>
      </form>
    </>
  );
};

export default Login;
