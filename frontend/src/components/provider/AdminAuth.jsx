import { createContext, useState } from "react";
import { Navigate } from "react-router-dom";


export const AdminAuthContext = createContext();

export const AdminAuthProvider = ({ children }) => {
  const adminInfo = localStorage.getItem("adminInfo");
  const [user,setUser] = useState(adminInfo);
  

  const login = (user)=>{
    setUser(user);
  }

  const logout = () => {
    localStorage.removeItem("adminInfo");
    setUser(null);
  }
  const adminAuthInfo = {
    user,
    login,
    logout,

  };
  

  return (
    <AdminAuthContext.Provider value={adminAuthInfo}>
      {children}
    </AdminAuthContext.Provider>
  );
};