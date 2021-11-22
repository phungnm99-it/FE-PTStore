import React from "react";
import { AuthProvider } from "./AuthContext";
import { AuthContext } from "./AuthContext";
import { useContext } from "react";
import Header from "./components/Header";
import Account from "./components/customer/Account";
import { Switch, Route, Redirect } from "react-router-dom";
import HeaderMid from "./components/MidHeader";
import Login from "./components/Login";
import EndHeader from "./components/EndHeader";
import Footer from "./components/Footer";
import Slide from "./components/Slide";
import FeaturedProducts from "./components/FeatureProduct";
import RecommendProducts from "./components/RecommendProduct";
import Cart from "./components/cart/Cart";
import ProductDetail from "./components/productDetail/ProductDetail";

function App() {
  return (
    <div>
      <AuthProvider>
        <Header />
        <HeaderMid />
        <EndHeader />
        <Switch>
          <Route exact path="/">
            <Slide />
            <FeaturedProducts />
            <RecommendProducts />
          </Route>
          <Route exact path="/home">
            <Slide />
            <FeaturedProducts />
            <RecommendProducts />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/cart">
            <Cart />
          </Route>
          <Route path="/home/phone/detail/:id">
            <ProductDetail />
          </Route>
          <PrivateRoute path="/account">
            <Account />
          </PrivateRoute>
        </Switch>
        <Footer />
      </AuthProvider>
    </div>
  );
}

function PrivateRoute({ children, ...rest }) {
  let auth = useContext(AuthContext);
  return (
    <Route
      {...rest}
      render={({ location }) =>
        auth.user ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}

export default App;
