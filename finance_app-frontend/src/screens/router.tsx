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
/* --------------------------------- States and Functions -------------------------------- */
  const [currentRoute, setCurrentRoute] = useState<string>('/');
  // Function to navigate to a different route
  const navigate = useNavigate();
  const navigateTo = (route: string) => {
    setCurrentRoute(route);
    navigate(route);
  };
/* --------------------------------- Main -------------------------------- */
  return (
    <Context.Provider value={{ currentRoute, navigateTo }}>
      {children}
    </Context.Provider>
  );
};


const MainRouter = () => {
  // Get the user from the store then render the appropriate router
  const { user } = useAppSelector((state) => state.auth as AuthState);
  if(!user) return PublicRouter();
  return AppRouter();
}



export default MainRouter

