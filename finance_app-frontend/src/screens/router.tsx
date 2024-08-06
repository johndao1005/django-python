import React, {  createContext, useState, ReactNode, FC } from "react";
import {
  useNavigate,
} from "react-router-dom";
import {  useAppSelector } from "../hook/initial";
import { AuthState, ContextProviderProps, ContextType } from "../constants/interfaces";
import PublicRouter from "./PublicRouter";
import AppRouter from "./AppRouter";

/* --------------------------------- Context -------------------------------- */

const Context = createContext<ContextType | undefined>(undefined);

export const ContextProvider: FC<ContextProviderProps> = ({ children }) => {

  const navigate = useNavigate();
  const [currentRoute, setCurrentRoute] = useState<string>('/');
  const navigateTo = (route: string) => {
    setCurrentRoute(route);
    navigate(route);
  };

  return (
    <Context.Provider value={{ currentRoute, navigateTo }}>
      {children}
    </Context.Provider>
  );
};


const MainRouter = () => {
  const { user } = useAppSelector((state) => state.auth as AuthState);
  if(!user)return PublicRouter();
  return AppRouter();
}



export default MainRouter

