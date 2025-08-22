
import React, { useContext } from "react";
import { UserAuthContext } from "../../../provider/UserAuthProvider";

export default function UserTopbar() {
    const {user,logOut} = useContext(UserAuthContext);
  return (
    
     <div className="bg-white shadow px-6 py-4 flex justify-between items-center sticky top-0 z-10">
      <h2 className="text-xl font-bold text-gray-800">👋 Hello {user?.name.toUpperCase()}'S OVERVIEW</h2>
      <div className="flex items-center gap-4">
        <span className="text-gray-600">{user?.name.toUpperCase()}'S ACCOUNT</span>
        <button onClick={logOut} className="bg-red-600 hover:bg-red-800 text-white px-4 py-2 rounded-lg">
          Logout
        </button>
      </div>
    </div>

  );
}
