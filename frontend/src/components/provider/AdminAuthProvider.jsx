import { createContext, useState } from "react";


export const AdminAuthContext = createContext();

export const AdminAuthProvider = ({ children }) => {
  const adminInfo = localStorage.getItem("adminInfo");
  const [user,setUser] = useState(adminInfo);
  
  
  const login = (user) => {
    setUser(user);
  };

  const logOut = () => {
    localStorage.removeItem("adminInfo");
    setUser(null);
  }
  const adminAuthInfo = {
    user,
    login,
    logOut,

  };
  
  
  return (
    <AdminAuthContext.Provider value={adminAuthInfo}>
      {children}
    </AdminAuthContext.Provider>
  );
};