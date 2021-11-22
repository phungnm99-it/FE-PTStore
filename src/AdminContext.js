import { useState, createContext } from "react";
import Auth from "./config/auth";

const AdminContext = createContext();

function AdminProvider({ children }) {
  const [user, setUser] = useState(null);

  const login = (cb) => {
    return Auth.login(() => {
      setUser("user");
      cb();
    });
  };

  const logout = (cb) => {
    return Auth.logout(() => {
      setUser(null);
      cb();
    });
  };

  const value = { user, login, logout };

  return (
    <AdminContext.Provider value={value}>{children}</AdminContext.Provider>
  );
}

export { AdminProvider, AdminContext };
