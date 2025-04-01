"use client"; // Marca este componente como un Client Component

import { Provider } from "react-redux";
import store from "@/redux/store";
import UserContextProvider from "@/context/user/UserContext";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <UserContextProvider>{children}</UserContextProvider>
    </Provider>
  );
}