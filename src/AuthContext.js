import { useState, createContext } from "react";
import fakeAuth from "./config/auth";

const AuthContext = createContext();

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [cart, setCart] = useState([]);

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

  const signin = (cb) => {
    return fakeAuth.signin(() => {
      setUser("user");
      cb();
    });
  };

  const signout = (cb) => {
    return fakeAuth.signout(() => {
      setUser(null);
      cb();
    });
  };

  const value = { user, signin, signout, cart, addToCart, updateCart };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export { AuthProvider, AuthContext };
