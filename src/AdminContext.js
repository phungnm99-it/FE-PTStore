import { useState, createContext } from "react";
import Auth from "./config/auth";

const AdminContext = createContext();

function AdminProvider({ children }) {
  const initUser = () => {
    if (Auth.isLogin()) {
      if (
        Auth.getCurrentUser().role === "Admin" ||
        Auth.getCurrentUser().role === "SuperAdmin"
      )
        return "user";
      else {
        Auth.logout();
        return null;
      }
    } else {
      Auth.logout();
      return null;
    }
  };
  const [user, setUser] = useState(initUser());

  const login = () => {
    return setUser("user");
  };

  const logout = () => {
    return setUser(null);
  };

  const value = { user, login, logout };

  return (
    <AdminContext.Provider value={value}>{children}</AdminContext.Provider>
  );
}

export { AdminProvider, AdminContext };
