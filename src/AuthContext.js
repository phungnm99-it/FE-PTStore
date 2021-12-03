import { useState, createContext } from "react";
import Auth from "./config/auth";

const AuthContext = createContext();

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [cart, setCart] = useState([]);

  const resetCart = () => {
    setCart([]);
  }

  const addToCart = ({ product }) => {
    setCart((prev) => {
      let found = prev.find((element) => element.id === product.id);
      if (typeof found !== "undefined") {
        found.quantity = product.quantity || 1;
        return [...prev];
      } else {
        return [...prev, product];
      }
    });
  };

  const updateCart = ({ product }) => {
    setCart(product);
  };

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

  const value = { user, login, logout, cart, addToCart, updateCart, resetCart };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export { AuthProvider, AuthContext };
