import { useState, createContext } from "react";
import Auth from "./config/auth";

const ShipperContext = createContext();

function ShipperProvider({ children }) {
  const initUser = () => {
    if (Auth.isLogin()) {
      if (Auth.getCurrentUser().role === "Shipper") return "user";
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
    <ShipperContext.Provider value={value}>{children}</ShipperContext.Provider>
  );
}

export { ShipperProvider, ShipperContext };
