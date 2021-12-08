import { useState, createContext } from "react";
import Auth from "./config/auth";

const AuthContext = createContext();

function AuthProvider({ children }) {
  const initUser = () => {
    initCart();
    if (Auth.isLogin()) {
      if (Auth.getCurrentUser().role === "User") return "user";
      else {
        Auth.logout();
        return null;
      }
    } else {
      Auth.logout();
      return null;
    }
  };

  const initCart = () => {
    if (localStorage.getItem("cart") === null) {
      return null;
    }
    return JSON.parse(localStorage.getItem("cart"));
  };

  const [user, setUser] = useState(initUser());
  const [cart, setCart] = useState(initCart() ?? []);

  const resetCart = () => {
    localStorage.removeItem("cart");
    setCart([]);
  };

  const addToCart = ({ product }) => {
    if (localStorage.getItem("cart") === null) {
      let x = [product];
      localStorage.setItem("cart", JSON.stringify(x));
      console.log(x);
    } else {
      let x = JSON.parse(localStorage.getItem("cart"));
      let found = x.find((e) => e.id === product.id);
      if (typeof found !== "undefined") {
        found.quantity = product.quantity || 1;
        localStorage.removeItem("cart");
        localStorage.setItem("cart", JSON.stringify(x));
      } else {
        localStorage.removeItem("cart");
        localStorage.setItem("cart", JSON.stringify([...x, product]));
      }
    }

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

  const removeItem = (id) => {
    let x = JSON.parse(localStorage.getItem("cart"));
    x.filter((item) => item.id != id);
    localStorage.removeItem("cart");
    localStorage.setItem("cart", JSON.stringify(x));
    setCart((prev) => {
      return prev.filter((item) => item.id != id);
    });
  };

  const updateCart = ({ product }) => {
    setCart(product);
  };

  const login = () => {
    return setUser("user");
  };

  const logout = () => {
    return setUser(null);
  };

  const value = {
    user,
    login,
    logout,
    cart,
    addToCart,
    updateCart,
    resetCart,
    removeItem,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export { AuthProvider, AuthContext };
