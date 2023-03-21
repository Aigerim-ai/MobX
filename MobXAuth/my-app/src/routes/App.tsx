import React, { useContext } from "react";
import { Auth } from "../components/auth/authComponent";
import { Routes, Route } from "react-router-dom";
import { Layout } from "../components/layout/layoutRoute";
import { Home } from "../components/home/homePage";
import { Require } from "./requireAuth";
import { storeContext } from '../context/storeContext';
import GetCookie from "../hooks/getCookie";
const App: React.FC = () => {
  const { authStore } = useContext( storeContext);


  return (
    <storeContext.Provider value={{authStore: authStore}}>
    <Routes>
      <Route path="/" element={<Layout />} >
        <Route path="login" element={<Auth />} />

        <Route element={<Require />}>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
        </Route>
      </Route>
    </Routes>
    </storeContext.Provider>
  );
};

export { App };
