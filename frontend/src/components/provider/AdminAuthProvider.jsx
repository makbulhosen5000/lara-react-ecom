import { createContext, useState } from "react";
import { toast } from "react-toastify";


export const AdminAuthContext = createContext();

export const AdminAuthProvider = ({ children }) => {
  const adminInfo = localStorage.getItem("adminInfo");
  const [admin,setAdmin] = useState(adminInfo);
  const [authenticate,setAuthenticate] = useState(false);
  


  
  const login = (admin) => {
    setAdmin(admin);
    setAuthenticate(true);
    
  };

  const logOut = () => {
    localStorage.removeItem("adminInfo");
    toast.success("Logout successful");
    setAdmin(null);
    setAuthenticate(false);
  }


  const adminAuthInfo = {
    admin,
    login,
    logOut,
    authenticate
  };
  
  
  return (
    <AdminAuthContext.Provider value={adminAuthInfo}>
      {children}
    </AdminAuthContext.Provider>
  );
};