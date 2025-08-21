import { createContext, useState } from "react";
import { toast } from "react-toastify";


export const AdminAuthContext = createContext();

export const AdminAuthProvider = ({ children }) => {
  const adminInfo = localStorage.getItem("adminInfo");
  const [user,setUser] = useState(adminInfo);
  const [adminDashboardHideShow,setAdminDashboardHideShow] = useState(false);
  


  
  const login = (user) => {
    setUser(user);
    setAdminDashboardHideShow(true);
    
  };

  const logOut = () => {
    localStorage.removeItem("adminInfo");
    toast.success("Logout successful");
    setUser(null);
    setAdminDashboardHideShow(false);
  }


  const adminAuthInfo = {
    user,
    login,
    logOut,
    adminDashboardHideShow
  };
  
  
  return (
    <AdminAuthContext.Provider value={adminAuthInfo}>
      {children}
    </AdminAuthContext.Provider>
  );
};